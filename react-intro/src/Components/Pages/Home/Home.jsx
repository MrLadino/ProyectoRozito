import React from 'react'
import {DescriptionProfile} from '../../DescriptionProfile/DescriptionProfile'
import { Boxs } from '../../Boxs/Boxs'
import { CardsReferences } from '../../CardsReferences/CardsReferences'
import { Progreso } from '../../Progreso/Progreso'






export const Home = () => {
  return (
    <>
    <main>
      <DescriptionProfile/>
      <Boxs/>
      <CardsReferences/>
      <Progreso/>
    </main>
    </>
  )
}

