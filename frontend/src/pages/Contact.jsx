import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsLetterBox from '../components/NewsLetterBox'

const Contact = () => {
  return (
    <div>
     <div className='text-center text-2xl pt-10 border-t'>
     <Title text1={"Contact"} text2={"Us"}/>
     </div>
     <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-20'>
      <img src={assets.contact_img} className='w-full md:max-w-[480px]' alt="" />
      <div className='flex flex-col justify-center items-start gap-6'>
       <p className='font-semibold text-xl text-gray-600'>Our Store</p>
       <p className='text-gray-600'>80a, Mumbai CST East <br /> 234A , Maharastra, India</p>
       <p className='text-gray-600'>Tel: +91- 999999999 <br /> Email:muj@gmail.com</p>
       <p className='text-gray-600'>Careers at MUJ</p>
       <p className='text-gray-600'>Learn about more our teams and at forever</p>
       <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore jobs</button>


      </div>
     </div>
     <NewsLetterBox/>
    </div>
  )
}

export default Contact
