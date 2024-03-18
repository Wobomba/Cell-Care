import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Service from './routes/Service';
import About from './routes/About';
import Contact from './routes/Contact';
import Signup from './routes/Signup';
import InternationalTravel from './routes/InternationalTravel';
import Uganda from './components/International-Travel/UgandaPage/Uganda';
import Kenya from './components/International-Travel/KenyaPage/Kenya';
import Tanzania from './components/International-Travel/TanzaniaPage/Tanzania';
import Zanzibar from './components/International-Travel/ZanzibarPage/Zanzibar';
import SouthAfrica from './components/International-Travel/SouthAfricaPage/SouthAfrica';
import Dubai from './components/International-Travel/DubaiPage/Dubai';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/service' element={<Service />} />
        <Route path='/gallery' element={<Contact />} />
        <Route path='/signup' element={<Signup/>} />
        <Route path='/destination' element={<InternationalTravel/>} />
        <Route path='/uganda' element={<Uganda />} /> 
        <Route path='/kenya' element={<Kenya />} /> 
        <Route path='/zanzibar' element={<Zanzibar />} /> 
        <Route path='/tanzania' element={<Tanzania />} /> 
        <Route path='/south-africa' element={<SouthAfrica />} /> 
        <Route path='/dubai' element={<Dubai />} /> 
      </Routes>
    </div>
  );
}

export default App;

