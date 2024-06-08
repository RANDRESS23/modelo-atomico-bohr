'use client'

import { elements } from '@/data/elements.json'
import ModalAtom from './ModalAtom'
import { useDisclosure } from '@nextui-org/modal'
import { useState } from 'react'
import { type Element } from '@/types/element'

const COLORS = {
  'noble gas': '#4d42b8',
  'gas noble': '#4d42b8',
  'gases nobles': '#4d42b8',
  'alkaline earth metal': '#e45143',
  'metal alcalinotérreo': '#e45143',
  'metales alcalinotérreos': '#e45143',
  'diatomic nonmetal': '#d81159',
  'no metal diatómico': '#d81159',
  'alkali metal': '#8f2d56',
  'metal alcalino': '#8f2d56',
  'metales alcalinos': '#8f2d56',
  'polyatomic nonmetal': '#00a300',
  'no metal poliatómico': '#00a300',
  'transition metal': '#56423e',
  'metal de transición': '#56423e',
  'post-transition metal': '#7f4800',
  'metal de transición post': '#7f4800',
  'metal de transición posterior': '#7f4800',
  'metal de post-transición': '#7f4800',
  actinide: '#7f69e7',
  actínidos: '#7f69e7',
  actínido: '#7f69e7',
  lanthanide: '#008f7a',
  lantánidos: '#008f7a',
  lantánido: '#008f7a',
  metalloid: '#1e445d',
  metaloide: '#1e445d',
  metaloid: '#1e445d',
  metaloides: '#1e445d'
}

export const PeriodicTable = () => {
  const [atom, setAtom] = useState<Element | null>(null)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpen = (atom: Element) => {
    setAtom(atom)
    onOpen()
  }

  return (
    <>
      <section className='w-full absolute top-0 left-[50%] translate-x-[-50%] grid grid-cols-[repeat(18,minmax(0,64px))] grid-rows-[repeat(10,minmax(0,64px))] gap-1'>
        {
           elements.map(element => (
            <div
              className="relative flex items-center justify-center hover:scale-125 hover:z-10 text-white transition-all cursor-pointer"
              key={element.name}
              style={{
                gridRow: element.ypos,
                gridColumn: element.xpos,
                backgroundColor: COLORS[element.category as keyof typeof COLORS]
              }}
              onClick={() => { handleOpen(element) }}
            >
              <strong className='text-[20px] pointer-events-none'>{element.symbol}</strong>
              <small className="absolute text-[8px] top-[5px] left-[5px]">{element.number}</small>
              <small className="absolute text-[8px] bottom-[5px] left-[5px]">{element.name}</small>
            </div>
           ))
        }
      </section>
      <ModalAtom
        atom={atom}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
