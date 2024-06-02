import { PeriodicTable } from '@/components/PeriodicTable'
import { TitleAnimated } from '@/components/TitleAnimated'
import { BgParticles } from '@/components/BgParticles'

export default function Home () {
  return (
    <main className="relative bg-black min-h-screen">
      <BgParticles />
      <TitleAnimated
        text1="MODELO ATÓMICO DE"
        text2="BOHR"
      />
      <PeriodicTable />
    </main>
  )
}
