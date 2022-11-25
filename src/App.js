import { Routes, Route } from 'react-router-dom';

import './App.css';
import Header from './components/Header';
import Products from './pages/Products';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
<Route  path='/' element={<Products/>}  /> 
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
