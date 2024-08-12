import React from 'react'


const Section = () => {
  return (
    <div className='py-3 relative mt-48 bg-no-repeat bg-cover bg-center'>
   <div className='relative px-7 mx-auto max-w-7xl box-content'>
   <div className='flex justify-center flex-wrap items-center'>
      <div className='relative md:max-w-96 w-auto mx-3 mb-6'>
        <div className='hover:scale-105 duration-300'>
        <img className='w-full' src="https://www.mynobi.com/images/intro1.jpg" alt="" />
        <div className='flex justify-end flex-col absolute top-0 left-0 right-0 bottom-0 w-full h-full p-7 '>
        <span className='text-4xl text-white'>
        KLEURRIJK <br />
        GEZOND EN <br />
        VERRUKKELIJK!
        </span>
        <div className='flex mt-5 items-center'>
          <a className='bg-yellow-400 text-white border-transparent px-4 py-1 uppercase border border-solid inline-block cursor-pointer outline-none text-center text-xl font-normal min-w-32 hover:bg-white hover:text-yellow-400' href="">
            <span>bestel hier</span>
          </a>
        </div>
        </div>
        </div>
      </div>
      
      <div className='relative md:max-w-96 w-auto mx-3 mb-6'>
        <div className='hover:scale-105 duration-300'>
        <img className='w-full' src="https://www.mynobi.com/images/intro2.jpg" alt="" />
        <div className='flex justify-end flex-col absolute top-0 left-0 right-0 bottom-0 w-full h-full p-7'>
        <span className='text-4xl text-white'>
        KLEURRIJK <br />
        GEZOND EN <br />
        VERRUKKELIJK!
        </span>
        <div className='flex mt-5 items-center'>
          <a className='bg-yellow-400 text-white border-transparent px-4 py-1 uppercase border border-solid inline-block cursor-pointer outline-none text-center text-xl font-normal min-w-32 hover:bg-white hover:text-yellow-400' href="">
            <span>bestel hier</span>
          </a>
        </div>
        </div>
        </div>
      </div>

      <div className='relative md:max-w-96 w-auto mx-3 mb-6'>
        <div className='hover:scale-105 duration-300'>
        <img className='w-full' src="https://www.mynobi.com/images/intro3.jpg" alt="" />
        <div className='flex justify-end flex-col absolute top-0 left-0 right-0 bottom-0 w-full h-full p-7'>
        <span className='text-4xl text-white'>
        KLEURRIJK <br />
        GEZOND EN <br />
        VERRUKKELIJK!
        </span>
        <div className='flex mt-5 items-center'>
          <a className='bg-yellow-400 text-white border-transparent px-4 py-1 uppercase border border-solid inline-block cursor-pointer outline-none text-center text-xl font-normal min-w-32 hover:bg-white hover:text-yellow-400' href="">
            <span>bestel hier</span>
          </a>
        </div>
        </div>
        </div>
      </div>
    </div>
   </div>
    </div>
  )
}

export default Section