import React from 'react'
import profile from '../../assets/sena2.jpg.png'
import iconEnd from '../../assets/react.jpg'
import './Progreso.css'

export const Progreso = () => {
  return (
    <div className='End'>
        
        <h2 className='cosito1'>
            <img className='Loguito' src={profile} alt="Profile" />
            EXPERIENCIA
        </h2>
        
        <div className='Endd'>
              <div className='finalBox'>
                <img className='IconEnd' src={iconEnd} alt="IconEnd" />
                <progress max={100} value={50}></progress>
              </div>
              <div className='finalBox'>
                <img className='IconEnd' src={iconEnd} alt="IconEnd" />
                <progress max={100} value={40}></progress>
              </div>
              <div className='finalBox'>
                <img className='IconEnd' src={iconEnd} alt="IconEnd" />
                <progress max={100} value={60}></progress>
              </div>
              <div className='finalBox'>
                <img className='IconEnd' src={iconEnd} alt="IconEnd" />
                <progress max={100} value={70}></progress>
              </div>
          </div>
           
            
           
           
         
    </div>
  )
}


