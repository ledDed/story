import React, { useRef } from 'react'

const Triggerb = () => {
  const Tref = useRef(null)
  return (
    <div ref={Tref} className='Triggerb'>

    </div>
  )
}

export default Triggerb
