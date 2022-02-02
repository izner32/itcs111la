import Image from 'next/image';
import styles from './stats.module.css';

function Stats() {
  return (
    <>
      <div
        className="w-full p-16 md:p-32"
        style={{  
            backgroundImage: "url(" + "BG.png" + ")",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
          }}>
        <div className="w-[50%] mx-auto">
          <div className="text-center mb-8">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl">Some&nbsp;info&nbsp;that&nbsp;matters</h1>
            <p className="text-[0.65rem] sm:text-[0.70rem] md:text-xs lg:text-base ">About us depicted in numbers</p>
          </div>
          <div className="flex text-center">
            <div className="mx-auto">
              <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">4</p>
              <p className="text-[0.70rem] sm:text-xs md:text-sm lg:text-base">Members</p>
            </div>
            <div className="border-black border-r-[1px] mx-4"></div>
            <div className="mx-auto">
              <p className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl">20</p>
              <p className="text-[0.65rem] sm:text-[0.70rem] md:text-xs lg:text-base">Average age of the members</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Stats;