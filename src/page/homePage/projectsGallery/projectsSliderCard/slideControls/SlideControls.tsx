import { IconSvg } from '../../../../../shared/components/icon/IconSvg'

type Props = {
  prevSlide: () => void
  nextSlide: () => void
}

export const SlideControls = ({ prevSlide, nextSlide }: Props) => {
  return (
    <div className='flex gap-2'>
      <button
        onClick={e => {
          e.stopPropagation()
          prevSlide()
        }}
        className='w-10 h-10 flex items-center justify-center rounded-full bg-[#578C62] hover:bg-[#4a7753] transition-all duration-300 transform hover:scale-110 cursor-pointer'>
        <IconSvg iconID='arrow-left' alt='Назад' className='h-5 w-5' />
      </button>
      <button
        onClick={e => {
          e.stopPropagation()
          nextSlide()
        }}
        className='w-10 h-10 flex items-center justify-center rounded-full bg-[#578C62] hover:bg-[#4a7753] transition-all duration-300 transform hover:scale-110 cursor-pointer'>
        <IconSvg iconID='arrow-right' alt='Вперёд' className='h-5 w-5' />
      </button>
    </div>
  )
}
