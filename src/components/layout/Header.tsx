import Image from 'next/image'

import { signOut, useSession } from "next-auth/react";
import { FaSignInAlt, FaSignOutAlt} from 'react-icons/fa'
import { emitCustomEvent } from 'react-custom-events'
import { Button } from '../Button'

export const Header = () => {
  const { status } = useSession();
  return (
    <header className="flex flex-col pt-6 bg-none bg-right md:bg-[350px] md:bg-[url('/bg-hero.png')] md:bg-no-repeat lg:bg-right">
      <div id="main-header" className="flex justify-between w-full px-2 lg:px-0 mx-auto max-w-[1280px]">
        <h1>
          <Image src="/logo-coopers.svg" alt="logo with coopers text and a green left angular bracket" width={217} height={50} />
        </h1>
        {status === "authenticated" && (
          <>
            <button
              className="bg-black hidden md:block text-white w-[120px] h-10 text-sm leading-[21px] pt-[9px] pb-[10px] pl-10 pr-[35px]"
              onClick={() => signOut({ redirect: false })}
            >
              logout
            </button>
            <button
              className="bg-black md:hidden text-white text-center rounded h-10 text-md leading-[21px] px-4 pt-[5px] pb-[5px]"
              onClick={() => signOut({ redirect: false })}
            >
              <FaSignOutAlt />
            </button>
          </>

        )}
        {status == "loading" && (
          <p>Loading...</p>
        )}
        {status !== "authenticated" && (
          <>
                    <button
          className="bg-black md:hidden text-white text-center rounded h-10 text-md leading-[21px] px-4 pt-[5px] pb-[5px]"
          onClick={() => emitCustomEvent('open-dialog')}
        >
          <FaSignInAlt />
        </button>

        <button
          className="bg-black hidden md:block text-white w-[120px] h-10 text-sm leading-[21px] pt-[9px] pb-[10px] pl-10 pr-[35px]"
          onClick={() => emitCustomEvent('open-dialog')}
        >
          login
        </button>
          </>
        )}

      </div>

      <div id="hero" className="flex justify-between w-full px-1 mx-auto max-w-[1280px] mt-[52px]">
        <div id="call-to-action" className="md:mt-[52px] w-full md:w-fit text-center md:text-left">
          <p className="font-bold leading-[64px] text-[60px] lg:text-[80px]">Organize</p>
          <p className="font-regular leading-[44px] lg:leading-[64px] lg:mt-2 text-[40px] lg:text-[60px] text-green-500">your daily jobs</p>
          <p className="font-semibold text-xl lg:text-2xl leading-6 mt-7 lg:mt-14">the only way to get things done</p>
          <Button text="Go to To-do list" extraClasses="mt-7 md:mt-11 bg-green-500" onClick={()=> alert('hi')} />
        </div>
        <div id="hero-image" className="hidden md:block">
          <Image src="/hero-slide.png" alt="Room with 3 chairs and one television" width={443} height={481} />
        </div>
      </div>
      <div id="scroll-down" className="w-full flex justify-center mt-[45px] pb-[30px]">
        <Image src="/arrow-down.svg" alt="Gray arrow pointing down" width={30} height={18} />
      </div>
    </header>
  )
}