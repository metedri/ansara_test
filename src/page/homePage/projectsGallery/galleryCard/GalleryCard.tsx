import { Overlay } from '../../../../shared/components/overlay/Overlay'
import { getVideoePath } from '../../../../shared/utils/getVideoePath'
import { CardFeatures } from './cardFeatures/CardFeatures'
import { CardOverlay } from './cardOverlay/CardOverlay'

const Cards = {
  ExhibitionCard: {
    video: 'bann1.mp4',
    points: ['Москва, 51-й км МКАД', 'Наро-фоминск'],
    linkTitle: 'Подробнее про выставочные площадки',
  },
  LoggingCard: {
    video: 'les3.mp4',
    points: ['Собственная лесозаготовка', '4 цеха в Архангельской области'],
    linkTitle: 'Подробнее о нашей лесозаготовке',
  },
}

type Props = {
  cardKey: 'ExhibitionCard' | 'LoggingCard'
  onVideoOpen: (videoSrc: string) => void
}

export const GalleryCard = ({ cardKey, onVideoOpen }: Props) => {
  const card = Cards[cardKey]

  return (
    <div className=' transition-all duration-500 relative transform hover:scale-105 hover:-translate-y-2'>
      <div
        className='w-full h-[200px] md:h-[280px] lg:h-[200px] xl:h-[280px] bg-black relative rounded-2xl overflow-hidden cursor-pointer'
        onClick={() => onVideoOpen(getVideoePath(card.video) ?? '')}>
        <video src={getVideoePath(card.video)} className='w-full h-full object-cover' playsInline muted />
        <Overlay />
        <CardOverlay cardKey={cardKey} />
      </div>
      <CardFeatures points={card.points} linkTitle={card.linkTitle} />
    </div>
  )
}
