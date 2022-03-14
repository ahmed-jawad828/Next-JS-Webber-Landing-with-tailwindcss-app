import React, { useState } from 'react'
import Header from '../Header'

const CaseStudies = ({ open, setOpen }: { open: any, setOpen: any }) => {
  
  return (
    <div className='flex flex-col justify-center ' style={{ width: "100vw" }}>
      <div className="bg-gradient-to-b from-cyan-200 to-transparent max-h-screen">
        <Header open={open} setOpen={setOpen} />
        <div className=' flex flex-col items-center justify-center mt-20'>
          <div className='tracking-tighter text-2xl lg:text-8xl font-extrabold w-4/6 text-center text-gray-800'>
            CASE STUDIES
          </div>
          <p className='w-5/12 text-xl font-normal text-gray-600 text-center pt-5'>See how leading organizations and freelance developers have used Webber to tackle different use cases and get ahead of the competition</p>
          <div className=' mt-6 py-4 px-8 border-2 rounded'>
            <div className='flex flex-row gap-x-4'>
              <div className='flex flex-row justify-center items-center'>
                <div className='text-gray-600 text-base font-medium'>Region:</div>
                <button className='flex justify-center items-center pl-2  '>
                  <div>All</div>
                  <div>
                    <svg className=' w-4 pt-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="#27272A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div className='text-gray-600 text-base font-medium'>Industry:</div>
                <button className='flex justify-center items-center pl-2  '>
                  <div>All</div>
                  <div>
                    <svg className=' w-4 pt-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="#27272A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>
              <div className='flex flex-row justify-center items-center'>
                <div className='text-gray-600 text-base font-medium'>Type:</div>
                <button className='flex justify-center items-center pl-2  '>
                  <div>All</div>
                  <div>
                    <svg className=' w-4 pt-1' viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M4 6L8 10L12 6" stroke="#27272A" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex justify-center items-center my-10 '>
        <div className='grid grid-cols-2  gap-y-8 gap-x-20 '>
          <div className='flex flex-col max-w-md gap-y-2 mt-20 '>
            <div className='max-w-md'>
              <img src={'/Project Cover.png'} />
            </div>
            <div>
              <h4 className='text-zinc-600 font-medium text-sm'>Technology - SaaS</h4>
            </div>
            <div>
              <h2 className='text-4xl font-extrabold text-gray-800 '>
                Adobe Systems Inc
              </h2>
            </div>
            <div>
              <p className='text-gray-600 font-normal text-base  text-justify '>Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <div>
              <button className='flex items-center text-cyan-700 hover:text-red-500 justify-center'>
                <p>Read story</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col max-w-md gap-y-2 '>
            <div className='max-w-md'>
              <img src={'/Project Cover (1).png'} />
            </div>
            <div>
              <h4 className='text-zinc-600 font-medium text-sm'>Kanban Software</h4>
            </div>
            <div>
              <h2 className='text-4xl font-extrabold text-gray-800 '>
                Trello
              </h2>
            </div>
            <div>
              <p className='text-gray-600 font-normal text-base'>Learn how Adobe has leveraged Webber to consolidate it's diverse range of services software</p>
            </div>
            <div>
              <button className='flex items-center text-cyan-700 hover:text-red-500 justify-center'>
                <p>Read story</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col max-w-md gap-y-2 mt-20'>
            <div className='max-w-md'>
              <img src={'/Project Cover (2).png'} />
            </div>
            <div>
              <h4 className='text-zinc-600 font-medium text-sm'>Technology - SaaS</h4>
            </div>
            <div>
              <h2 className='text-4xl font-extrabold text-gray-800 '>
              Gutkowski, Schuppe and Pagac
              </h2>
            </div>
            <div>
              <p className='text-gray-600 font-normal text-base'>Learn how Adobe has leveraged Webber to consolidate it's diverse range of services software</p>
            </div>
            <div>
              <button className='flex items-center text-cyan-700 hover:text-red-500 justify-center'>
                <p>Read story</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col max-w-md gap-y-2 '>
            <div className='max-w-md'>
              <img src={'/Project Cover (3).png'} />
            </div>
            <div>
              <h4 className='text-zinc-600 font-medium text-sm'>Airline</h4>
            </div>
            <div>
              <h2 className='text-4xl font-extrabold text-gray-800 '>
              Swiss Airline
              </h2>
            </div>
            <div>
              <p className='text-gray-600 font-normal text-base'>Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <div>
              <button className='flex items-center text-cyan-700 hover:text-red-500 justify-center'>
                <p>Read story</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col max-w-md gap-y-2 mt-20'>
            <div className='max-w-md'>
              <img src={'/Project Cover (4).png'} />
            </div>
            <div>
              <h4 className='text-zinc-600 font-medium text-sm'>Technology - SaaS</h4>
            </div>
            <div>
              <h2 className='text-4xl font-extrabold text-gray-800 '>
                Adobe Systems Inc
              </h2>
            </div>
            <div>
              <p className='text-gray-600 font-normal text-base'>Learn how Adobe has leveraged Webber to consolidate it’s diverse range of services software</p>
            </div>
            <div>
              <button className='flex items-center text-cyan-700 hover:text-red-500 justify-center'>
                <p>Read story</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
          <div className='flex flex-col max-w-md gap-y-2 '>
            <div className='max-w-md'>
              <img src={'/Project Cover (5).png'} />
            </div>
            <div>
              <h4 className='text-zinc-600 font-medium text-sm'>Kanban Software</h4>
            </div>
            <div>
              <h2 className='text-4xl font-extrabold text-gray-800 '>
              Mann and Sons 
              </h2>
            </div>
            <div>
              <p className='text-gray-600 font-normal text-base'>Learn how Adobe has leveraged Webber to consolidate it's diverse range of services software</p>
            </div>
            <div>
              <button className='flex items-center text-cyan-700 hover:text-red-500 justify-center'>
                <p>Read story</p>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 pt-1" fill="currentColor" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CaseStudies



