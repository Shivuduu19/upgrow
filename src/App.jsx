import { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';
const config = {
  angle: 90,
  spread: "92",
  startVelocity: "71",
  elementCount: "96",
  dragFriction: "0.19",
  duration: "2190",
  stagger: "0",
  width: "10px",
  height: "10px",
  perspective: "1000px",
  colors: ["#a864fd", "#29cdff", "#78ff44", "#ff718d", "#fdff6a"]
};

function App() {
  const [activeConfettie, setActiveConfettie] = useState(false)
  useEffect(() => {
    setActiveConfettie(true)
  }, [])

  return (
    <div className="mt-52">
      <section className="sm:px-[1.5rem] sm:py-[2.5rem] lg:px-[2rem] bg-[radial-gradient(56.8%_50%_at_50%_50%,#ffeccc_0,hsla(0,0%,100%,0)_100%)] max-w-[80rem] mx-auto overflow-x-hidden ">
        <div className="text-center max-w-[42rem] mx-auto">
          <span className="bg-[linear-gradient(135deg,rgba(255,187,0,.1),rgba(253,119,2,.1))] tracking-[.5px] leading-[1.5rem] uppercase py-[.5rem] px-[1rem] rounded-[9999px] inline-flex mb-[1.25rem] ">
            <strong className="bg-[linear-gradient(315deg,#fd7702,#fb0)] text-transparent font-extrabold text-[.875rem] leading-[1.25rem] bg-clip-text">LIMITED DISCOUNT</strong>
          </span>
          <h1 className="sm:text-[3.75rem] sm:leading-[1] text-[rgb(17_29_34)] tracking-[-.025em] font-bold m-0">
            Honest pricing.
            <br />
            Grow or money back.
          </h1>
          <p className="lg:leading-[2rem] lg:text-[1.25rem] text-[rgb(75_85_99)] mt-[1.5rem] m-0 ">
            No bots. No fake followers. Guaranteed growth or it's free!
            <br className="sm:block hidden" />
            No credit card required. Try it 100% free. Cancel anytime.
          </p>
        </div>
        <div className="flex justify-center mt-[1.5rem] ">
          <div className="sm:mt-[2.5rem] py-[.375rem] p-[.25rem] bg-[rgb(243_244_246)] border-[1px] rounded-[.5rem] mx-auto relative flex border-[rgb(229_231_235)]">
            <button className="sm:w-auto font-medium py-[.5rem] px-[2rem] border-transparent rounded-[.375rem] ml-[.125rem] bg-transparent m-0">monthly</button>
            <button className="sm:w-auto font-medium py-[.5rem] px-[2rem] border-transparent rounded-[.375rem] ml-[.125rem] bg-transparent m-0">yearly</button>
          </div>
        </div>
        <div className="mx-auto relative w-[.25rem]">
          <div className="relative">
            <Confetti active={activeConfettie} config={config} />
          </div>
        </div>
      </section>
    </div>
  )
}

export default App

