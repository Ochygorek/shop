import React from 'react'
import ConfirmOverlay from './confirmOverlay'
import ContestansOverlay from './contestansOverlay'

function Overlay() {
  const tf = false
  return (
    <div className='flex items-center justify-center w-full h-[260px] z-10 bg-white absolute top-0 left-0 text-black px-[80px]'>
      {tf? <ConfirmOverlay/> : <ContestansOverlay/>}
    </div>
  )
}

export default Overlay