import { VideoPlayer } from '../../../shared/components/videoPlayer/VideoPlayer'
import { useVideoPlayer } from '../../../shared/hooks/useVideoPlayer'
import { GalleryCard } from './galleryCard/GalleryCard'
import { ProjectsSliderCard } from './projectsSliderCard/ProjectsSliderCard'

export const ProjectsGallery = () => {
  const { selectedVideo, openVideo, closeVideo, isOpen } = useVideoPlayer()

  return (
    <div>
      {/* DESKTOP */}
      <div className='hidden xxs:block'>
        <div className='grid grid-cols-1 gap-8 xxs:grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3'>
          <div className='col-span-1 xs:col-span-2 sm:col-span-2 md:col-span-2 lg:col-span-1 xl:col-span-1'>
            <ProjectsSliderCard />
          </div>
          <GalleryCard cardKey='ExhibitionCard' onVideoOpen={openVideo} />
          <GalleryCard cardKey='LoggingCard' onVideoOpen={openVideo} />
        </div>
      </div>
      {/* MOBILE */}
      <div className='xxs:hidden space-y-4 mt-16 grid grid-cols-1'>
        <GalleryCard cardKey='ExhibitionCard' onVideoOpen={openVideo} />
        <GalleryCard cardKey='LoggingCard' onVideoOpen={openVideo} />
        <ProjectsSliderCard />
      </div>
      {isOpen && <VideoPlayer videoSrc={selectedVideo} onClose={closeVideo} />}
    </div>
  )
}
