import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import SocialLinks from "./components/SocialLinks";
  




function App() {
  return (
    <div>
     
        <Navbar/>
        <Home/>
        <About/>  
        <Skills/>
        
        <div className="mt-0"> <Contact/></div>
       
       <SocialLinks/>
       
    </div>
  );
}

export default App;
