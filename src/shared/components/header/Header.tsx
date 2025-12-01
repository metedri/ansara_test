import { IconSvg } from '../icon/IconSvg'
import { DesktopHeaderMenu } from './menus/DesktopHeaderMenu'
import { HeaderIconButton } from './HeaderIconButton/HeaderIconButton'

export const Header = () => {
  return (
    <header className='py-5 flex items-center justify-between xxs:px-3'>
      <div className='shrink-0 flex items-center gap-10'>
        <IconSvg className='h-[43px] md:h-[51px] w-auto' iconID={'logo_fin_1'} alt='ЭКО-ТЕХ Деревянные дома' />
        <button className='h-10 w-[120px] items-center justify-center sm:flex hidden gap-2  rounded-full bg-[#EAE3E1]/60 hover:bg-gray-100 transition-colors'>
          <IconSvg iconID={'burger'} alt='' />
          <span>Меню</span>
        </button>
      </div>
      <DesktopHeaderMenu />
      <div className='flex items-center gap-2 xl:gap-5'>
        <a className='font-semibold text-gray-800 xs:block hidden whitespace-nowrap font-sans' href='tel:88003339191'>
          8 (800) 333-91-91
        </a>
        <HeaderIconButton className='xs:hidden'>
          <IconSvg iconID={'phone'} alt='Телефон' className='h-4 w-4' />
        </HeaderIconButton>
        <HeaderIconButton>
          <IconSvg iconID={'loop'} alt='Поиск' className='h-4 w-4' />
        </HeaderIconButton>
        <HeaderIconButton>
          <IconSvg iconID={'like'} alt='Избранное' className='h-4 w-4' />
        </HeaderIconButton>
        <HeaderIconButton className='xs:hidden'>
          <IconSvg iconID={'burger'} alt='Бургер' className='h-4 w-4' />
        </HeaderIconButton>
      </div>
    </header>
  )
}
