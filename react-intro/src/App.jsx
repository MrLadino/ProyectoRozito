import { Home } from './Components/Pages/Home/Home'
import {Item} from './Components/Item/Item'
import {Header} from './Components/Layouts/Header/Header'
import { Logo } from './Components/Logo/Logo'
import { Navbar } from './Components/Navbar/Navbar'
import {Tittle} from './Components/Tittle/Tittle'
import { useRoutes } from 'react-router-dom'
import { NotFound } from './Components/NotFound/NotFound'


import { Icon } from './Components/Icon/Icon'
import { FaFacebook, FaWhatsapp , FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa"
import './App.css'



const AppRoutes = () =>{
  let routes = useRoutes ([
    { path:'/', element: <Home />},
    { path:'*', element: <NotFound />},
  ])
  return routes
}


function App() {
  
  return (
    <>
     <Header>
    <Logo />
    <Tittle/>
      <Navbar>
          <Item content="Inicio" route='/' />
          <Item content="Perfil" /> 
          <Item content="Proyectos" />      
          <Item content="Referencias" route='/' />  
          <Item content="Experencia" route='/' />     
      </Navbar>
    <Icon/>
    <div className='Networks'>
    <FaFacebook />
    <FaWhatsapp />
    <FaInstagram  />
    <FaTwitter  />
    <FaLinkedin />
    </div>
    </Header>
    <AppRoutes />
    </>
  )
}

export default App
