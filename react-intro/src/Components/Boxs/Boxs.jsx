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
                        tittle
                    </h3>
                    <p className='parr'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum maxime nihil commodi! Quibusdam, expedita, delectus, quae fuga est omnis labore consequatur in ut necessitatibus dignissimos adipisci sint eligendi molestias.
                    </p>

                    <a href="">Ir al Proyecto</a>
                </div>
            </div>

            <div className='cajita'>
                <img className='boxita' src={box} alt="Box" />
                <div className='cajitica'>
                    <h3>
                        tittle
                    </h3>
                    <p className='parr'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum maxime nihil commodi! Quibusdam, expedita, delectus, quae fuga est omnis labore consequatur in ut necessitatibus dignissimos adipisci sint eligendi molestias.
                    </p>

                    <a href="">Ir al Proyecto</a>
                </div>
            </div>

            <div className='cajita'>
                <img className='boxita' src={box} alt="Box" />
                <div className='cajitica'>
                    <h3>
                        tittle
                    </h3>
                    <p className='parr'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum maxime nihil commodi! Quibusdam, expedita, delectus, quae fuga est omnis labore consequatur in ut necessitatibus dignissimos adipisci sint eligendi molestias.
                    </p>

                    <a href="">Ir al Proyecto</a>
                </div>
            </div>

            <div className='cajita'>
                <img className='boxita' src={box} alt="Box" />
                <div className='cajitica'>
                    <h3>
                        tittle
                    </h3>
                    <p className='parr'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus illum maxime nihil commodi! Quibusdam, expedita, delectus, quae fuga est omnis labore consequatur in ut necessitatibus dignissimos adipisci sint eligendi molestias.
                    </p>

                    <a href="">Ir al Proyecto</a>
                </div>
            </div>
        </div>

       
    </section>
  )
}


