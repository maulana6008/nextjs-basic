"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import useSWR from 'swr'

const fetcher = (url) => fetch(url).then(res=>res.json())

export default function Search() {
    
    const [search, setSearch] = useState('')
    const {data, isLoading, error} = useSWR(`https://dummyjson.com/products/search?q=${search}`, fetcher)

    return (
        <>
            <div>
                Search : 
                <input value={search} placeholder='Cari product...' onChange={(e) => setSearch(e.target.value)} />
                {isLoading && <div>Data lagi di cari...</div>}
                {error && <div>Terjadi Error</div>}
                {!isLoading && search && data.products.map(item =>
                    <ul key={item.id} style={{padding:'25px'}}>
                        <li>{item.title }</li>
                        <li>{item.description}</li>
                        <li><Link href={`/search/${item.id}`}>Detail</Link></li>
                    </ul>
                )}
            </div>
        </>
  )
}
