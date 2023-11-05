import {Routes,Route}from 'react-router-dom'
import Footer from './components/Layout/Footer.js';
import HomePage from './pages/HomePage.js';
import About from './pages/About.js';
import Policy from './pages/Policy.js';
import Pagenotfound from './pages/Pagenotfound.js';
import Contact from './pages/Contact.js';
import Register from './pages/Auth/Register.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Login from './pages/Auth/Login.js';
function App() {
  return (
    <Routes>
     <Route  path='/' element={<HomePage/>} />
     <Route  path='/register' element={<Register/>} />
     <Route  path='/login' element={<Login/>} />
     <Route  path='/contact' element={<Contact/>} />
     <Route  path='/about' element={<About/>} />
     <Route  path='/policy' element={<Policy/>} />
     <Route  path='*' element={<Pagenotfound/>} />
      
    </Routes>
  );
}

export default App;
