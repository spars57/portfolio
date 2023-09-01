import React from 'react';
import { Navigation } from './components/navigation';
export const PhotographPortfolioProject = () => {
  return (
    <>
      <Navigation />
      <div className="grid grid-cols-1 p-2  md:grid-cols-2 place-items-center font-sans">
        <div className="flex flex-col text-left">
          <div className="text-4xl">Jade Ottilie</div>
          <div className="text-md mt-2">
            A French Photographer based on Marseille, France 🇫🇷
          </div>
          <div className="text-md mt-10">
            “Photography is by nature a documentary art.” – August Sander.
          </div>
          <div className="flex flex-row text-md mt-10 items-center">
            <img
              className="w-4"
              src="https://www.svgrepo.com/show/521711/instagram.svg"
            />
            <div
              onClick={() => {
                window.open(
                  'https:/instagram.com/jade.ottilie.photographer',
                  '_blank'
                );
              }}
              className="ml-2 opacity-75 hover:opacity-100"
            >
              @jade.ottilie.photographer
            </div>
            <img
              className="w-4 ml-1 mt-1"
              src="https://www.svgrepo.com/show/325741/verified-badge.svg"
            />
          </div>
        </div>
        <img
          className="w-full mt-10  md:m-0"
          src="https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        />
      </div>

      {/* <img src="https://wallpaperaccess.com/full/27982.jpg" className="w-1/2" /> */}
    </>
  );
};
