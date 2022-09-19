import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './Components/Search';
import Single from './Components/Single';
import Header from './Components/Header';
import Card from './Components/Card';
import More from './Components/More';
import Region from './Components/Region';

function App() {
  const [details,setDetails] = useState([])
  const [isLoading,setLoading] = useState(false)
  useEffect(() => {
    fetch('https://restcountries.com/v2/all?fields=name,capital,flags,population,region')
  .then(res => res.json())
  .then(data => {
    let miniData = data.splice(50,100)
    setDetails(miniData);
    setLoading(true)
  })
  .catch(err => console.log(err))
  })
  
  return (
  <Router>
    <div className='dark:bg-[#212E37] dark:text-[#fff] h-screen' >
      <Header />
      <Switch>
       <Route path="/" exact>
        <Search />
        <div className="grid md:grid-cols-3 gap-12 px-3 md:px-8 dark:bg-[#212E37] w-screen">
       { isLoading ? details.map((detail,index) => <Card key={ index } detail={ detail } id={ detail.name } />) : <div className='w-screen mt-32 font-light text-center mr-24 dark:text-[#fff]'>Loading....</div> }
         </div>
       </Route>
       <Route path="/name/:name" exact>
        <Search />
        <Single />
       </Route>
       <Route path="/more/:id" exact>
        <More />
       </Route>
       <Route path="/region/:term" exact>
        <Region />
       </Route>
      </Switch>
     </div>
    </Router>
  );
}

export default App;
