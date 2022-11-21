import React from 'react'
import { AiOutlineYoutube, AiOutlineInstagram } from 'react-icons/ai'
import { RiTelegramLine } from 'react-icons/ri'
import { CiTwitter } from 'react-icons/ci'
import { CgMail } from 'react-icons/cg'

const Services = ({ scope, condition, defaultCondition }) => {
    const services = [
        'Earn a share of 50% of the Monthly Profits.',
        'All original Minters will be Airdropped a separate NFT, that they can Buy and Sell on NFTrade.',
        '25% Royalty charge for Buy and Sell.',
        'All NFTs are purchased by our Native Tokens $OSBS.'
    ]
    const openLink = (href) => {
        window.open(href, '_blank', 'noopener,noreferrer');
    }
    return (
        <div className={`flex flex-col lg:items-start  items-center my-5 ${scope}:${condition} ${defaultCondition}`}>
            <div className='lg:w-[30rem] w-[20rem]'>
                {
                    services.map((item, index) => <li className='text-white' key={index}>{item}</li>)
                }
            </div>
            <div className='my-6 flex lg:flex-row flex-col items-center'>
                <a onClick={() => window.open('https://pancakeswap.finance/swap?inputCurrency=BNB&outputCurrency=0x6228283830c4a9b304f2E4C8562AE45bEd82a280')}>
                    <button className='bg-black text-white border-[3px] border-[#E8296F] rounded-lg px-4 py-2 lg:mr-8 mt-5' style={{ boxShadow: '0px 1px 10px 1px #E8296F' }}>BUY $OSBS</button>
                </a>
                <a onClick={() => window.open('https://docs.onestopblockshop.io')}>
                    <button className='text-[#E8296F] border-[3px] border-[#E8296F] rounded-lg px-4 py-2 lg:mr-4 mt-5'>View our Services</button>
                </a>
            </div>
            <div className='my-4 lg:w-[30rem] w-[20rem] lg:text-left text-center'>
                <p className='text-white my-1'>30% Monthly profits used to <br className='block lg:hidden md:hidden' /> buy back and burn $OSBS</p>
                <p className='text-white my-1'>Exclusive Audit Partners for <br className='block lg:hidden md:hidden' /> <span className='text-[#E8296F]'>Pinksale Finance</span></p>

            </div>
            <div className='my-5 flex flex-col lg:items-start items-center'>
                <button className='text-[#E8296F] border-[3px] border-[#E8296F] rounded-lg px-4 py-2 lg:mr-4'>Contact us</button>
                <p className='text-white flex my-4'>
                    <AiOutlineYoutube  className='mx-1 text-2xl cursor-pointer' onClick={() => openLink("https://www.youtube.com/@onestopblockshop9164")}/> 
                    <AiOutlineInstagram  className='mx-1 text-2xl cursor-pointer' onClick={() => openLink("https://www.instagram.com/osbsnetwork/")}/> 
                    <RiTelegramLine  className='mx-1 text-2xl cursor-pointer' onClick={() => openLink("https://t.me/osbsnetwork")}/> 
                    <CiTwitter  className='mx-1 text-2xl cursor-pointer' onClick={() => openLink("https://twitter.com/osbsnetwork")}/> 
                    <CgMail className='mx-1 text-2xl cursor-pointer' onClick={() => openLink("email- info@onestopblockshop.io")} />
                </p>
            </div>
        </div>
    )
}

export default Services