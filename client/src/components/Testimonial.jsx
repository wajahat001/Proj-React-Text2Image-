import React from 'react'
import { testimonialsData } from '../assets/assets'

const Testimonial = () => {
  return (
    <div className='flex flex-col items-center justify-center my-20 py-12 ' >
           <h1 className='text-3xl sm:text-4xl font-semibold mb-2' >Customer Testimonail</h1>
           <p className='text-gray-500 mb-12' >What out customers are saying</p>

           <div className='flex flex-wrap gap-6 ' >
            {testimonialsData.map((testimonial,index)=>(
                <div key={index} >
                    
                </div>
            ))}
           </div>
    </div>
  )
}

export default Testimonial