import React from 'react'
import profile from '../../assets/sena2.jpg.png'
import box from '../../assets/cajita1.png'
import './Boxs.css'
export const Boxs = () => {
  return (
    <section>
        
        <h2 className='cosito2'>
            <img className='Loguito' src={profile} alt="Profile" />
            PROYECTOS
            
        </h2>

        <div className='BigBox'>
            <div className='cajita'>
                <img className='boxita' src={box} alt="Box" />
                <div className='cajitica'>
                    <h3>
                    Graphel
                    </h3>
                    <p className='parr'>
                        Pagina creada para practicar el tema de elementos flotantes
                    </p>

                    <a href="">Ir al Proyecto</a>
                </div>
            </div>

            <div className='cajita'>
                <img className='boxita' src={box} alt="Box" />
                <div className='cajitica'>
                    <h3>
                        Music
                    </h3>
                    <p className='parr'>
                        Pagina basica pero de encanto cuyo fin es mejorar las habilidades del tema display flex
                    </p>

                    <a href="">Ir al Proyecto</a>
                </div>
            </div>

            <div className='cajita'>
                <img className='boxita' src={box} alt="Box" />
                <div className='cajitica'>
                    <h3>
                        Bleux
                    </h3>
                    <p className='parr'>
                        Pagina de prcatica en la que desarrollamos habilidades sobre el tema de responsibidad
                    </p>

                    <a href="">Ir al Proyecto</a>
                </div>
            </div>

            <div className='cajita'>
                <img className='boxita' src={box} alt="Box" />
                <div className='cajitica'>
                    <h3>
                        Apptastic
                    </h3>
                    <p className='parr'>
                    Pagina de prcatica en la que desarrollamos habilidades sobre el tema de responsibidad y se mejora, a parte de que s eaprende a manipular elemntos mas complejos
                    </p>

                    <a href="">Ir al Proyecto</a>
                </div>
            </div>
        </div>

       
    </section>
  )
}


