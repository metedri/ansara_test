import { HomeContent } from './homeContent/HomeContent'
import { ProjectsGallery } from './projectsGallery/ProjectsGallery'

export const HomePage = () => {
  return (
    <section className='container mx-auto mt-5 mb-32 md:mb-0 py-4 xxs:px-3'>
      <HomeContent />
      <ProjectsGallery />
    </section>
  )
}
