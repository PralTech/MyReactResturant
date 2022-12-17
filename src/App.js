import Navbar from './Components/Navbar/Navbar'
import './App.css';
import Showcase from './Components/Showcase/Showcase';
import About from './Components/About/About';
import Food from './Components/Foodcategory/Food';
import Foodmenu from './Components/Foodmenu/Foodmenu';
import Testimonial from './Components/Testimonials/Testimonial';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <>
      <Navbar/>
      <Showcase/>
      <About/>
      <Food/>
      <Foodmenu/>
      <Testimonial/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
