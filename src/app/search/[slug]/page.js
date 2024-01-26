import Image from 'next/image'
import React from 'react'
import Navback from './navBack'

const getData = async (id) => {
    const res = await fetch(`https://dummyjson.com/products/${id}`)
    return res.json()
}

export default async function DetailProduct({params}) {
  
    const data = await getData(params.slug)
    
    return (
    <>
        <Navback />
        <div className='w-60 rounded-sm mt-5 flex flex-col bg-white shadow-lg'>
            <div 
                className='rounded-sm w-60 h-36 bg-cover bg-center bg-no-repeat' 
                style={{backgroundImage:`url(${data.thumbnail})`}} 
            />
            <div className='p-2'>
                <p className='text-sm'>{data.title}</p>
                <p className='text-xs mt-2'>{data.description}</p>
            </div>
        </div>
    </>
  )
}
