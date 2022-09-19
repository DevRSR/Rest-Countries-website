import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Search from './Search';
import Card from './Card';

const Region = () => {
  const { term } = useParams();
  const [details,setDetails] = useState([])
  const [isLoading,setLoading] = useState(false)
  useEffect(() => {
    fetch(`https://restcountries.com/v2/region/${ term }?fields=name,capital,flags,population,region`)
  .then(res => res.json())
  .then(data => {
    setDetails(data);
    setLoading(true)
  })
  .catch(err => console.log(err))
  },[term])
  
  
  return (
    <div>
     <Search />
      <div className="grid md:grid-cols-3 gap-12 px-3 md:px-8 dark:bg-[#212E37] w-screen">
     { isLoading ? details.map((detail,index) => <Card key={index} detail={ detail } id={ detail.name } />) : <div className='w-screen mt-32 font-light text-center mr-8 dark:text-[#fff]'>Loading....</div> }
         </div>
      </div>
    )
}

export default Region;