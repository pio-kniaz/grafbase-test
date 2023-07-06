import React from 'react'
import { Button } from '@/components';
import Image from 'next/image';

function Footer() {
  return (
    <footer className="bg-slate-50 px-8 py-6">
      <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0'>
        <Image
          src='/logo-purple.svg'
          width={116}
          height={43}
          alt='logo'
        />
      </Button>
      <p className="text-start text-sm font-normal mt-5 max-w-xs">Flexibble is the world's leading community for creatives to share, grow, and get hired.</p>
      <ul className="flex flex-wrap gap-10 justify-between mt-5">
        <div className='flex flex-col gap-2 font-normal'>
          <div className='flex-1 flex flex-col gap-3'>
            <h4 className="font-semibold">Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

          </div>
        </div>
        <div className='flex flex-col gap-2 font-normal'>
          <div className='flex-1 flex flex-col gap-3'>
            <h4 className="font-semibold">Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

          </div>
          <div className='flex-1 flex flex-col gap-3'>
            <h4 className="font-semibold">Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

          </div>
        </div>
        <div className='flex flex-col gap-2 font-normal'>
          <div className='flex-1 flex flex-col gap-3'>
            <h4 className="font-semibold">Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

          </div>
        </div>
        <div className='flex flex-col gap-2 font-normal'>
          <div className='flex-1 flex flex-col gap-3'>
            <h4 className="font-semibold">Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

          </div>
          <div className='flex-1 flex flex-col gap-3'>
            <h4 className="font-semibold">Lorem ipsum dolor sit.</h4>
            <p>Lorem ipsum dolor sit amet.</p>
            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

          </div>
        </div>
        <div className='flex flex-col gap-2 font-normal'>
          <div className='flex-1 flex flex-col gap-3'>
            <h4 className="font-semibold">Lorem ipsum dolor sit.</h4>
            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>
            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

            <Button variant='text' color='primary' size='small' href="/" className='py-0 px-0 font-normal'>Lorem ipsum dolor sit amet.</Button>

          </div>
        </div>
      </ul>
    </footer>
  )
}

export default Footer