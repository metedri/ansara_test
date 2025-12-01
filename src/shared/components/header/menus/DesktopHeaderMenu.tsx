import { IconSvg } from '../../icon/IconSvg'

export const desktopMenuItems: menuItem[] = [
  {
    title: 'Проекты',
    options: [{ title: 'Item 1' }, { title: 'Item 2' }],
  },
  {
    title: 'Наше производство',
    options: [{ title: 'Item 1' }, { title: 'Item 2' }],
  },
  {
    title: 'Фото и видео',
    options: [{ title: 'Item 1' }, { title: 'Item 2' }],
  },
  { title: 'Новости', options: null },
  {
    title: 'Для клиентов',
    options: [{ title: 'Item 1' }, { title: 'Item 2' }],
  },
  {
    title: 'О компании',
    options: [{ title: 'Item 1' }, { title: 'Item 2' }],
  },
  {
    title: 'Услуги',
    options: [{ title: 'Item 1' }, { title: 'Item 2' }],
  },
]

export type menuItem = {
  title: string
  options: { title: string }[] | null
}

export const DesktopHeaderMenu = () => {
  return (
    <nav className='hidden xl:flex items-center gap-7 font-medium text-gray-700'>
      {desktopMenuItems.map(item =>
        item.options ? (
          <div key={item.title} className='relative group'>
            <button className='flex items-center gap-1 group'>
              {item.title}
              <IconSvg iconID={'arrow'} className='transition-transform duration-200 group-hover:rotate-180 mt-1' />
            </button>
            <div className='absolute left-1/2 -translate-x-1/2 top-full mt-2 w-28  border border-gray-200 rounded-md opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50 group-hover:pointer-events-auto'>
              {item.options.map(option => (
                <a
                  key={option.title}
                  href='#'
                  className='block px-4 py-2 text-sm  hover:bg-gray-100 font-sans transition-colors'>
                  {option.title}
                </a>
              ))}
            </div>
          </div>
        ) : (
          <button key={item.title}>{item.title}</button>
        )
      )}
    </nav>
  )
}
