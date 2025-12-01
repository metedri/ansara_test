type AssetModule = { default: string } | string

const assetsModules = import.meta.glob<AssetModule>('../../assets/**/*.{png,svg,jpg,jpeg,gif,webp,bmp,mp4}', {
  eager: true,
})

export const assets: Record<string, string> = Object.keys(assetsModules).reduce((acc, path) => {
  const match = path.match(/([^/]+?)(?=\.\w+$)/)
  if (!match) return acc

  const fileName = match[1]
  const module = assetsModules[path]

  const url = typeof module === 'string' ? module : module.default

  acc[fileName] = url
  return acc
}, {} as Record<string, string>)

const images = import.meta.glob<{ default: string }>('/src/shared/assets/images/*.{jpg,png,webp}', {
  eager: true,
})

export function getImagePath(name: string) {
  return images[`/src/shared/assets/images/${name}`].default
}
