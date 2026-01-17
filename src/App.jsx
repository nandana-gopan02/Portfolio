import './App.css'
import Navbar from './component/Navbar'
import About from './component/About'
import Education from './component/Education'
import Project from './component/Project'
import Contact from './component/Contact'
import Home from './component/Home'
// import pattern from './assets/pattern.mp4'
function App() {
  

  return (
    // <div className='relative min-h-screen wifull overflow '>
    //   <video className='fixed inset-0 w-fullh-full object-cover  -z-10' src={pattern}/>
      
    
    <div className='pl-5 md:pl-23 pr-5 md:pr-23'>
    <Navbar/>
    <section id="/"><Home/></section>
    <section id="about"><About/></section>
    <section id="education"><Education/></section>
    <section id="project"><Project/></section>
    <section id="contact"><Contact/></section>
    </div>


    //  </div>
  )
}

export default App
