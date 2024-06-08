'use client'

import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/modal'
import { type Element } from '@/types/element'
import Atomo2D from './Atom'

interface ModalAtomProps {
  atom: Element | null
  isOpen: boolean
  onClose: () => void
}

interface ElectronConfigResult {
  orbitalSpeeds: number[]
  orbitalRadii: number[]
  numElectrons: number[]
}

const SUBSCRIPTS = {
  0: '₀',
  1: '¹',
  2: '²',
  3: '³',
  4: '⁴',
  5: '⁵',
  6: '⁶',
  7: '⁷',
  8: '⁸',
  9: '⁹',
  10: '¹⁰',
  11: '¹¹',
  12: '¹²',
  13: '¹³',
  14: '¹⁴'
}

const parseElectronConfiguration = (configuration: string): ElectronConfigResult => {
  const orbitalSpeeds = [1, 0.75, 0.5, 0.25, 0.1, 0.05, 0.03]
  const orbitalRadii = [30, 60, 90, 120, 150, 180, 210]

  const numElectrons = [0, 0, 0, 0, 0, 0, 0]

  const orbitals = configuration.split(' ')

  orbitals.forEach((orbital) => {
    const principalLevel = parseInt(orbital[0])
    const electronCount = parseInt(`${isNaN(orbital[orbital.length - 2]) ? '' : orbital[orbital.length - 2]}${orbital[orbital.length - 1]}`)

    while (numElectrons.length < principalLevel) {
      numElectrons.push(0)
    }

    numElectrons[principalLevel - 1] += electronCount
  })

  const limitedNumElectrons = numElectrons.slice(0, 7)

  return {
    orbitalSpeeds,
    orbitalRadii,
    numElectrons: limitedNumElectrons
  }
}

const parsedElectronConfigurationString = (configuration: string) => {
  const orbitals = configuration.split(' ')

  const newElectronConfiguration = orbitals.map((orbital) => {
    const electronCount = parseInt(`${isNaN(orbital[orbital.length - 2]) ? '' : orbital[orbital.length - 2]}${orbital[orbital.length - 1]}`)

    return `${orbital[0]}${orbital[1]}${SUBSCRIPTS[electronCount]}`
  })

  return newElectronConfiguration.join(' ')
}

export default function ModalAtom ({ atom, isOpen, onClose }: ModalAtomProps) {
  return (
    <Modal size='3xl' scrollBehavior='outside' backdrop='blur' isOpen={isOpen} onClose={onClose} className='relative z-50'>
      <ModalContent>
        {(onClose) => (
          <div className='bg-black'>
            <ModalHeader className="flex flex-col gap-1">Información acerca del {atom?.name}</ModalHeader>
            <ModalBody className='relative bg-grid-black dark:bg-grid-white w-full flex justify-between'>
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0.5%,black)]" />
              <div className='w-full flex flex-col justify-center items-center z-10 gap-4 mb-6'>
                <h2 className='text-3xl font-bold uppercase'>{atom?.name}</h2>
                <p className='text-sm text-center italic'>{atom?.summary}</p>
              </div>
              <Atomo2D
                symbol={atom?.symbol}
                orbitalSpeeds={parseElectronConfiguration(atom?.electron_configuration ?? []).orbitalSpeeds}
                orbitalRadii={parseElectronConfiguration(atom?.electron_configuration ?? []).orbitalRadii}
                numElectrons={parseElectronConfiguration(atom?.electron_configuration ?? []).numElectrons}
              />
              <div className='z-10 absolute top-60 left-[480px] pr-3'>
                <h3 className='text-lg font-semibold mb-1'>Propiedades:</h3>
                <div className='flex items-center gap-1'>
                  <span className='text-sm font-semibold'>Número atómico:</span>
                  <span className='text-sm italic'>{atom?.number}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-sm font-semibold'>Masa atómica:</span>
                  <span className='text-sm italic'>{atom?.atomic_mass ? `${atom?.atomic_mass} (g/mol)` : '--'}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-sm font-semibold'>Densidad:</span>
                  <span className='text-sm italic'>{atom?.density ? `${atom?.density} (g/cm³)` : '--'}</span>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-sm font-semibold'>Punto de fusión:</span>
                  <span className='text-sm italic'>{atom?.melt ? `${atom?.melt} °K` : '--' }</span>
                </div>
                <div className='flex items-center gap-1'>
                  <span className='text-sm font-semibold'>Punto de ebullición:</span>
                  <span className='text-sm italic'>{atom?.boil ? `${atom?.boil} °K` : '--'}</span>
                </div>
                <h3 className='text-lg font-semibold mb-1 mt-6'>Propiedades Atómicas:</h3>
                <div className='flex items-center gap-1'>
                  <span className='text-sm font-semibold'>Configuración electrónica:</span>
                  <span className='text-sm italic'>{parsedElectronConfigurationString(atom?.electron_configuration)}</span>
                </div>
              </div>
            </ModalBody>
          </div>
        )}
      </ModalContent>
    </Modal>
  )
}
