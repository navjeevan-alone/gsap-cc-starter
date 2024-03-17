import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
const GsapStagger = () => {
  // TODO: Implement the gsap.stagger() method
  useGSAP(() => {
    gsap.to(".stagger-box", {
      y: 200,
      rotate: 180,
      borderRadius: 50,
      stagger: {
        // wrap advanced options in an object
        each: 0.1,
        from: "center",
        grid: "auto",
        ease: "power1.in",
        repeat: -1,

        yoyo: true,
      },

      duration: 1,
      yoyo: true,
      repeat: -1,
    });
  }, []);
  return (
    <main>
      <h1>GsapStagger</h1>

      <p className="mt-5 text-gray-500">
        GSAP stagger is a feature that allows you to apply animations with a
        staggered delay to a group of elements.
      </p>

      <p className="mt-5 text-gray-500">
        By using the stagger feature in GSAP, you can specify the amount of time
        to stagger the animations between each element, as well as customize the
        easing and duration of each individual animation. This enables you to
        create dynamic and visually appealing effects, such as staggered fades,
        rotations, movements, and more.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://gsap.com/resources/getting-started/Staggers"
          target="_blank"
          rel="noreferrer noopener nofollow">
          Gsap Stagger
        </a>{" "}
        feature.
      </p>

      <div className="mt-20">
        <div className="flex gap-5">
          <div className="rounded-[50px] w-20 h-20 bg-indigo-200 stagger-box" />
          <div className="rounded-[50px] w-20 h-20 bg-indigo-300 stagger-box" />
          <div className="rounded-[50px] w-20 h-20 bg-indigo-400 stagger-box" />
          <div className="rounded-[50px] w-20 h-20 bg-indigo-500 stagger-box" />
          <div className="rounded-[50px] w-20 h-20 bg-indigo-600 stagger-box" />
          <div className="rounded-[50px] w-20 h-20 bg-indigo-700 stagger-box" />
          <div className="rounded-[50px] w-20 h-20 bg-indigo-800 stagger-box" />
        </div>
      </div>
    </main>
  );
};

export default GsapStagger;
