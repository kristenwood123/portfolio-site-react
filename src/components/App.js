import '../index.css'

// components
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Experience from './Experience'
import Skills from './Skills'
import Interests from './Interests'

function App() {
  return ( 
    <>
        <Navbar/>
        <Hero/>
       <main>
          <Services/>
          <Experience/>
        </main>
        <Projects/>
        <Skills/>
        <Interests/>
    </>
    
   
  );
}

export default App;
