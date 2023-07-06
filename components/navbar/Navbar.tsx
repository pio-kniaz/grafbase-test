import React from 'react';
import Link from "next/link";
import Image from "next/image";

import { navLinks } from '@/const';
import { Button } from '@/components';

function Navbar() {
  return (
    <nav className="flexBetween px-5 py-5 border-nav-border border-b-2">
      <div className="flex-1 flexStart gap-10">
        <Link href='/'>
          <Image
            src='/logo.svg'
            width={116}
            height={43}
            alt='logo'
          />
        </Link>
        <ul className='xl:flex hidden text-small gap-7'>
          {navLinks.map((link) => {
            return (
              <Button variant='text' color='primary' size='small' href={link.href} key={link.key} className='py-0 px-0 font-normal'>{link.text}</Button>
            )
          })}
        </ul>
      </div>
      <Button variant='fill' color="secondary" size="small">
        Sign In
      </Button>
    </nav>
  )
}

export default Navbar