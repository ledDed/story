import React, { useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import SplitText from 'gsap/SplitText'
import { useGSAP } from '@gsap/react'
import i1 from '../src/assets/i1.png';
import i2 from '../src/assets/i2.png';
import i3 from '../src/assets/i3.png';
import i4 from '../src/assets/i4.png';
import i5 from '../src/assets/i5.png';
import i6 from '../src/assets/i6.png';


gsap.registerPlugin(ScrollTrigger,SplitText,useGSAP)
const Image = () => {
  useGSAP(()=>{
    const tli=gsap.timeline({scrollTrigger:{
      trigger:".Trigger",
      start:"top bottom",
      end:"+=200000",
      toggleActions:"play pause reverse reset",
      scrub:true
    }})
    tli.fromTo(".Image", {
  backgroundImage: `url(${i3})`,
  autoAlpha:0.7
},{
  backgroundImage: `url(${i3})`,
  autoAlpha:1
}).to(".Image", {
  backgroundImage: `url(${i3})`,
  autoAlpha:0.3
})
.fromTo(".Image", {
  backgroundImage: `url(${i2})`,
  autoAlpha:0.3
},{
  backgroundImage: `url(${i2})`,
  autoAlpha:1
})
.to(".Image", {
  backgroundImage: `url(${i2})`,
  autoAlpha:0.3
})
.fromTo(".Image", {
  backgroundImage: `url(${i1})`,
  autoAlpha:0.3
},{
  backgroundImage: `url(${i1})`,
  autoAlpha:1
})
.to(".Image", {
  backgroundImage: `url(${i1})`,
  autoAlpha:0.3
})
.fromTo(".Image", {
  backgroundImage: `url(${i4})`,
  autoAlpha:0.3
},{
  backgroundImage: `url(${i4})`,
  autoAlpha:1
})
.to(".Image", {
  backgroundImage: `url(${i4})`,
  autoAlpha:0.3
})
.fromTo(".Image", {
  backgroundImage: `url(${i5})`,
  autoAlpha:0.3
},{
  backgroundImage: `url(${i5})`,
  autoAlpha:1
})
.to(".Image", {
  backgroundImage: `url(${i5})`,
  autoAlpha:0.3
})
.fromTo(".Image", {
  backgroundImage: `url(${i6})`,
  autoAlpha:0.3
},{
  backgroundImage: `url(${i6})`,
  autoAlpha:1
})
.to(".Image", {
  backgroundImage: `url(${i6})`,
  autoAlpha:0.3
})

  })
  return (
    <div className='Image'>
      
    </div>
  )
}

export default Image
