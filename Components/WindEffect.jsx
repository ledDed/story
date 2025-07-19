import { useEffect } from "react";
import { gsap } from "gsap";

export default function WindEffect() {
  useEffect(() => {
    gsap.utils.toArray(".leaf").forEach((leaf, i) => {
      const tl = gsap.timeline({ repeat: -1, repeatDelay: Math.random() * 2 });

      tl.to(leaf, {
        x: `random(-200, 200)`,
        y: `random(-100, 100)`,
        rotation: `random(-45, 45)`,
        scale: `random(0.8, 1.2)`,
        opacity: `random(0.6, 1)`,
        duration: `random(3, 6)`,
        ease: "sine.inOut",
      }).to(leaf, {
        x: 0,
        y: 0,
        rotation: 0,
        scale: 1,
        opacity: 1,
        duration: `random(3, 6)`,
        ease: "sine.inOut",
      });
    });
  }, []);

  return (
    <div className="wind-container w-screen h-screen">
      {[...Array(7)].map((_, i) => (
        <div key={i} className="leaf">🍃</div>
      ))}
    </div>
  );
}