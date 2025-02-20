import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'motion/react'

const About = () => {
  return (
    <motion.div
    initial={{opacity:0, x:100}}
    transition={{duration:1,}}
    whileInView={{opacity:1, x:0}}
    viewport={{once:true}}
    className='flex flex-col items-center justify-center container mx-auto p-14 md:px-20 lg:px-32 w-full overflow-hidden' id='About' >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2'>About <span className='underline underline-offset-4 decoration-1 under font-light'>Our Brand</span></h1>
      <p className='text-gray-500 max-w-80 text-center mb-8'>Passionate About Properties, Dedicated to Your Vision</p>
      <div className='flex flex-col lg:flex-row items-center md:items-start md:gap-20
      '>
        <img src={assets.brand_img} alt="img here" className='w-full sm:-1/2 max-w-lg' />
        <div className='flex flex-col item-center md:items-start mt-10 text-gray-600'>

          <div className='grid grid-cols-2 gap-6 md:10 w-full 2xl:pr-28'>
            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>

              <p >years of Excellence</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>

              <p >Project completed</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>

              <p >Mn. Sq. Ft. Delivered</p>
            </div>
            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>

              <p >Ongoing Projects</p>
            </div>
          </div>
          <div>
            <p className='my-10 max-w-lg md:object-contain text-sm md:text-base lg:text-lg'>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ad temporibus dicta ut eligendi? Excepturi ea rerum quaerat. Minus necessitatibus corporis, praesentium sed sequi perferendis aliquid, minima veritatis sapiente cum quo sunt porro totam itaque! Autem dicta ipsa rerum et?
            </p>
            <button className='bg-blue-600 text-white px-8 py-2 rounded cursor-pointer'>Learn more</button>
          </div>

        </div>
      </div>
    </motion.div>
  )
}

export default About