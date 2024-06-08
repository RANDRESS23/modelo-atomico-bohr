import { ReactIcon } from '@/svgs/ReactIcon'

export const Footer = () => {
  return (
    <footer className="w-full flex justify-center items-center">
      <p className="flex justify-center items-center gap-1">
        <span className='italic'>Proyecto De Física Desarrollado Por</span>
        <ReactIcon />
        <span className='italic font-semibold'>Raúl Quimbaya | Vanessa López</span>
      </p>
    </footer>
  )
}
