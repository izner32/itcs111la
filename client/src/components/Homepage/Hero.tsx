import Image from 'next/image';
import styles from './hero.module.css';
import { useRouter } from 'next/router'

function Hero() {
  const router = useRouter()

  const randomChooser = () => {
    const dev_list = ['devs/albios', 'devs/carillo', 'devs/delgado', 'devs/waje'];
    const random_dev= dev_list[Math.floor(Math.random() * dev_list.length)]
    return router.push(random_dev)
  }

  return (
    <>
      <div id={styles.main_box} className="flex-col-reverse md:flex-row">
        <div id={styles.left_box} className="md:w-[60%]">
          <div id={styles.final_project} className="flex flex-col mx-auto my-16 text-left w-[80%] ">
            <h1 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-4">FINAL<br></br>PROJECT</h1>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            <button className="transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-ironside-gray-200 p-2 px-4 rounded text-white duration-300 bg-foggy-gray-500 p-3 rounded w-max text-xs sm:text-xs md:text-sm lg:text-base font-semibold" onClick={() => randomChooser()}>Randomly&nbsp;Meet&nbsp;One&nbsp;of&nbsp;Us!</button>
          </div>
        </div>

        <div className="w-[40%] ml-[50%] absolute top-0 h-32 right-0 bg-foggy-gray-500 hidden md:block">

        </div>
        <div className="md:w-[40%] z-10 bg-foggy-gray-500">
          <div className="hidden md:flex h-full">  
          <div className="img_1 ">
            <div 
              className="p-8 lg:p-10 relative right-10 top-20"
              style={{  
                  backgroundImage: "url(" + "User_1.svg" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
          </div>
          <div className="img_2 mx-auto">
            <div 
              className="p-6 lg:p-7 lg:p-8 relative top-[200px]"
              style={{  
                  backgroundImage: "url(" + "User_3.svg" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
          </div>
          <div className="img_3 mx-auto">
            <div 
              className="p-14 lg:p-16 relative top-20"
              style={{  
                  backgroundImage: "url(" + "User_2.svg" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
          </div>
          <div className="img_4 mx-auto">
            <div 
              className="p-10 lg:p-12  relative top-[250px]"
              style={{  
                  backgroundImage: "url(" + "User_4.svg" + ")",
                  backgroundPosition: 'center',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat'
                }}
            ></div>
          </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero;