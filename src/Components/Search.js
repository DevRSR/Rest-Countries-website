import { useState } from 'react'
import { Link } from 'react-router-dom'
import arrowUp from './images/icon-arrow-up.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Search = () => {
  
  const[name,setName] = useState('')
  
  function show () {
    const regions = document.querySelector('#menu');
    regions.classList.toggle('hidden')
  }
  function naming () {
    let input = document.querySelector('input');
    setName(input.value)
  }
  function directTo () {
    window.location.href = `https://myrestcountriesweb.netlify.app/${ name }`
  }
  
  return (
     <div className="flex flex-col md:flex-row items-start md:items-center justify-between py-4 w-full px-3 md:px-5 mb-10">
      <div className="flex items-center justify-start shadow-2xl w-full md:w-[250px] px-5 rounded-lg bg-[#fff] dark:bg-[#2B3743]">
       <FontAwesomeIcon icon={faSearch} />
       <form onSubmit={ directTo }>
        <input onChange = {naming} className="border-none p-4 focus:outline-none dark:bg-[#2B3743] dark:text-[#fff]" type="text" placeholder="Search for country..." />
       </form>
      </div>
      <div className="relative mt-4 dark:bg-[#212E37] dark:text-[#fff]">
       <div onClick={ show } className="flex items-center justify-between p-4 w-full shadow-2xl rounded-lg bg-[#fff] dark:bg-[#2B3743] dark:text-[#fff]">
        <p className="mr-3" >Filter by Region</p>
        <img className="dark:brightness-200" src={ arrowUp } alt="" />
       </div>
       <div id='menu' className="hidden absolute top- left-0 flex flex-col bg-[#fff] items-start justify-between mt-4 p-4 w-full shadow-2xl rounded-lg dark:bg-[#2B3743]" >
        <Link to="/region/Africa">Africa</Link>
        <Link to="/region/Americas">America</Link>
        <Link to="/region/Asia">Asia</Link>
        <Link to="/region/Europe">Europe</Link>
        <Link to="/region/Oceania">Oceania</Link>
       </div>
      </div>
     </div>
    )
}

export default Search;