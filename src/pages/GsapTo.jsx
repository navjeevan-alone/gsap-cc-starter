import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

const GsapTo = () => {
  // TODO: Implement the gsap.to() method
  function handleClick() {
   console.log("you clicke me");
  }
  useGSAP(()=>{
gsap.to("#blue-box",{
  x:250,
  y:10,
  rotate:150,
  ease:"bounce.inOut",
  duration:2,
  onComplete:handleClick,
  yoyo:true,
  repeat:-1

})
// gsap.from("#red-box",{
//   x:-100
// })
gsap.fromTo("#green-box", { x: -100 }, { x:100 , duration: 1 });


  },[])
  return (
    <main>
      <h1>GsapTo</h1>

      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is used to animate elements from their
        current state to a new state.
      </p>
      <p className="mt-5 text-gray-500">
        The <code>gsap.to()</code> method is similar to the{" "}
        <code>gsap.from()</code> method, but the difference is that the{" "}
        <code>gsap.to()</code> method animates elements from their current state
        to a new state, while the <code>gsap.from()</code> method animates
        elements from a new state to their current state.
      </p>

      <p className="mt-5 text-gray-500">
        Read more about the{" "}
        <a
          href="https://greensock.com/docs/v3/GSAP/gsap.to()"
          target="_blank"
          rel="noreferrer noopener nofollow">
          gsap.to()
        </a>{" "}
        method.
      </p>

      <div className="mt-20">
        <div
          id="blue-box" 
          className="w-20 h-20 bg-blue-500 rounded-lg"
        />
        <div
          id="red-box" 
          className="w-20 h-20 bg-red-500 rounded-lg"
        />
        <div
          id="green-box" 
          className="w-20 h-20 bg-green-500 rounded-lg"
        />
      </div>
    </main>
  );
};

export default GsapTo;
