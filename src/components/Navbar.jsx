import React,{useState} from 'react'
import {AiOutlineMenu,AiOutlineClose} from "react-icons/ai"

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }
  return (
    <div className='w-full h-[90px] bg-black'>
      <div className='max-w-[1240px] mx-auto flex justify-between px-4 items-center h-full'>
        <div>
          <h1 className='text-[var(--primary-blue)]'>Defi</h1>
        </div>
        <div className='hidden sm:flex'>
          <ul className='flex text-white items-center'>
            <li>Platform</li>
            <li>Developers</li>
            <li>Community</li>
            <li>About</li>
            <button className=' ml-4'>Use Defi</button>
          </ul>
        </div>
        {/* hamburger icon */}
        <div onClick={handleNav} className='sm:hidden'>
          {nav ?<AiOutlineClose size={30} className='text-white' />:<AiOutlineMenu size={30} className='text-white' />}
          
          
        </div>
        {/* mobile menu */}
        <div className={nav ? 'sm:hidden absolute top-[90px] bg-black left-0 duration-300 w-full text-white flex justify-center  text-center' :
      "absolute left-[-100%] "}>
          <ul >
            <li className='text-xl'>Platform</li>
            <li className='text-xl'>Developers</li>
            <li className='text-xl'>Community</li>
            <li className='text-xl'>About</li>
            <button className='my-8 rounded-sm w-full'>Use Defi</button>
          </ul> 
        </div>
      </div>
    </div>
  )
}

export default Navbar