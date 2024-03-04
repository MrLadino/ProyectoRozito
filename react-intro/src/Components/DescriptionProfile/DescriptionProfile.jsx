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
          Soy un aprendiz del SENA en búsqueda de
            oportunidades para aplicar y expandir mis
            conocimientos en Análisis y Desarrollo de
            Software. Mi entusiasmo por el mundo de la
            programación se ha convertido en una
            pasión que me impulsa a aprender de
            forma continua y a enfrentar nuevos retos
            con determinación.
            Durante mi formación, he adquirido una
            comprensión intermedia de lenguajes de
            programación como Java, JavaScript y
            Python. Esta base sólida me ha permitido
            abordar proyectos prácticos y desafiantes,
            donde he podido desarrollar y mejorar mis
            habilidades técnicas y de resolución de
            problemas.
            Estoy emocionado por seguir creciendo en
            este campo y por contribuir con mi pasión y
            habilidades a equipos de desarrollo
            innovadores. Mi objetivo es aprender de los
            mejores, colaborar en proyectos
            significativos y convertirme en un
            profesional integral en el mundo del
            desarrollo de software.

        </p>
    </section>
  )
}


