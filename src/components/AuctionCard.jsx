import React from 'react'

const AuctionCard = () => {
  return (
    <div className="m-10 bg-sky-300 rounded-2xl flex justify-center items-center shadow-xl h-140">
      <img
        className="w-1/2 h-140 rounded-l-2xl"
        src="/src/assets/images/Auction.jpg"
        alt="shop owner"
      />

      <div className='text-center flex flex-col items-center space-y-10'>
        <h1 className='text-5xl font-bold'>Bid. Win. Save.</h1>
        <p className='tracking-wide text-xl w-1/2'>
          Get the best deals by bidding on high-demand items in real time. Our
          auction system lets you compete fairly, securely, and transparently —
          right from your phone or desktop.
        </p>
        <button className='bg-blue-800 text-sky-200 py-3 px-8 rounded-full cursor-pointer hover:bg-blue-500 transition duration-300'>
          Join an Auction Now
        </button>
      </div>
    </div>
  );
}

export default AuctionCard