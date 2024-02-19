import { Home } from './Components/Pages/Home/Home'
import {Item} from './Components/Item/Item'
import {Header} from './Components/Layouts/Header/Header'
import { Logo } from './Components/Logo/Logo'
import { Navbar } from './Components/Navbar/Navbar'
import {Tittle} from './Components/Tittle/Tittle'
import { useRoutes } from 'react-router-dom'
import { NotFound } from './Components/NotFound/NotFound'
import Services from './Components/Pages/Services/Services'
import { References } from './Components/Pages/References/References'
import './App.css'

const AppRoutes = () =>{
  let routes = useRoutes ([
    { path:'/', element: <Home />},
    { path:'/services', element: <Services />},
    { path:'/references', element: <References />},
    { path:'*', element: <NotFound />},
  ])
  return routes
}


function App() {
  
  return (
    <>
     <Header>
    <Tittle/>
    <Logo />
      <Navbar>
          <Item content="Inicio" route='/' />
          <Item content="Acerca de mí" /> 
          <Item content="Proyectos" />    
          <Item content="Servicios" route='/Services' />   
          <Item content="Referencias" route='/References' />      
      </Navbar>
    </Header>
    <AppRoutes />
    </>
  )
}

export default App
