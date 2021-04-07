import '../index.css'

// components
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
import Interests from './Interests'
import Footer from './Footer'


function App() {
  return ( 
    <>
        <Navbar/>
        <Hero/>
       <main>
          <Services/>
          <Experience/>
          <Projects/>
          <Skills/>
          <Interests/>
         </main>
        <Footer/>
    </>
    
   
  );
}

export default App;
