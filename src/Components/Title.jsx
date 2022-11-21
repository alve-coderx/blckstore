import React from 'react'
import fire from '../assets/fire.png'

const Title = () => {
    return (
        <div className='lg:block flex flex-col items-center text-center lg:text-left'>
            <div className='flex items-center '>
                <img src={fire} />
                <p className='text-white text-sm shadow-lg'>Total $OSBS Burnt 0.0</p>
            </div>
            <div className='text-white lg:text-6xl text-4xl font-[700] mt-5'>
                Earn Passive <br/> Income from <br/> our <span className='text-[#E8296F]'>NFTs</span>
            </div>
        </div>
    )
}

export default Title