'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import clsx from 'clsx'

export default function NavBar() {
  const [isOpen, setIsOpen] = useState(false)

  const handleOpen = () => {
    setIsOpen((prev) => !prev);
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Projects', href: '/projects' },
    { name: 'Contacts', href: '/contacts' },
  ]
  return (
    <div className='w-full h-full'>
        <div className='md:flex flex-1 justify-between hidden sm:block '> 
            <h1 className='font-bold text-2xl'>Clarence Laria</h1>
            <div className='flex space-x-10'>
              {links.map((link)  => (
                <Link key={link.name} href={link.name} className=''><h1>{link.name}</h1></Link>
              ))}
            </div>
        </div>
        <div className='sm:hidden block relative'>
          <div className='flex justify-between'>
            <h1 className='text-2xl font-bold '>Clarence Laria</h1>
            <div onClick={handleOpen}>
              <Bars3Icon className={clsx(`h-6 w-6`, isOpen && 'hidden')}/>
            </div>
          </div>
          <div className={clsx(`absolute top-0 w-full h-full items-center justify-center text-center bg-background`, !isOpen && 'hidden')}>
            <XMarkIcon onClick={handleOpen} className={clsx(`h-6 w-6 right-0 absolute`, !isOpen && 'hidden')}/>
            {links.map((link) => (
              <Link key={link.name} href={link.name} className='text-lg text-center items-center'><h1 className='my-5'>{link.name}</h1></Link>
            ))}
          </div>
        </div>
    </div>
  )
}
