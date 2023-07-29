import './App.css';
import Indicator from './Portfolio/Common/Indicator/Indicator';
import Home from './Portfolio/Home/Home';
import Profile from './Portfolio/Profile/Profile';
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;
