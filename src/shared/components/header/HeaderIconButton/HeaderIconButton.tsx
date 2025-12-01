type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  className?: string
}

export const HeaderIconButton = ({ className = '', children, ...props }: Props) => {
  const buttonClasses =
    'w-10 h-10 flex items-center justify-center rounded-full bg-[#EAE3E1]/60 hover:bg-gray-100 transition-colors' +
    ' ' +
    className

  return (
    <button className={buttonClasses} {...props}>
      {children}
    </button>
  )
}
