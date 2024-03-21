import Image from 'next/image';
import React from 'react'

const Module = ({ name, code } : any) => {
  return (
    <div className="relative">
      <Image src="/image/certificado-1.jpg" alt="Image" className="w-full h-full" width={800} height={800}/>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <p className="text-black text-lg">{name}</p>
        <p className="text-white text-sm">{code}</p>
      </div>
    </div>
  )
}

export default Module;