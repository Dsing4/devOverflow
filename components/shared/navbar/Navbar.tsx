import Link from 'next/link'
import React from 'react'
import Image from 'next/image' // Import the Image component from the correct package
import { SignedIn, UserButton } from '@clerk/nextjs'
import Theme from './Theme'

const navbar = () => {
  return (
    <nav className="flex-between background-light900_dark200 fixed z-50 w-full gap-5 p-6 shadow-light-300 dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image
          src="/assets/images/site-logo.svg"
          width={23}
          height={23}
          alt="Devflow"
        />
        <p className="h2-bold font-spaceGrotesk">
          Dev <span className="text-primary-500">Overflow</span>
        </p>
      </Link>
      {/* Global Search */}
      <div className="flex-between gap-5">
        <Theme />
        <SignedIn>
          <UserButton
            appearance={{
              elements: {
                avatarBox: 'h-10 w-10',
              },
              variables: {
                colorPrimary: '#ff7000',
              },
            }}
          />
        </SignedIn>
      </div>
    </nav>
  )
}

export default navbar
