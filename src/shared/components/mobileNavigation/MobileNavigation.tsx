import { IconSvg } from '../icon/IconSvg'

export const MobileNavigation = () => {
  const items = [
    { title: 'Главная', icon: 'home-05' },
    { title: 'Проекты', icon: 'folder' },
    { title: 'Медиа', icon: 'image-03' },
    { title: 'Компания', icon: 'pne_tree' },
    { title: 'Клиентам', icon: 'user-check-01' },
  ]

  return (
    <div className='fixed bottom-0 left-0 right-0  border-t bg-white border-gray-200 shadow-lg z-40 md:hidden'>
      <div className='container mx-auto flex justify-around py-3'>
        {items.map((item, index) => (
          <button key={index} className='flex flex-col items-center gap-1 text-xs text-gray-700'>
            <IconSvg iconID={item.icon} alt={item.title} className='h-5 w-5' />
            <span>{item.title}</span>
          </button>
        ))}
      </div>
    </div>
  )
}
