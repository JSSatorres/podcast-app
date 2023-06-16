import React from 'react'
// import { toast } from 'react-toastify'
// import { useNavigate } from 'react-router-dom'
// import { useSelector } from 'react-redux'
// import { BsFillCheckCircleFill } from 'react-icons/bs'

const EpisodeCard = () => {
  // const isCeoAuthenticated = useSelector((state) => state.auth.isCeoAuthenticated)
  // const navigate = useNavigate()

  const handleclick = () => {
    console.log('click')
    // if (!isCeoAuthenticated) {
    //   toast.error('You are not logged in as admin!')
    //   return
    // }
    // navigate(`/home/video/${video?.id}`)
  }
  return (
    <button type='button' onClick={handleclick}>
      <div className='flex flex-col  bg-customdark rounded-lg'>
        <h1>EpisodeCard</h1>
        {/* <div className='relative h-48 md:h-40 md:rounded-xl overflow-hidden'>
          <img
            className='h-full w-full object-cover'
            src={video.thumbnails}
            alt={video.title}
          />
        </div> */}
        <div className='flex text-white mt-3 justify-between'>
          {/* <div className='flex flex-col ml-3 overflow-hidden'>
            <span className='text-sm font-bold line-clamp-2'>
              {video?.title}
            </span>
            <span className='text-[12px] font-semibold mt-2 text-white/[0.8] flex items-center'>
              {video.channel}
              <BsFillCheckCircleFill className='text-white/[0.7] text-[12px] ml-1' />
            </span>
            <div className='flex text-[12px] font-semibold text-white/[0.7] truncate overflow-hidden my-1'>
              <span className='truncate'>
                {video.description}
              </span>
            </div> */}
          {/* </div> */}
          <div className='flex h-12 w-12 rounded-full overflow-hidden mr-2'>
            {/* <img
              className='h-full w-full object-cover'
              src={video.author}
              alt={video.channel}
            /> */}
          </div>
        </div>
      </div>
    </button>
  )
}

export default EpisodeCard
