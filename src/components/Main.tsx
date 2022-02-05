import Image from 'next/image';
import { useRouter } from 'next/router'

function Main(props) {
  const router = useRouter()
  
  return (
    <>

      <div className="bg-blue-300 flex flex-col md:flex-row p-16 justify-center">
        <div className="mx-auto md:mx-0 mb-8 md:mb-0">
          <div 
            className="p-16 md:p-32 rounded md:mr-8 w-12"
            style={{  
                backgroundImage: "url(" + `${props.img}` + ")",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
              }}
          ></div>
        </div>
        <div className="w-[80%] md:w-[40%] text-center my-auto mx-auto md:mx-0">
          <p className="font-base italic text-xs sm:text-base md:text-lg lg:text-xl ">Hello, it's me</p>
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-4 ">{props.name}</h1>
          <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-6">{props.description}</p>
          <button className="text-xs sm:text-sm md:text-base lg:text-lg transition ease-in-out delay-150 hover:-translate-y-1 bg-blue-500 hover:bg-blue-700 p-2 px-4 rounded text-white duration-300" onClick={() => router.push(props.li)}>Connect with me on LinkedIn!</button>
        </div>
      </div>
    </>
  )
}

export default Main;