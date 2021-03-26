import React, { useCallback } from 'react'
import ReactPlayer from 'react-player'
import playIcon from '../images/play.png'

const Video = () => {
  const handleContextMenu = useCallback((event) => {
    event.preventDefault()
  }, [])
  //set light to true for placeholder icon to activate / temp icon.
  return (
    <div className="z-10 relative h-56 w-full pr-8 ipad:h-80 md:w-full md:h-80 lg:w-full lg:h-56 lg:px-0 xl:w-full xl:h-72 2xl:h-full xl:px-0 border-2 border-transparent rounded-xl overflow-hidden">
      <ReactPlayer
        className="absolute"
        width="100%"
        height="100%"
        url="https://www.youtube.com/watch?v=MxcJtLbIhvs"
        light={false}
        playIcon={<img src={playIcon} alt="" width="80" height="40" />}
        onContextMenu={handleContextMenu}
        config={{
          file: {
            attributes: {
              controlsList: 'nodownload',
            },
          },
        }}
      />
    </div>
  )
}

export default Video
