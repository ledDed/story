import React, { useRef } from 'react'

const Trigger = () => {
  const Tref = useRef(null)
  return (
    <div ref={Tref} className='Trigger'>
      trigger
    </div>
  )
}

export default Trigger
