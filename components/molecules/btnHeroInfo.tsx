import React from 'react'
type btn_props = {
    title: string;
  
}
export default function BtnHeroInfo({title }) {
  return (
    <div className='px-4 inline-block py-2 text-white bg-transparent border border-[#D2D2D2] rounded-[20px]'>{title}</div>
  )
}
