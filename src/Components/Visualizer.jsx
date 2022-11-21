import React from 'react'

const Visualizer = () => {
  return (
    <div className='glass flex px-5 py-4 rounded-2xl mt-10 mx-2'>
      <div className='text-right text-white'>
        <p>TOTAL SUPPLY </p>
        <p>STARTING PRICE </p>
        <p>Price increase per Nft sold </p>
        <p>MAX MINT </p>
        <p> Price for 500th NFT </p>
      </div>
      <div className='text-left font-[700] ml-4 text-[#E8296F]'>
        <p>500 NFTs</p>
        <p>10 $OSBS </p>
        <p>5 $OSBS </p>
        <p>1 PER WALLET</p>
        <p> 0 $OSBS</p>
      </div>
    </div>
  )
}

export default Visualizer