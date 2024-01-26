"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function Navback() {

    const router = useRouter()

    return (
    <button 
        onClick={() => router.back()} 
        type='button' 
        className='bg-sky-500 text-white p-2 w-fit rounded-sm text-sm'>
        Back
    </button>
  )
}
