'use client'

import { Modal, ModalContent, ModalHeader, ModalBody } from '@nextui-org/modal'
import { Select, SelectItem } from '@nextui-org/react'

interface ModalAtomProps {
  orbitalsInicial: string[]
  orbitalsFinal: string[]
  orbitalInicial: string
  orbitalFinal: string
  energiaFoton: number
  longitudDeOndaEnNm: number
  isViewResponse: boolean
  setOrbitalsInicial: (value: string[]) => void
  setOrbitalsFinal: (value: string[]) => void
  setOrbitalInicial: (value: string) => void
  setOrbitalFinal: (value: string) => void
  setEnergiaFoton: (value: number) => void
  setLongitudDeOndaEnNm: (value: number) => void
  setIsViewResponse: (value: boolean) => void
  isOpen: boolean
  onClose: () => void
}

const ORBITALS = ['1', '2', '3', '4', '5', '6', '7']

export default function ModalCalculateEnergy ({ orbitalsInicial, orbitalsFinal, orbitalInicial, orbitalFinal, energiaFoton, longitudDeOndaEnNm, isViewResponse, setOrbitalsInicial, setOrbitalsFinal, setOrbitalInicial, setOrbitalFinal, setEnergiaFoton, setLongitudDeOndaEnNm, setIsViewResponse, isOpen, onClose }: ModalAtomProps) {
  const handleSelectionChangeOrbitalInicial = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrbitalInicial(e.target.value)

    const newOrbitalsFinal = ORBITALS.filter((orbital) => orbital !== e.target.value)
    setOrbitalsFinal(newOrbitalsFinal)
    setIsViewResponse(false)
  }

  const handleSelectionChangeOrbitalFinal = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setOrbitalFinal(e.target.value)

    const newOrbitalsInicial = ORBITALS.filter((orbital) => orbital !== e.target.value)
    setOrbitalsInicial(newOrbitalsInicial)
    setIsViewResponse(false)
  }

  const calculateEnergy = () => {
    if (orbitalInicial !== '' && orbitalFinal !== '') {
      const energiaOrbitaInicial = -(13.6 / Math.pow(Number(orbitalInicial), 2))
      const energiaOrbitaFinal = -(13.6 / Math.pow(Number(orbitalFinal), 2))
      const energiaFoton = energiaOrbitaInicial - energiaOrbitaFinal

      const CONSTANTE_PLANCK = 4.135667696 * Math.pow(10, -15)
      const VELOCIDAD_LUZ = 3 * Math.pow(10, 8)
      const longitudDeOnda = (CONSTANTE_PLANCK * VELOCIDAD_LUZ) / energiaFoton
      const longitudDeOndaEnNm = longitudDeOnda * 1000000000

      setLongitudDeOndaEnNm(Math.round(longitudDeOndaEnNm))
      setEnergiaFoton(Number(energiaFoton.toString().slice(0, 4)))
      setIsViewResponse(true)
    }
  }

  return (
    <Modal size='3xl' scrollBehavior='outside' backdrop='blur' isOpen={isOpen} onClose={onClose} className='relative z-50'>
      <ModalContent>
        {(onClose) => (
          <div className='bg-black'>
            <ModalHeader className="flex flex-col gap-1">Calcular Energía | Átomo de Hidrógneo</ModalHeader>
            <ModalBody className='relative bg-grid-black dark:bg-grid-white w-full flex justify-between pb-7'>
              <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_0.5%,black)]" />
              <div className='w-full flex flex-col justify-center items-center z-10 gap-4 mb-6'>
                <h2 className='text-3xl font-bold uppercase'>CALCULAR</h2>
                <p className='text-sm text-center italic'>Calcular la energía del fotón emitido durante la transición y su longitud de onda del átomo del Hidrógneo. Selecciona la orbita inicial donde se encuentra el electrón, y también selecciona la orbita final donde saltará el electrón.</p>
              </div>
              <div className='flex justify-between items-center'>
                <Select
                  label="Orbital Inicial"
                  variant="bordered"
                  placeholder="Selecciona el orbital inicial"
                  selectedKeys={[orbitalInicial]}
                  className="max-w-xs"
                  onChange={handleSelectionChangeOrbitalInicial}
                >
                  {orbitalsInicial.map((orbital) => (
                    <SelectItem key={orbital}>
                      {orbital}
                    </SelectItem>
                  ))}
                </Select>
                <Select
                  label="Orbital Final"
                  variant="bordered"
                  placeholder="Selecciona el orbital final"
                  selectedKeys={[orbitalFinal]}
                  className="max-w-xs"
                  onChange={handleSelectionChangeOrbitalFinal}
                >
                  {orbitalsFinal.map((orbital) => (
                    <SelectItem key={orbital}>
                      {orbital}
                    </SelectItem>
                  ))}
                </Select>
              </div>
              <button className="py-3 mt-5 animate-shimmer items-center justify-center rounded-xl border border-white bg-[linear-gradient(110deg,#000103,45%,#637494,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:px-14 disabled:opacity-50" onClick={calculateEnergy} disabled={orbitalInicial === '' || orbitalFinal === ''}>
                Calcular Energía y Longitud de Onda
              </button>
              {
                isViewResponse && orbitalInicial !== '' && orbitalFinal !== '' && (
                  <p className='text-center italic z-10 text-success mt-7 font-semibold'>La energía del fotón emitido durante la transición del electrón de n={orbitalInicial} a n={orbitalFinal} es de {energiaFoton} eV, y la longitud de onda correspondiente es {longitudDeOndaEnNm} nm.</p>
                )
              }
            </ModalBody>
          </div>
        )}
      </ModalContent>
    </Modal>
  )
}
