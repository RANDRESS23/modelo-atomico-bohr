'use client'

import React from 'react'
import { CardBody, CardContainer, CardItem } from './ui/3d-card'

export function ElementCard () {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border-black/[0.1] w-[65px] h-[65px] rounded-lg border p-[5px] flex flex-col justify-between">
        <div className="w-full flex justify-between items-center">
          <CardItem
            translateZ={50}
            className="text-[8px] dark:text-white pointer-events-none"
          >
            8
          </CardItem>
          <CardItem
            translateZ={50}
            className="text-[8px] dark:text-white pointer-events-none"
          >
            15.9
          </CardItem>
        </div>
        <CardItem translateZ="50" className="w-full text-[19px] uppercase text-center font-bold text-neutral-600 dark:text-white">
          O
        </CardItem>
        <CardItem
          translateZ="50"
          className="w-full text-[8px] text-center text-neutral-600 dark:text-white pointer-events-none"
        >
          Oxígeno
        </CardItem>
      </CardBody>
    </CardContainer>
  )
}
