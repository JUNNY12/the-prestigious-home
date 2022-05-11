import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from "react-router-dom";
import ContactUs from '../pages/contactUs/ContactUs';
import Home from '../pages/home/Home';
import Gallery from '../pages/gallery/Gallery';
import Services from '../pages/service/Services';
import "./App.css"
import Nav from './Nav';
import Footer from './Footer';


const App = () => {
  return (
    <div>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='services' element={<Services />} />
        <Route path='gallery' element={<Gallery />} />
        <Route path='contactUs' element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
