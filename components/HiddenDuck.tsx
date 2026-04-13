import Image from 'next/image'
import React from 'react'
import { Tooltip, TooltipContent, TooltipTrigger } from './ui/tooltip'

export default function HiddenDuck() {
  return (
    <div
      className="container flex flex-col items-center gap-2 justify-center mx-auto mt-17"
    >
        <Tooltip delayDuration={300}>
            <TooltipTrigger>
                <Image 
                    src={'/duck.webp'} 
                    alt='hidden duck' 
                    height={20} 
                    width={20} 
                    className='opacity-0 hover:opacity-100 transition-opacity duration-300 cursor-pointer'
                />
            </TooltipTrigger>
            <TooltipContent>
                <p>You found the hidden duck! congratulations!</p>
            </TooltipContent>
        </Tooltip>
    </div>
  )
}
