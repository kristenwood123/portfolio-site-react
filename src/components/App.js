import '../index.css'

// components
import Navbar from './Navbar'
import Hero from './Hero'
import Services from './Services'
import Projects from './Projects'

function App() {
  return ( 
    <>
        <Navbar/>
        <Hero/>
        <main>
          <Services/>
        </main>
        <Projects/>
        {/* Experience */}
    </>
    
   
  );
}

export default App;
