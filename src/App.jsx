import React from 'react'
import Projects from './Component/Projects'
import Header from './Component/Header'
import Navbar from './Component/Navbar'
import About from './Component/About'
import Testimonials from './Component/Testimonials'
import Contact from './Component/Contact'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import Footer from './Component/Footer'

const App = () => {
  return (
    <div className=' overflow-y-auto no-srcollbar'>
  <ToastContainer position='top-right' />
   <Header/>
  <About/>
  <Projects/>
  <Testimonials/>
  <Contact/>
  <Footer/>
   </div>
  )

}

export default App