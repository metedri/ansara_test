import { IconSvg } from '../../../../../shared/components/icon/IconSvg'

type Props = {
  cardKey: 'ExhibitionCard' | 'LoggingCard'
}
export const CardOverlay = ({ cardKey }: Props) => {
  if (cardKey === 'ExhibitionCard') {
    return (
      <>
        <div className='absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium border border-gray-200'>
          {'2 выставочные площадки'}
        </div>
        <h3 className='absolute bottom-4 left-4 right-4 text-white font-bold text-lg mb-2 leading-tight'>
          Посмотрите, как выглядят <br /> наши дома вживую
        </h3>
      </>
    )
  } else {
    return (
      <div className='absolute top-4 left-4 flex items-center gap-2'>
        <IconSvg
          iconID='play'
          alt='Play'
          className='transform group-hover:scale-110 transition-transform duration-300'
        />
        <div className='text-sm font-semibold text-white '>
          Видео о том, как
          <br /> создается идеальный дом
        </div>
      </div>
    )
  }
}
