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
            <img className='IconEnd' src={iconEnd} alt="IconEnd" />
            <img className='IconEnd' src={iconEnd} alt="IconEnd" />
            <img className='IconEnd' src={iconEnd} alt="IconEnd" />
            <img className='IconEnd' src={iconEnd} alt="IconEnd" />
            <div className='barras'>
              <progress max={100} value={50}></progress>
              <progress max={100} value={40}></progress>
              <progress max={100} value={60}></progress>
              <progress max={100} value={70}></progress>
            </div>
        </div>
    </div>
  )
}


