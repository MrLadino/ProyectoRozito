import React from 'react'
import profile from '../../assets/sena2.jpg.png'
import './CardsReferences.css'
export const CardsReferences = () => {
  return (
    <div className='Boxmax'>
        <h2 className='cosito1'>
            <img className='Loguito' src={profile} alt="Profile" />
            REFERENCIAS
        </h2>
        <div className='boxmin'>
            <div className='boxminn'>
                <h4>
                    Nombre: <br /> Cargo: <br /> Telefono: <br /> Email:
                </h4>
            </div>
            <div className='boxminn'>
                <h4>
                    Nombre: <br /> Cargo: <br /> Telefono: <br /> Email:
                </h4>
            </div>
            <div className='boxminn'>
                <h4>
                    Nombre: <br /> Cargo: <br /> Telefono: <br /> Email:
                </h4>
            </div>
            <div className='boxminn'>
                <h4>
                    Nombre: <br /> Cargo: <br /> Telefono: <br /> Email:
                </h4>
            </div>
        </div>
    </div>
  )
}


