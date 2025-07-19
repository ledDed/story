
import myImage from '../src/assets/cloud.png'
import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'

gsap.registerPlugin(ScrollTrigger,SplitText,useGSAP)

const Clouds = () => {
  useGSAP(()=>{
    const tl=gsap.timeline({scrollTrigger:{
      trigger:".Trigger",
      start:"top bottom",
      end:"bottom top",
      toggleActions:"play pause reverse reset",
      scrub:true,
      markers:true}})
    tl.to(".c1",{x:-800,ease:"power1.in"})
    .to(".c2",{x:800},"<")
    .to("#i3",{x:2})
  })
  return (
    <div className="c3">
<img className="c1" src={myImage}/>
<img className="c2" src={myImage}/>

    </div>
  )
}

export default Clouds
