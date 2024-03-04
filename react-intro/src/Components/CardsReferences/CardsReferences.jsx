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
                    Norman Ladino <br /> Administrador Agricola <br /> 3205133047 <br /> normanladino4@gmail.com
                </h4>
            </div>
            <div className='boxminn'>
                <h4>
                    Maria Rocio Ocampo <br /> Ama de casa <br /> 3206698029 <br /> mariarocioocampo2312@gmail.com
                </h4>
            </div>
        </div>
    </div>
  )
}


