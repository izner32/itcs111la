import Image from 'next/image';


function About(props) {
  return (
    <>
    <div className="bg-blue-100">
      <div className="w-[50%] mx-auto py-16 sm:pt-22 md:pt-27 lg:pt-32">
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-14">
          <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold ">About me</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light italic">yes, me - we couldn't think of a subheadline :(</p>
        </div>
        <div className="">
          <div className="flex flex-col-reverse lg:flex-row mb-8">
            <div className="w-[80%] lg:w-[50%] flex flex-col justify-center mx-auto text-center lg:text-left">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">General</h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">{props.general}</p>
            </div>
            <div className="w-[50%] mx-auto mb-4 lg:mb-0">
              <img className="" src="/general.svg"></img>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row-reverse mb-8">
            <div className="w-[80%] lg:w-[50%] flex flex-col justify-center mx-auto text-center lg:text-right">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">Education</h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">{props.education}</p>
            </div>
            <div className="w-[50%] mx-auto mb-4 lg:mb-0">
              <img className="" src="/education.svg"></img>
            </div>
          </div>
          <div className="flex flex-col-reverse lg:flex-row mb-8">
            <div className="w-[80%] lg:w-[50%] flex flex-col justify-center mx-auto text-center lg:text-left">
              <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold mb-4">Interest</h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg">{props.interest}</p>
            </div>
            <div className="w-[50%] mx-auto mb-4 lg:mb-0">
              <img className="" src="/interest.svg"></img>
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default About;