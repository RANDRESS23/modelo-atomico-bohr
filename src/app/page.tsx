import { PeriodicTable } from '@/components/PeriodicTable'
import { TitleAnimated } from '@/components/TitleAnimated'
import { BgParticles } from '@/components/BgParticles'
import { Footer } from '@/components/Footer'
import { CalculateEnergy } from '@/components/CalculateEnergy'

export default function Home () {
  return (
    <main className="relative min-h-screen w-11/12 mx-auto pt-16 pb-10">
      <BgParticles />
      <TitleAnimated
        text1="MODELO ATÓMICO DE"
        text2="BOHR"
      />
      <p className='relative w-full z-10 mt-7 text-center italic text-[#ffffffc5] px-10'>El <b>modelo atómico de Bohr</b>, propuesto por Niels Bohr en 1913, postula que los electrones giran alrededor del núcleo en <b>órbitas circulares</b> a distancias fijas. Cada órbita representa un <b>nivel de energía específico</b>, y los electrones pueden saltar entre estas órbitas emitiendo o absorbiendo <b>cuantos de energía</b>. Este modelo ayudó a explicar las líneas espectrales observadas en los átomos y sentó las bases para la mecánica cuántica.</p>
      <div className='w-full h-[750px] relative mt-16 flex justify-center items-center'>
        <PeriodicTable />
      </div>
      <TitleAnimated
        text1="MODELO MATEMÁTICO DE"
        text2="BOHR"
        textSize='text-3xl lg:text-4xl'
      />
      <p className='relative w-full z-10 mt-7 text-center italic text-[#ffffffc5] px-10'>La energía de un electrón en una órbita está cuantizada y se describe por la fórmula <b>En = -13.6eV/n²</b>, donde <b>En</b> es la energía del electrón en la <b>n-ésima órbita</b>, y <b>n</b> es un número entero positivo conocido como número cuántico principal. Además, Bohr postuló que los electrones solo pueden cambiar de órbita al <b>absorber o emitir un fotón</b> con una energía igual a la diferencia entre las energías de las órbitas inicial y final, cumpliendo con la ecuación <b>E(fotón) = Em - En</b>. Este modelo explicó con éxito las líneas espectrales del hidrógeno, proporcionando una base cuantitativa para la teoría atómica.</p>
      <p className='relative w-full text-xl z-10 mt-12 text-center font-semibold italic px-10'>Calcular la energía del fotón emitido durante una transición y su longitud de onda en el átomo de hidrógeno:</p>
      <CalculateEnergy />
      <Footer />
    </main>
  )
}
