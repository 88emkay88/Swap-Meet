import React from 'react'

const AuctionCard = () => {
  return (
    <div className="m-10 pb-5 bg-sky-300 rounded-2xl md:flex justify-center items-center shadow-xl md:h-140">
      <img
        className="md:w-1/2 md:h-140 md:rounded-l-2xl md:translate-y-2.5 translate-y-0 rounded-t-2xl md:rounded-tr-none"
        src="/src/assets/images/Auction.jpg"
        alt="Auction elements"
      />

      <div className='text-center px-5 flex flex-col items-center space-y-3 lg:space-y-10'>
        <h1 className='md:text-4xl text-2xl font-bold mt-4'>Bid. Win. Save.</h1>
        <p className='tracking-wide md:text-xl md:w-1/2'>
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