import { useState } from 'react'
import { getImagePath } from '../../../../shared/utils/getImagePath'
import { SlideControls } from './slideControls/SlideControls'
import { SlideInfo } from './slideInfo/SlideInfo'
import { Overlay } from '../../../../shared/components/overlay/Overlay'

const projects = [
  {
    image: 'image_1.jpg',
    title: 'Дом из клееного бруса «Истра»',
    area: '137 м²',
    tag: 'Наши авторские проекты',
  },
  {
    image: 'image_2.jpg',
    title: 'Дом из клееного бруса «Истра»',
    area: '137 м²',
    tag: 'Наши авторские проекты',
  },
  {
    image: 'image_3.jpg',
    title: 'Дом из клееного бруса «Истра»',
    area: '137 м²',
    tag: 'Наши авторские проекты',
  },
]

export const ProjectsSliderCard = () => {
  const [currentSlide, setCurrentSlide] = useState(0)

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % projects.length)
  }
  const prevSlide = () => {
    setCurrentSlide(prev => (prev - 1 + projects.length) % projects.length)
  }

  const currentSlideData = projects[currentSlide]

  return (
    <div className='h-[200px] xs:h-[390px] lg:h-[300px] xl:h-[390px] rounded-2xl overflow-hidden relative group transition-all duration-500 transform hover:scale-105 hover:-translate-y-2'>
      <img
        src={getImagePath(currentSlideData.image)}
        alt={currentSlideData.title}
        className='w-full h-full object-cover'
      />
      <Overlay />
      <div className='absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-sm font-medium border border-gray-200 '>
        {currentSlideData.tag}
      </div>
      <div className='absolute bottom-4 left-4 right-4 text-white'>
        <div className='flex flex-row items-center gap-6'>
          <SlideControls nextSlide={nextSlide} prevSlide={prevSlide} />
          <SlideInfo title={currentSlideData.title} area={currentSlideData.area} />
        </div>
      </div>
    </div>
  )
}
