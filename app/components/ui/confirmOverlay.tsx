import React from 'react'

function ConfirmOverlay() {
  return (
    <button type='submit' className='bg-green-500 text-white rounded-full px-[40px] flex items-center justify-center active:bg-green-400'>
      <span className='flex items-center justify-center h-full w-full mb-[16px]'>Confirm order</span>
    </button>
  )
}

export default ConfirmOverlay