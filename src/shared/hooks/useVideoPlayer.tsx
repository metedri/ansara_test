import { useState, useCallback } from 'react'

export type VideoAsset = string

export const useVideoPlayer = () => {
  const [selectedVideo, setSelectedVideo] = useState<VideoAsset | null>(null)

  const openVideo = useCallback((video: VideoAsset) => {
    setSelectedVideo(video)
  }, [])

  const closeVideo = useCallback(() => {
    setSelectedVideo(null)
  }, [])

  return {
    selectedVideo,
    openVideo,
    closeVideo,
    isOpen: selectedVideo !== null,
  }
}
