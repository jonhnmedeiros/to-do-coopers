'use client'

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";

import { Fragment, useRef, useState } from 'react'
import { Dialog, Transition, DialogPanel, TransitionChild } from '@headlessui/react'
import Image from 'next/image'
import { useCustomEventListener } from 'react-custom-events'
import { SignIn } from '../components/SignIn'
import { SignUp } from '../components/SignUp'
import Head from 'next/head'
import { Header } from '../components/layout/Header'
import { TodoListSection } from '../components/layout/TodoListSection'
import { GoodThingsSection } from '../components/layout/GoodThingsSection'
import  Footer  from '../components/Footer'
import ContactForm from '@/components/ContactForm'


export default function Home() {
  const { status } = useSession();
  const router = useRouter();

  const showSession = () => {
    if (status === "authenticated") {
      return (
        <button
          className="border border-solid border-black rounded"
          onClick={() => {
            signOut({ redirect: false }).then(() => {
              router.push("/");
            });
          }}
        >
          Sign Out
        </button>
      )
    } else if (status === "loading") {
      return (
        <span className="text-[#888] text-sm mt-7">Loading...</span>
      )
    } else {
      return (
        <Link
          href="/login"
          className="border border-solid border-black rounded"
        >
          Sign In
        </Link>
      )
    }
  }

  const [openDialog, setOpenDialog] = useState(false)
  const [isSignUp, setIsSignUp] = useState(false)

  

  const userInput = useRef(null)

  useCustomEventListener('open-dialog', () => {
    setOpenDialog(true)
  })
  return (
    
    <div className="flex flex-1 flex-col max-w-[1440px] mx-auto font-['Montserrat']">
      {showSession()}
      <Head>
        <meta name="viewport" content="initial-scale=1.0, maximum-scale=1.0, user-scalable=no" />
      </Head>
      <Transition show={openDialog} as={Fragment}>
        <Dialog className="relative z-10" initialFocus={userInput} onClose={setOpenDialog}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900 bg-opacity-75 transition-opacity" />
          </TransitionChild>

          <div className="fixed inset-0 z-10 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center sm:p-0">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enterTo="opacity-100 translate-y-0 sm:scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              >
                <DialogPanel
                  className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:min-h-[320px] sm:mx-2 sm:max-w-[932px]"
                >
                  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                    <div className="text-right">
                      <button className="bg-white font-bold text-[20px]"  onClick={() => setOpenDialog(false)}>close</button>
                    </div>
                    <div className="sm:flex sm:items-start">
                      <div className="sm:ml-[52px] hidden sm:block h-12 w-18 items-center justify-center sm:h-10 ">
                        <Image src="/bg-modal.svg" alt="Icon email" width={231} height={231} />
                      </div>
                      {
                        !isSignUp ?
                        <SignIn
                          handleSignUpBtn={() => setIsSignUp(true)}
                          handleSignIn={() => {
                            setIsSignUp(false)
                          }} 
                        /> :
                        <SignUp
                          handleSignInBtn={() => setIsSignUp(false)}
                          handleSignIn={() => {
                            setIsSignUp(false)
                          }} 
                        />
                      }
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
      <Header />
      
      <main className=" flex flex-1 flex-col text-center">
        
        <section id="todo-list">
        <TodoListSection />
        </section>        
        <GoodThingsSection />

      </main>
      <section id="contact" className='flex w-full justify-center'>
          <ContactForm />
      </section>
      <Footer />
    </div>
  )
}
