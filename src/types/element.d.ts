export interface Element {
  appearance: string | null
  atomic_mass: number
  boil: number | boil
  category: string
  color: string | null
  density?: number | null
  discovered_by: string | null
  electron_affinity: number | null
  electron_configuration: string
  electronegativity_pauling: number | null
  ionization_energies: number[]
  melt: number | null
  molar_heat: number | null
  name: string
  named_by: string | null
  number: number
  period: number
  phase: string
  shells: number[]
  source: string
  spectral_img: string | null
  summary: string
  symbol: string
  xpos: number
  ypos: number
  __v: number
  _id: string
}
