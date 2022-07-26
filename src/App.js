import logo from './logo.svg';
import './App.css';
/* import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js" */
import {Routes, Route} from "react-router-dom"
import Navbar from './Components/Navbar';
import Techwind from './Components/Techwind';
import Experience from './Components/Experience';
import Portofolio from './Components/Portofolio';
import TotalProject from './Components/TotalProject';
import UpdatedProject from './Components/UpdatedProject';
import Heading from './Components/Heading';
import Theme from './Components/Theme';
import SecondTheme from './Components/SecondTheme';
import AboutPage from './Components/AboutPage';
import FixedNav from './Components/FixedNav';
import Menu from './Components/Menu';
import Footer from './Components/Footer';
import Reservation from './Components/Reservation';
import News from './Components/News';
import Gallery from './Components/Gallery';
import Material from './Components/Material';
import MusicPlayerSlider from './Components/Material';

function App() {
  return (
    <div className="App">
      {/* <FixedNav/>
       <Routes>
      <Route path="/" element={<SecondTheme/>}/>

       <Route path="aboutus" element={<AboutPage/>}/> 
       <Route path="menu" element={<Menu/>}/> 
       <Route path="reservation" element={<Reservation/>}/> 
       <Route path="news" element={<News/>}/> 
       <Route path="gallery" element={<Gallery/>}/> 
       </Routes>   
       <Footer/> */}
       <Material/>
       <MusicPlayerSlider/>
   {/*   <Navbar/> */}
   {/*    <Techwind/>   */}   
       {/*  <Experience/>     */}
   {/*  <Portofolio/>   */}
  {/*   <TotalProject/>  */}
     {/*  <UpdatedProject/>    */}
   {/*   <Heading/> */}
 {/*   <Theme/> */}
 {/* <SecondTheme/> */}
    </div>
  );
}

export default App;
