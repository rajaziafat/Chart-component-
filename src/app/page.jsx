import React from 'react'
import Chart from '@/components/Chart'
import { FaApple, FaArrowRightLong } from "react-icons/fa6";

const page = () => {
  return (
    <section style={{ backgroundImage: "url('/Background.png')" }} className='w-full min-h-screen bg-cover bg-center'>

      <div className='w-full max-sm:min-h-[120vh] max-w-screen-2xl  py-[1rem] mx-auto'>
     {/* main -   */}
        <div className='flex flex-col items-start justify-center w-full h-screen'>
        <div className='px-[20px] sm:px-[60px] lg:px-[90px] xlb:px-[120px] flex items-center max-sm:flex-col justify-between w-full'>
          {/* ---- left  */}
          <div>
            <div className='text-white'>
              <p className='font-bold font-Montserrat text-sm sm:text-lg'>AAPL</p>
              <h1 className='text-white font-Noto font-medium leading-normal sm:leading-[60px] text-[40px] sm:text-[60px]'>$169.47</h1>

              {/* ---- white button  */}
              <div className='flex my-2 items-center bg-white px-3 tracking-wide font-bold py-1 rounded-full gap-1 text-blue-950'>
              <FaArrowRightLong size={23} className='rotate-[-35deg] text-[#679290] font-bold text-sm sm:text-lg' />
                <p>USD + 3.48 <span>
                  (+1.50%)
                </span>
                  <span> TODAY</span>
                </p>
              </div>

              <div className='mt-5 my-6 flex items-center flex-wrap gap-8'>
                <div className=''>
                  <p className='font-extrabold text-[18px] text-[#277b76] font-Montserrat'>OPEN</p>
                  <h4 className=' text-[22px] xsm:text-[25px] md:text-[34px] leading-[25px]'>$169.59</h4>
                </div>
                <div className=''>
                  <p className='font-extrabold text-[18px] text-[#277b76] font-Montserrat'>HIGH</p>
                  <h4 className=' text-[22px] xsm:text-[25px] md:text-[34px] leading-[25px]'>$169.91</h4>
                </div>
                <div className=''>
                  <p className='font-extrabold text-[18px] text-[#277b76] font-Montserrat'>LOW</p>
                  <h4 className=' text-[22px] xsm:text-[25px] md:text-[34px] leading-[25px]'>$168.95</h4>
                </div>
                <div className=''>
                  <p className='font-extrabold text-[18px] text-[#277b76] font-Montserrat'>DIV YIELD</p>
                  <h4 className=' text-[22px] xsm:text-[25px] md:text-[34px] leading-[25px]'>0.57%</h4>
                </div>
              </div>
              <h2 className='text-white font-semibold text-[20px] xsm:text-[30px] sm:text-[35px] font-sans'>6 Month Stock Price History</h2>
            </div>
          </div>

          {/* right  */}
          <div>
          <FaApple size={80} className='text-white' />
          </div>

         
        </div>


      {/* for charts  */}
        <div className='w-full px-[0px] sm:px-[40px] xlb:px-[50px] h-[400px] '>
<Chart />
        </div>
        </div>

      </div>
    </section>
  )
}

export default page