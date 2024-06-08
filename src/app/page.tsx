import { PeriodicTable } from '@/components/PeriodicTable'
import { TitleAnimated } from '@/components/TitleAnimated'
import { BgParticles } from '@/components/BgParticles'
import { Footer } from '@/components/Footer'

export default function Home () {
  return (
    <main className="relative min-h-screen w-11/12 mx-auto pt-16 pb-10">
      <BgParticles />
      <TitleAnimated
        text1="MODELO ATÓMICO DE"
        text2="BOHR"
      />
      <p className='w-full z-10 mt-7 text-center italic text-[#ffffffc5] px-10'>El <b>modelo atómico de Bohr</b>, propuesto por Niels Bohr en 1913, postula que los electrones giran alrededor del núcleo en <b>órbitas circulares</b> a distancias fijas. Cada órbita representa un <b>nivel de energía específico</b>, y los electrones pueden saltar entre estas órbitas emitiendo o absorbiendo <b>cuantos de energía</b>. Este modelo ayudó a explicar las líneas espectrales observadas en los átomos y sentó las bases para la mecánica cuántica.</p>
      <div className='w-full h-[750px] relative mt-16 flex justify-center items-center'>
        <PeriodicTable />
      </div>
      <Footer />
    </main>
  )
}
