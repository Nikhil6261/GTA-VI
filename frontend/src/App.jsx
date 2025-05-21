import React, { useState } from 'react'
import { useGSAP } from "@gsap/react"
import gsap from 'gsap'

const App = () => {

  const [showsvg, setShowsvg] = useState(false)
  useGSAP(() => {

    const tl = gsap.timeline();

    tl.to(".vi-mask-group", {
      rotate: 10,
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    }).to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      transformOrigin: "50%  50%   ",
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= .9) {

          document.querySelector('.svg').remove();
          setShowsvg(true)
          this.kill()
        }
      }

    })

  })


  
  useGSAP(()=>{

    const main  = document.querySelector(".main")
  
 function handleMouseMove(e) {
    console.log(e);
  }

  main?.addEventListener("mousemove", handleMouseMove);

  },[showsvg])

  return (
    <>


      <div className=' svg fixed top-0 left-0 z-[100] w-full h-full  overflow-hidden bg-black'>

        <svg viewBox=' 0 0 800 600 ' preserveAspectRatio='xMidYMid slice'>

          <defs>
            <mask id='viMask'>

              <rect width="100%" height="100%" fill=' black' />
              <g className='vi-mask-group'>

                <text x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor='middle'
                  fill='white'
                  dominantBaseline="middel"
                  fontFamily='arial Black'
                >
                  VI
                </text>

              </g>


            </mask>
          </defs>


          <image

            href='./bg.png'
            width="100%"
            hanging="100%"
            preserveAspectRatio="xMidYMidc slice"
            mask="url(#viMask)"
          />


        </svg>

      </div>


      {showsvg && (
        <div className='main  h-full bg-black '>

          <div className='landing  w-full h-full bg-black'>


<div className='navbar absolute top-7 left-0 z-[10] flex items-center flex-col    w-[20rem] h-[5rem]'>

  <div className='lines absolute left-[3rem] flex flex-col gap-2'>
    <div className='line w-15 h-1 bg-amber-50'></div>
    <div className='line w-8 h-1 bg-amber-50'></div>
    <div className='line w-5 h-1 bg-amber-50'></div>
  </div>

<h3 className=' text-amber-50  font-bold flex flex-col   text-2xl size-5 '> ROCKSTAR</h3>

</div>


            <div className='imagediv overflow-hidden relative w-full h-full'>

              <img className='absolute w-full h-full object-cover' src='./sky.png' alt='' />
              <img className='absolute w-full h-full object-cover' src='./bg.png' alt='' />

              <img className=' absolute  left-[30%] bottom-0 scale-[1.1] top-[17rem] ' src='./girlbg.png' />
            </div>

          </div>


        </div>
      )

      }

    </>


  )
}

export default App
