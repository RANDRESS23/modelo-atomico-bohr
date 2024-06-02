import { cn } from '@/libs/utils'

interface TitleAnimatedProps {
  text1: string
  text2: string
  textSize?: string
  isTextLeft?: boolean
  isTextCol?: boolean
  isTextRowMobile?: boolean
}

export const TitleAnimated = ({ text1, text2, textSize, isTextLeft, isTextCol, isTextRowMobile }: TitleAnimatedProps) => {
  const textSizeDefault = 'text-3xl lg:text-4xl'

  return (
    <div className={cn(
      'w-full relative flex flex-col items-center text-center mb-5',
      isTextLeft === undefined && 'justify-center',
      isTextCol ? 'lg:flex-col' : 'lg:flex-row',
      isTextRowMobile && 'flex-row gap-3'
    )}>
      <span className={cn(
        'bg-clip-text text-transparent bg-gradient-to-b dark:from-white dark:to-neutral-400 from-black/80 to-black font-extrabold italic px-2',
        textSize ?? textSizeDefault
      )}>{text1}</span>
      <div className='relative flex justify-center items-center'>
        <span className={cn(
          'top-0 left-0 font-extrabold opacity-0 italic',
          textSize ?? textSizeDefault
        )}>{text2}</span>
        <span className={cn(
          'absolute top-0 left-0 bg-clip-text text-transparent bg-gradient-to-r from-color-gradient-1A to-color-gradient-2A font-extrabold animate-color-cycle-1 italic px-2 -ml-1',
          textSize ?? textSizeDefault
        )}>{text2}</span>
        <span className={cn(
          'absolute top-0 left-0 bg-clip-text text-transparent bg-gradient-to-r from-color-gradient-1B to-color-gradient-2B font-extrabold animate-color-cycle-2 italic px-2 -ml-1',
          textSize ?? textSizeDefault
        )}>{text2}</span>
        <span className={cn(
          'absolute top-0 left-0 bg-clip-text text-transparent bg-gradient-to-r from-color-gradient-1C to-color-gradient-2C font-extrabold animate-color-cycle-3 italic px-2 -ml-1',
          textSize ?? textSizeDefault
        )}>{text2}</span>
      </div>
    </div>
  )
}
