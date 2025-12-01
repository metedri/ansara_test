import { IconSvg } from '../../../../../shared/components/icon/IconSvg'

type Props = {
  title: string
  area: string
}

export const SlideInfo = ({ title, area }: Props) => {
  return (
    <div className='flex-1 min-w-0'>
      <h3 className='font-medium text-lg leading-tight transform transition-all duration-300'>{title}</h3>
      <div className='flex items-center gap-1 text-sm whitespace-nowrap mt-1 transform transition-all duration-300'>
        <IconSvg iconID='Vector' alt='Площадь' className='h-4 w-4' />
        <span>{area}</span>
      </div>
    </div>
  )
}
