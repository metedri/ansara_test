const icons = import.meta.glob('../../assets/icons/*.svg', { eager: true, import: 'default' })

type Props = {
  iconID: string
} & React.ImgHTMLAttributes<HTMLImageElement>

export const IconSvg = ({ iconID, ...imgProps }: Props) => {
  const src = icons[`../../assets/icons/${iconID}.svg` as string] as string
  return <img src={src} {...imgProps} />
}
