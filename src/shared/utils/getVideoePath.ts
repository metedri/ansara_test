const videos = import.meta.glob<{ default: string }>('/src/shared/assets/video/*.{mp4,webm}', {
  eager: true,
})

export function getVideoePath(name: string) {
  return videos[`/src/shared/assets/video/${name}`].default
}
