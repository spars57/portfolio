import React from 'react';
import { Navigation } from './components/navigation';
export const PhotographPortfolioProjectWork = () => {
  return (
    <>
      <Navigation />
      <div className="items-start m-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center font-sans">
        <div className="flex flex-col items-center">
          <div>Flowers</div>
          <img
            src="https://images8.alphacoders.com/594/594870.jpg"
            className="p-1 w-full"
          />
          <img
            src="https://free4kwallpapers.com/uploads/originals/2017/06/16/beautiful-flower-wallpaper.jpg"
            className="p-1 w-full"
          />
          <img
            src="https://images.pexels.com/photos/56866/garden-rose-red-pink-56866.jpeg"
            className="p-1 w-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <div>Landscapes</div>
          <img
            src="https://images3.alphacoders.com/131/1318271.jpeg"
            className="p-1 w-full"
          />
          <img
            src="https://wallpaperaccess.com/full/1423589.jpg"
            className="p-1 w-full"
          />
          <img
            src="https://images3.alphacoders.com/673/673159.jpg"
            className="p-1 w-full"
          />
        </div>
        <div className="flex flex-col items-center">
          <div>Dogs</div>
          <img
            src="https://images2.alphacoders.com/132/1323820.png"
            className="p-1 w-full"
          />
          <img
            src="https://images6.alphacoders.com/132/1323832.png"
            className="p-1 w-full"
          />
          <img
            src="https://images6.alphacoders.com/907/907085.jpg"
            className="p-1 w-full"
          />
        </div>
      </div>
    </>
  );
};
