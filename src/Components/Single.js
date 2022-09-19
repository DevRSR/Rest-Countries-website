import {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Card from './Card';


const Single = () => {
  const { name } = useParams();
  const [details,setDetail] = useState([]);
  const [isLoading,setLoading] = useState(false);
  useEffect(() => {
    fetch(`https://restcountries.com/v2/name/${name}?fields=name,capital,flags,population,region`)
  .then(res => res.json())
  .then(data => {
    setDetail(data);
    setLoading(true)
  })
  .catch(err => console.log(err))
  })
  return (
    <div className="grid md:grid-cols-3 gap-12 px-3 md:px-8 dark:bg-[#212E37]">
      { isLoading ? details.map((detail,index) => <Card key={ index } detail={ detail } id={ detail.name } />) : <div className='w-screen mt-32 font-light text-center mx-auto dark:text-[#fff]'>Loading....</div> }
      </div>
    )
}
export default Single;