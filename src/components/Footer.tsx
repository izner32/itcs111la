import Image from 'next/image';


function Footer() {
  return (
    <>
      <div className="px-8 sm:px-16 md:px-24 lg:px-32 py-6 font-light text-white text-sm sm:text-base flex flex-col text-center  md:flex-row md:justify-between bg-ironside-gray-500">
        <ul className="flex justify-center text-[0.60rem] sm:text-sm">
          <li className="mr-4">
            <a className="hover:text-black" href="/">Home</a>
          </li>
          <li className="mr-4">
            <a className="hover:text-black" href="/devs/albios">Albios</a>
          </li>
          <li className="mr-4">
            <a className="hover:text-black" href="/devs/carillo">Carillo</a>
          </li>
          <li className="mr-4">
            <a className="hover:text-black" href="/devs/delgado">Delgado</a>
          </li>
          <li className="mr-4">
            <a className="hover:text-black" href="/devs/waje">Waje</a>
          </li>
        </ul>
        <div className="text-[0.60rem] font-light sm:text-sm">
          <p>© DLSUDevs. All rights reserved </p>
        </div>
      </div>
    </>
  )
}

export default Footer;