import React from 'react'
import { Link } from 'react-router-dom'

const NAV_LINKS = [
  {
    name: 'Home',
    linkPath: '',
  },
  {
    name: 'About',
    linkPath: '',
  },
  {
    name: 'Contact',
    linkPath: '',
  },
  {
    name: 'Portfolio',
    linkPath: '',
  },
]

export default function MobileMenu({ setMenuShow }) {
  const HandleClose = () => {
    setMenuShow(false)
  }

  return (
    <div className='absolute right-0 top-0 bg-black w-[300px] text-white py-10 px-5 animation'>
      <span
        className='absolute top-7 right-7'
        onClick={HandleClose}
      >
        close
      </span>
      <div>
        <ul className='flex flex-col gap-6 pl-10 mt-10'>
          {NAV_LINKS.map((item, index) => (
            <li
              key={index}
              className='font-semibold'
            >
              <Link to={item.linkPath}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
