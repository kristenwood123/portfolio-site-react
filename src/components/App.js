import '../index.css'

// components
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'
import Experience from './Experience'

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
    </>
    
   
  );
}

export default App;
