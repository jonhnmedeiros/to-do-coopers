"use client";
import { DialogTitle } from "@headlessui/react"
import { FormEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { emitCustomEvent } from 'react-custom-events';

interface SignInProps {
  handleSignIn: () => void;
  handleSignUpBtn: () => void;
}

export const SignIn = ({handleSignUpBtn}: SignInProps) => {
  const [error, setError] = useState("");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const res = await signIn("credentials", {
      email: formData.get("email"),
      password: formData.get("password"),
      redirect: false,
    });
    if (res?.error) {
      setError(res.error as string);
    }
    if (res?.ok) {
      emitCustomEvent('close-dialog');
    }
  };
  
  
  return (
    <div className="mt-3 sm:mt-0 sm:ml-4 text-left font-['Montserrat']">
      <DialogTitle as="h3" className="text-lg font-medium leading-6 text-gray-900">
      {/* <div id="call-to-action" className="md:mt-[52px] w-full md:w-fit text-center md:text-left"> */}
        <p className="font-bold leading-[44px] sm:pt-[45px] lg:leading-[64px] text-[48px] lg:text-[80px]">Sign in</p>
        <p className="leading-[32px] lg:leading-[64px] lg:mt-2 text-[28px] lg:text-[48px] text-green-500">to access your list</p>
      </DialogTitle>
      <div className="mt-5 md:mt-[84px]">
      <form 
        className="flex md:w-[342px] flex-col font-semibold text-[24px]"
        onSubmit={handleSubmit}>
        {error && <div className="text-red-500 mb-1">{error}</div>}
        <label htmlFor="email">User:</label>
        <div className="rounded-[10px] border border-solid border-[#959595] p-2">
          <input type="email" id="email" name="email" placeholder="user@mail.com" />
        </div>
        <label htmlFor="password" className="mt-[30px]">Password:</label>
        <div className="rounded-[10px] border border-solid border-[#959595] p-2">
          <input type="password" id="password" name="password" placeholder="xxxxxxx" />
        </div>
        <button
          type="submit"
          className="font-semibold mx-auto mt-8 md:mt-14 leading-[29px] text-white text-2xl w-[300px] h-16 bg-green-500"
        >
          Sign in
        </button>
      </form>
      <p className="text-sm md:w-[342px] mt-5 mb-3 text-center">
        Don&apos;t have an account? please
        <button
          className="text-green-500 font-semibold underline ml-1"
          onClick={handleSignUpBtn}
        >
          Sign up
        </button>.
      </p>
      </div>
    </div>
  )
} 