import Mode from './Mode'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
  const [colorTheme,setTheme] = Mode();
  return (
    <div className="flex items-center justify-between py-4 px-3 md:px-5  w-full shadow-2xl dark:bg-[#293541]">
     <h4 className="dark:text-[#fff] font-bold">Where in the world?</h4>
     <div onClick={() => setTheme(colorTheme)} className="flex items-center justify-center dark:text-[#fff]">
      <FontAwesomeIcon icon={faMoon} />
      <p className="ml-3 font-bold">Dark Mode</p>
     </div>
    </div>
    )
}
export default Header;