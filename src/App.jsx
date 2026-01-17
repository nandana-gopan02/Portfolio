import './App.css'
import Navbar from './component/Navbar'
import About from './component/About'
import Education from './component/Education'
import Project from './component/Project'
import Contact from './component/Contact'
import Home from './component/Home'

function App() {
  

  return (
    <div className=''>
    <Navbar/>
    <section id="/"><Home/></section>
    <section id="about"><About/></section>
    <section id="education"><Education/></section>
    <section id="project"><Project/></section>
    <section id="contact"><Contact/></section>
    </div>
  )
}

export default App
