'use client'

import { useDisclosure } from '@nextui-org/react'
import ModalCalculateEnergy from './ModalCalculateEnergy'
import { useState } from 'react'

const ORBITALS = ['1', '2', '3', '4', '5', '6', '7']

export const CalculateEnergy = () => {
  const [orbitalsInicial, setOrbitalsInicial] = useState<string[]>(ORBITALS)
  const [orbitalsFinal, setOrbitalsFinal] = useState<string[]>(ORBITALS)
  const [orbitalInicial, setOrbitalInicial] = useState<string>('')
  const [orbitalFinal, setOrbitalFinal] = useState<string>('')
  const [energiaFoton, setEnergiaFoton] = useState<number>(0)
  const [longitudDeOndaEnNm, setLongitudDeOndaEnNm] = useState<number>(0)
  const [isViewResponse, setIsViewResponse] = useState<boolean>(false)
  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleOpen = () => {
    setOrbitalsInicial(ORBITALS)
    setOrbitalsFinal(ORBITALS)
    setOrbitalInicial('')
    setOrbitalFinal('')
    setIsViewResponse(false)

    onOpen()
  }

  return (
    <>
      <div className="flex flex-col items-center mt-7">
        <button className="py-3 animate-shimmer items-center justify-center rounded-md border border-white bg-[linear-gradient(110deg,#000103,45%,#637494,55%,#000103)] bg-[length:200%_100%] px-10 font-medium text-white transition-all focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 hover:px-14" onClick={handleOpen}>
          Calcular Energía y Longitud de Onda
        </button>
      </div>
      <ModalCalculateEnergy
        orbitalsInicial={orbitalsInicial}
        orbitalsFinal={orbitalsFinal}
        orbitalInicial={orbitalInicial}
        orbitalFinal={orbitalFinal}
        energiaFoton={energiaFoton}
        longitudDeOndaEnNm={longitudDeOndaEnNm}
        isViewResponse={isViewResponse}
        setOrbitalsInicial={setOrbitalsInicial}
        setOrbitalsFinal={setOrbitalsFinal}
        setOrbitalInicial={setOrbitalInicial}
        setOrbitalFinal={setOrbitalFinal}
        setEnergiaFoton={setEnergiaFoton}
        setLongitudDeOndaEnNm={setLongitudDeOndaEnNm}
        setIsViewResponse={setIsViewResponse}
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}
