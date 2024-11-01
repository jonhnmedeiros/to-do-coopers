import { Dialog } from "@headlessui/react"

interface SignUpProps {
  handleSignIn: () => void;
  handleSignInBtn: () => void;
}

export const SignUp = ({handleSignIn, handleSignInBtn}: SignUpProps) => {
  return (
    <div className="mt-3 sm:mt-0 sm:ml-4 text-left font-['Montserrat']">
      <Dialog.Title as="h3" className="text-lg font-medium leading-6 text-gray-900">
      {/* <div id="call-to-action" className="md:mt-[52px] w-full md:w-fit text-center md:text-left"> */}
        <p className="font-bold leading-[44px] sm:pt-[45px] lg:leading-[64px] text-[48px] lg:text-[80px]">Sign Up</p>
        <p className="leading-[32px] lg:leading-[64px] lg:mt-2 text-[28px] lg:text-[48px] text-green-500">to start using list</p>
      </Dialog.Title>
      <div className="mt-5 md:mt-[84px]">
      <form className="flex md:w-[342px] flex-col font-semibold text-[24px]">
        <label htmlFor="name">Name:</label>
        <div className="rounded-[10px] border border-solid border-[#959595] p-2"><input type="text" id="name" name="name"  placeholder="your name" /></div>
        <label htmlFor="email" className="mt-[15px] md:mt-[30px]">User:</label>
        <div className="rounded-[10px] border border-solid border-[#959595] p-2">
          <input type="email" id="email" name="email" placeholder="user@mail.com" />
        </div>
        <label htmlFor="password" className="mt-[15px] md:mt-[30px]">Password:</label>
        <div className="rounded-[10px] border border-solid border-[#959595] p-2">
          <input type="password" id="password" name="password" placeholder="xxxxxxx" />
        </div>
        <button
          type="button"
          className="font-semibold mx-auto mt-8 md:mt-14 leading-[29px] text-white text-2xl w-[300px] h-16 bg-green-500"
          onClick={handleSignInBtn}
        >
          Sign up
        </button>
      </form>
      <p className="text-sm md:w-[342px] mt-5 mb-3 text-center">
        Already have an account? please 
        <button
          onClick={handleSignIn}
          className="text-green-500 font-semibold underline ml-1"
        > 
          Sign in
        </button>.
      </p>
      </div>
    </div>
  )
} 