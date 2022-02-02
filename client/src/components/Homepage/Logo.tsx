import Image from 'next/image';
import styles from './logo.module.css';

function Logo() {
  return (
    <>
      <div className="my-16 md:my-32">
        <div className="w-[60%] mx-auto text-center flex flex-col items-center md:justify-center md:flex-row md:text-left mb-16">
          <div>
            <h1 className="font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-4"> Built for </h1>
            <h1 className="text-[0.65rem] sm:text-[0.70rem] md:text-xs lg:text-base mb-4">Final Project in ITCS111LA</h1>
          </div>
          <div className="md:ml-20">
              <img className="w-auto h-12 md:h-16 object-cover" src="https://www.dlsud.edu.ph/images/logo.png" alt="logo.png" width="400" height="100"></img>
          </div>
        </div>

        <div >
          <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center mb-8">Who are we?</h1>
        </div>
        <div className="overflow-hidden px-[18%] mx-auto flex flex-wrap justify-center">
          <div className="w-48 float-left m-4 ">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Albios, Shahid</h1>
            <p className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales tristique sapien, id lobortis odio convallis vitae</p>
            <a className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base">Explore →</a>
          </div>
          <div className="w-48 float-left m-4">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Albios, Shahid</h1>
            <p className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales tristique sapien, id lobortis odio convallis vitae.</p>
            <a className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base">Explore →</a>
          </div>
          <div className="w-48 float-left m-4">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Albios, Shahid</h1>
            <p className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales tristique sapien, id lobortis odio convallis vitae.</p>
            <a className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base">Explore →</a>
          </div>
          <div className="w-48 float-left m-4 ">
            <h1 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold">Albios, Shahid</h1>
            <p className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sodales tristique sapien, id lobortis odio convallis vitae.</p>
            <a className="text-[0.65rem] sm:text-xs md:text-sm lg:text-base">Explore →</a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Logo;