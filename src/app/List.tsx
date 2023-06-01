import React from 'react'
import Image from 'next/image'
import iconList from '@/assets/images/icon-list.svg'

type ListMsg = {
    text: string
}

export default function List(props:ListMsg) {
  return (
    <div className="flex items-center gap-4">
    <Image src={iconList} alt={''}/>
    <p className="text-sm">{props.text}</p>
 
   
     
    </div>
  )
}