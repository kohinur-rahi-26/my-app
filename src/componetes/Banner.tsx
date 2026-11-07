import React from 'react';

const Banner = () => {
    return (
        <div className="hero  container mx-auto bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <img
      alt="Tailwind CSS hero component"
      src="/assets/banner.png"
      className="max-w-sm rounded-lg shadow-2xl"
    />
    <div>
      <h4 className='text-[#C2F800]'>WORKOUT LIBRARY</h4>
      <h1 className="text-5xl font-bold">TRAIN WITH INTENT. LOG <br />EVERY SET.</h1>
      <p className="py-6">
        FitLog is a dark, no-nonsense gym companion: pick a lift, lock it <br/>
into today's plan, and watch the week's work add up.
       
      
      </p>
      <button className="btn btn-primary bg-[#C2F800] text-black px-4 py-2 rounded-lg">BROWSE WORKOUTS</button>
    </div>
  </div>
</div>
    );
};

export default Banner;