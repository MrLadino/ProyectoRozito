import React from 'react'
import profile from '../../assets/sena2.jpg.png'
import './DescriptionProfile.css'
export const DescriptionProfile = () => {
  return (
    <section>
        
        <h2 className='cosito1'>
            <img className='Loguito' src={profile} alt="Profile" />
            PERFIL
        </h2>
        <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ducimus assumenda inventore ea repellendus? Pariatur, repellat alias iusto est et adipisci necessitatibus a iure ipsum eum? Maxime impedit rerum natus laborum?
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro laboriosam quisquam vero nesciunt doloribus temporibus placeat esse nostrum, nemo perspiciatis consectetur quod excepturi, eum voluptatum tempore minima quam repellendus voluptatibus.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis laudantium eaque iure nobis nulla illum alias modi! Deleniti atque modi esse minus non, cupiditate nobis odit officia earum alias quaerat?
        </p>
    </section>
  )
}


