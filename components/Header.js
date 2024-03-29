import Image from 'next/image'
import React from 'react'
import {
    SearchIcon, PlusCircleIcon,
    UserGroupIcon, HeartIcon,
    PaperAirplaneIcon, MenuIcon, LoginIcon
} from '@heroicons/react/outline'
import {HomeIcon} from '@heroicons/react/solid'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { modalState } from '../atoms/modalAtom'

function Header() {
    const {data: session} = useSession()
    const [open, setOpen] = useRecoilState(modalState)
    const router = useRouter()

  return (
    <div className='shadow-sm border-b bg-white sticky top-0 z-50'>
    <div className='flex justify-between max-w-5xl mx-5 md:mx-auto'>

    {/* Left */}
    <div onClick={() => router.push('/')} className='relative hidden lg:inline-grid w-24 cursor-pointer'>
        <Image 
            src='https://links.papareact.com/ocw'
            layout='fill'
            objectFit='contain'
        />
    </div>

    <div className='relative w-10  lg:hidden flex-shrink-0 cursor-pointer'>
        <Image 
            src='https://links.papareact.com/jjm'
            layout='fill'
            objectFit='contain'
        />
    </div>

    {/* Middle - Search Input Field*/}
    <div className='max-w-xs'>
    <div className='relative mt-1 p-3 rounded-md'>
    <div className='absolute inset-y-0 pl-3 flex items-center pointer-events-none'>
    <SearchIcon className='h-5 w-5 text-gray-500'/>
    </div>
    <input className='bg-gray-50 block w-full sm:text-sm border-gray-300
     focus:ring-black focus:border-black pl-10 rounded-md' 
     type='text' placeholder='Search' />
    </div>
    </div>

    {/* Right */}
    <div className='flex items-center justify-end space-x-4'>
    <HomeIcon onClick={() => router.push('/')} className='navBtn'/>
    <MenuIcon className='h-6 md:hidden cursor-pointer'/>

    {session ? 
    (
    <>
    <div className='relative navBtn'>
    <PaperAirplaneIcon className='navBtn rotate-45'/>
    <div className='absolute bg-red-500 rounded-full flex
     items-center justify-center -top-1 -right-2 text-xs text-white animate-pulse w-5 h-5'>3</div>
    </div>

    <PlusCircleIcon onClick={() => setOpen(true)} className='navBtn'/>
    <UserGroupIcon className='navBtn'/>
    <HeartIcon className='navBtn'/>

    <img src={session.user?.image}
        onClick={signOut}
        alt='Profile pic'
        className='w-10 h-10 rounded-full cursor-pointer'
    />
    </>
    ): 
    (
        <div>
        <button onClick={signIn} className='hidden md:text-base md:flex'>Sign In</button>
        <button onClick={signIn} className='md:hidden flex'>
        <LoginIcon className='flex navBtn'/>
        </button>
        </div>
    )}
    
    </div>
    </div>
    </div>
  )
}

export default Header