import { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';

const Card = ({ detail,id }) => {
 const [population,setPopulation] = useState('')
   useEffect(() => {
   let num = detail.population;
   let pString = '';
   let pArr = num.toString().split('');
   let count = 1;
   for(let i = pArr.length-1 ;i >= 0;i--){ if(count % 3 === 0 && i >= 1) {
       pString =`,${pArr[i]}` + pString;
       count++;
    } else {
      pString=pArr[i] + pString;
        count++;
    }
   }
   setPopulation(pString)
   },[detail.population])
   
  return (
   <Link to={`/more/${id}`}>
    <div className="w-[250px] h-[350px] mx-auto md:mx-0 mb-10 md:w-64 shadow-2xl rounded-lg pb-6 dark:bg-[#2B3743] dark:text-[#fff]">
      <img className="w-full h-1/2 mb-4" src={ detail.flags.svg } alt="" />
      <div className="flex flex-col items-start justify-between px-6">
       <h2 className="mb-4 font-extrabold">{ detail.name }</h2>
       <p><span className="font-medium">population: </span>{ population }</p>
       <p><span className="font-medium">Region: </span>{ detail.region }</p>
       <p><span className="font-medium">Capital: </span>{ detail.capital }</p>
      </div>
    </div>
    </Link>
    )
}

export default Card;