import { IconSvg } from '../../../../../shared/components/icon/IconSvg'

type Props = {
  points: string[]
  linkTitle: string
}
export const CardFeatures = ({ points, linkTitle }: Props) => {
  return (
    <div className='py-5 max-md:py-2.5'>
      <ul className='space-y-2 mb-5 max-md:mb-2.5'>
        {points.map((point, index) => (
          <li key={index} className='flex items-center gap-1.5 text-sm'>
            <IconSvg iconID='check' className='h-4 w-4' />
            {point}
          </li>
        ))}
      </ul>
      <a href='#' className='text-[#578C62] text-sm font-medium hover:text-[#4a7753] flex items-center gap-1 '>
        {linkTitle}
        <IconSvg iconID='chevron-right' className='h-3.5 w-3.5' />
      </a>
    </div>
  )
}
