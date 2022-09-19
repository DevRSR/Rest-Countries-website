import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeftLong } from "@fortawesome/free-solid-svg-icons";


const More = () => {
  const { id } = useParams();
  const[detail,setDetails] = useState([]);
  const[border,setBorder] = useState(true);
  const[population,setPopulation] = useState('');
  const[Loading,setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${id}?fields=topLevelDomain,languages,region,subregion,capital,currencies,borders,population,name,nativeName,flags`)
  .then(res => res.json())
  .then(data => {
    let miniData = Object.assign({},data[0])
    if(miniData.borders === undefined){
      setBorder(false)
    }
    let num = miniData.population;
    let pString = '';
    let pArr = num.toString().split('');
    let count = 1;
    for(let i = pArr.length-1 ;i >= 0;i--){ 
    if(count % 3 === 0 && i >= 1) {
       pString =`,${pArr[i]}` + pString;
       count++;
    } else {
      pString =pArr[i] + pString;
        count++;
    }
  }
    setPopulation(pString)
    setDetails(miniData);
    setLoading(true);
  })
  .catch(err => console.log(err))
  })
 
  return(
     <div className="flex flex-col items-start justify-between mt-12 px-4 dark:bg-[#212E37] dark:text-[#fff]">
      <a href="/" className='shadow-lg bg-[#fff] dark:text-[#fff] dark:bg-[#2B3743] md:mb-10 px-4 py-2'><FontAwesomeIcon icon={faArrowLeftLong} className='pr-2' /> back</a>
    { Loading ?
     <div className="flex flex-col md:flex-row items-start md:items-center md:justify-between w-full mt-10">
      <img className="w-full md:w-[200px] md:basis-[45%] md:h-[100%] my-10 mx-auto md:mx-0" src={ detail.flags.svg } alt=''/>
     <div className="md:flex md:flex-col items-start basis-[50%] justify-between md:pt-4">
      <h2 className="mb-4 md:mb-0 font-extrabold">{ detail.name }</h2>
      <div className="flex flex-col md:flex-row md:items-start md:justify-between mt-4 md:mt-2">
       <div className='mb-4 md:mb-2'>
        <p className="py-2 md:py-1"><span className="font-medium">Native name: </span>{ detail.nativeName }</p>
        <p className="py-2 md:py-1"><span className="font-medium">population: </span>{ population }</p>
        <p className="py-2 md:py-1"><span className="font-medium">Region: </span>{ detail.region }</p>
        <p className="py-2 md:py-1"><span className="font-medium">Sub Region: </span>{ detail.subregion }</p>
        <p className="py-2 md:py-1"><span className="font-medium">Capital: </span>{ detail.capital }</p>
       </div>
       <div className="my-6 md:my-0 md:ml-12">
        <p className="py-2 md:py-1"><span className="font-medium">top level domain: </span>{ detail.topLevelDomain[0] }</p>
        <p className="py-2 md:py-1"><span className="font-medium">Currencies: </span>{ 
          detail.currencies.map(currency=> `${currency.name}  `)
        }</p>
        <p className="py-2 md:py-1"><span className="font-medium">Languages: </span>{
          detail.languages.map(language => `${language.name}  `)
       }</p>
       </div>
      </div>
    <div className = 'flex md:flex-row flex-col items-start justify-between my-10 md:mt-5 md:mb-0'>
     <h4 className="md:mr-3 md:py-2 mb-4 font-medium">Border Countries:</h4>
      {border ? <div className=" dark:bg-[#212E37] grid grid-cols-5 gap-3"> 
      { detail.borders.map((borde,index) => <p key = {index} className='px-4 py-2 text-center shadow-lg bg-[#fff] lowercase dark:bg-[#2B3743]'>{ borde }</p>)} 
      </div> : <p>Border Not available</p>}
       </div>
     </div>
    </div>:<p className='w-full text-center mt-10 font-light'>please wait a minute</p> }
   </div>
    )
}
export default More;