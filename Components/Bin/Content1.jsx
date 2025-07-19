
import React, { useRef } from 'react';
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(useGSAP, SplitText, ScrollTrigger);

const Content1 = ({ text, url, registerTimeline }) => {
  const Ref = useRef();

  useGSAP(() => {
    let tlb = gsap.timeline();
    let split = new SplitText(Ref.current, {
      type: "lines",
      wordsClass: "word"
    });

    tlb.from(split.lines, {
      y:20,
      ease: "back.out",
      autoAlpha: 0,
      stagger: {
        amount: 2,
        from: "top"
      },
      // scrollTrigger: {
      //   trigger: Ref.current,
      //   start: "top 80%",
      //   end: "+=500px",
      //   markers: true,
      //   toggleActions: "play pause resume reset"
      // }
    });

    registerTimeline("B", tlb);
  }, { scope: Ref });

  return (
    <div ref={Ref} style={{ backgroundImage: `url(${url})` }} className='app'>
      {text}
    </div>
  );
};

export default Content1;
