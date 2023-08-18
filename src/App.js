import './App.css';
import Header from './Portfolio/Header/Header';
import Home from './Portfolio/Home/Home';
import Bio from './Portfolio/Bio/Bio';
import Resume from './Portfolio/Resume/Resume';
import Profile from './Portfolio/Profile/Profile';
import { getHeaderRoute } from './Portfolio/AppService';
import AOS from "aos";
import "aos/dist/aos.css";
import { useState, useEffect } from 'react'
import Contect from './Portfolio/ContectMe/Contect';
AOS.init();

function App() {
  const componentMapping = {
    home: Home,
    bio: Bio,
    resume: Resume,
    contect: Contect
  }
  const [daynamicComponent, setDynamicComponent] = useState(<Home/>);

  useEffect(() => {
    getHeaderRoute().subscribe((data) => {
      if (data) {
        let TagName = componentMapping[data] ? componentMapping[data] : Home;
        setDynamicComponent(<TagName isHeaderRoute="true"/>)
      }
    })
  }, [])
  return (
    <div className="App">
      { daynamicComponent ? 
        <>
        <Header/>
        {daynamicComponent}
        </> :
       <Home/>
      }
    </div>
  );
}

export default App;
