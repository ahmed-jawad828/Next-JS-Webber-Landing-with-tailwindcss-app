import React from 'react'
import Header from '../Header'

const CaseStudies = ({ open, setOpen }: { open: any, setOpen: any }) => {
  return (
    <div className='flex flex-col justify-center ' style={{ width: "100vw" }}>
      <div className="bg-gradient-to-b from-cyan-200 to-transparent max-h-screen">
        <Header open={open} setOpen={setOpen} />
        <div className=' flex flex-col items-center justify-center mt-20'>
          <div className='tracking-tighter text-8xl font-extrabold w-4/6 text-center text-gray-800'>
            CASE STUDIES
          </div>
          <p className='w-5/12 text-xl font-normal text-gray-600 text-center pt-5'>See how leading organizations and freelance developers have used Webber to tackle different use cases and get ahead of the competition</p>
         <div>
           
         </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies