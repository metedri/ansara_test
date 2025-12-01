type Props = {
  videoSrc: string | null
  onClose: () => void
}

export const VideoPlayer = ({ videoSrc, onClose }: Props) => {
  if (!videoSrc) return null

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  return (
    <div className='fixed inset-0 z-51 flex items-center justify-center ' onClick={handleBackdropClick}>
      <div className='absolute inset-0 bg-black opacity-95'></div>
      <div className='relative w-full max-w-6xl'>
        <button
          onClick={onClose}
          className='absolute top-4 right-4 w-12 h-12 bg-black rounded-full flex items-center justify-center text-white text-2xl hover:bg-gray-800 z-10 transition-all duration-200 hover:scale-110'
          aria-label='Закрыть видео'>
          ✕
        </button>
        <video src={videoSrc} className='w-full h-auto rounded-lg shadow-2xl' controls autoPlay />
      </div>
    </div>
  )
}
