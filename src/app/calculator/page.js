"use client"
import React, { useEffect, useState } from 'react'

export default function Calculator() {
    
    const [angka1, setAngka1] = useState(0)
    const [angka2, setAngka2] = useState(0)
    const [hasil, setHasil] = useState(0)
    useEffect(() => {
        console.log('oke')
        setHasil(angka1*angka2)
    },[angka1,angka2])

    return (
    <>
        <div>Calculator Kali Kali an :</div>
        <form>
            <input value={angka1} onChange={(e) => setAngka1(e.target.value)} />
            <input value={angka2} onChange={(e) => setAngka2(e.target.value)} />
            <p>Hasil : {hasil}</p>
        </form>
    </>
  )
}
