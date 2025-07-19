import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Content = ({ text, url, registerTimeline }) => {
  const Ref = useRef(null);

  useGSAP(() => {
    let tl = gsap.timeline();
    let split = new SplitText(Ref.current, {
      type: "lines",
      wordsClass: "word"
    });

    tl.from(split.lines, {
      scrollTrigger:{
        trigger:Ref.current,
        markers:true
      },
      y:10,
      ease: "back.out",
      autoAlpha: 0,
      stagger: {
        amount: 2,
        from: "top"
      },

    });

       registerTimeline("A", tl);
  }, { scope: Ref });

  return (
    <div ref={Ref} style={{ backgroundImage: `url(${url})` }} className='app'>
      {text}
    </div>
  );
};

export default Content;
