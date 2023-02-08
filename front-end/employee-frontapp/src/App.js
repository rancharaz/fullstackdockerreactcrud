import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Aboutus from './components/Aboutus';
import Gallery from './components/Gallery';
import Contactus from './components/Contactus';
import Error from './components/Error';
import './_myStyles/elements.scss'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/aboutus/:id' element={<Aboutus />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/contactus/:id' element={<Contactus />} />
        <Route path='*' element={<Error />} />

      </Routes>
    </Router>
      <div className="App">
 
      </div>
    </>
   
  );
}

export default App;
