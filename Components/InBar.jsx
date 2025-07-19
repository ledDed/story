import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger,SplitText,useGSAP)
const InBar = ({text}) => {
  const ref =useRef(null)
  useGSAP(()=>{
    const tl=gsap.timeline(
      {
      scrollTrigger:{
        trigger:".Trigger",
        start:"top bottom",
        end:"+=50000",
        toggleActions:"play pause reverse reset",
        scrub:true
      
      }
    }
  )
  
    
let lines = SplitText.create(ref.current, { type: "lines" }); // Corrected type parameter

lines.lines.forEach((line, i) => {

  tl.fromTo(
    line,
    { y: 100, autoAlpha: 0 },
    { y: -23.7*i, autoAlpha: 1,scale:1.25}
  ).to(line, { y: -220-23.5*i, autoAlpha: 0, duration: 1, })
})
})
 
 
 
  return(
    <div ref={ref} className='InBar'>
      {text}
    </div>
  )
}
export default InBar
