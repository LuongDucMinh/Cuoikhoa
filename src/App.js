import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Products from './pages/Products';
import Welcome from './pages/Welcome/index,';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
<Route  path='/' element={<Home/>}  /> 
<Route  path='/welcome' element={<Welcome/>}  /> 
<Route  path='/products' element={<Products/>}  /> 

    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
