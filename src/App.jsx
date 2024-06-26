import './App.css'
import { Clientes } from './components/Clientes'
import { Details } from './components/Details'
import { Exito } from './components/Exito'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Partners from './components/Partners'
import { Profile } from './components/Profile'
import Testimonial from './components/Testimonial'
import Wp from './components/Wp'

function App() {

  return (
    <>
      <Navbar />
      <Header />
      <Partners />
      <Details />
      <Clientes />
      <Exito />
      <Testimonial />
      <Profile />
      <Wp />
    </>
  )
} 

export default App
