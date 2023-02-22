import React from 'react'
import terminal from "../assets/terminal.png"

const Developers = () => {
  return (
      <div className='w-full text-white bg-black'>
          <div className='max-w-[1240px] mx-auto  p-12 md:flex justify-center items-center'>
              <div className='md:max-w-[70%]'>
                  <h1>Superpower for Defi Developers</h1>
                  <p>Lorem ipsum dolor sit amet consectetur <a href='/' className='text-teal-600' >adipisicing</a>  elit. voluptas<a href='/' className='text-teal-600'>Reprehenderit</a>  odio cumque ad minima, nobis   tenetur hic est iste tempora?</p>
              </div>
              <div className='w-[350px] md:w-[300px] mx-auto mt-16 shadow-cyan-500/50 shadow-xl '>
                  <img src={terminal} alt="/"  />
              </div>
          </div>
    </div>
  )
}

export default Developers