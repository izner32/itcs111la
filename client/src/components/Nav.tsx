import Image from 'next/image';


function Nav() {
  return (
    <>
      <div className="px-32 py-4 sm:py-6 md:py-8 lg:py-10 lg:pb-12 text-center justify-between md:flex ">
        <div className="text-sm sm:text-base md:text-lg lg:text-xl mr-3 mb-4 md:mb-0">
          <a className="inline-block rounded py-1 px-3 font-bold" href="/">DLSUDevs</a>
        </div>
        <ul className="text-xs sm:text-sm md:text-base lg:text-lg flex justify-center">
          <li className="mr-3">
            <a className="inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="/">Home</a>
          </li>
          <li className="mr-3">
            <a className="inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="/devs/albios">Albios</a>
          </li>
          <li className="mr-3">
            <a className="inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="/devs/carillo">Carillo</a>
          </li>
          <li className="mr-3">
            <a className="inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="/devs/delgado">Delgado</a>
          </li>
          <li className="mr-3">
            <a className="inline-block rounded hover:border-gray-200 hover:bg-gray-200 py-1 px-3" href="/devs/waje">Waje</a>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Nav;