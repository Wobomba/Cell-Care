import './styles.css';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home';
import Service from './routes/Service';
import About from './routes/About';
import Contact from './routes/Contact';
import Signup from './routes/Signup'
import InternationalTravel from './routes/InternationalTravel';


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
      </Routes>

    </div>
  );
}

export default App;
