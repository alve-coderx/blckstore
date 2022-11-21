import React from 'react'
import logo from '../assets/logo.png'
const Mint = () => {
  return (
    <div className='my-10 ' >
      <div className='relative ' >
        <div  className='lg:block hidden -rotate-[25deg] -translate-y-24 -translate-x-12 absolute bg-[#040521] border-[#E8296FB2] border-[5px] rounded-3xl flex flex-col items-center pt-32 pb-10 w-[383px] h-[514px]' style={{ boxShadow: '0px 1px 10px 1px #E8296F' }}>
        
        </div>
        <div className='lg:block hidden rotate-12 -translate-y-5 translate-x-16 absolute bg-[#040521] border-[#E8296FB2] border-[5px] rounded-3xl flex flex-col items-center pt-32 pb-10 w-[383px] h-[514px]' style={{ boxShadow: '0px 1px 10px 1px #E8296F' }}>
        
        </div>
        <div className='rotate-0 translate-x-5 bg-[#040521] border-[#E8296FB2] border-[5px] rounded-3xl flex flex-col items-center lg:pt-32 py-10 w-80 lg:w-96 ' style={{ boxShadow: '0px 1px 10px 1px #E8296F' }}>
          <img src={logo} className="lg:w-64 w-40 my-4" />
          <button className='text-white bg-[#E8296F] px-10 py-4 rounded-[50px] font-[900] my-4'>Mint now</button>
          <p className=' text-white text-xl my-4 font-[900] '>Current Price : <span className='text-[#E8296F]'> 10 $OSBS </span></p>
        </div>
      </div>
    </div>
  )
}

export default Mint