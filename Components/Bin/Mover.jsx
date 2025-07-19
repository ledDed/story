import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
    
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP,ScrollTrigger);
const Mover = ({mtlr}) => {
  useGSAP(()=>{
    const tla=gsap.timeline()
    tla.to(".Mover",{
      x:100,
      duration:1
    })
    mtlr.add(tla,">")
  },[])
  return (
    <div className='Mover'>
      Done
    </div>
  )
}

export default Mover
