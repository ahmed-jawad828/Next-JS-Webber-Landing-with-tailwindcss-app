import React from 'react'

const Footer = () => {
  return (
    <div className='h-96 bg-gray-100 flex justify-center items-center'>
      <div className='grid grid-cols-5 w-9/12'>
        <div className='col-span-2'>
          <div className='flex flex-col  items-start gap-y-8'>

            <button className=' '>
              <div className='flex justify-center '>

                <svg width="60px" viewBox="0 0 74 43" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M68.4275 4.86251C65.5951 2.02921 61.8254 0.32942 57.8277 0.0830343C53.8303 -0.163352 49.8806 1.06066 46.7221 3.52471C43.8379 1.2826 40.2895 0.0651642 36.6371 0.0644561C32.9846 0.063748 29.436 1.27981 26.5509 3.5208C23.2605 0.937403 19.1087 -0.291964 14.9431 0.0836796C10.7775 0.459321 6.91226 2.41165 4.13651 5.54207C1.36075 8.67251 -0.11621 12.745 0.0071491 16.928C0.130508 21.1111 1.84488 25.0894 4.80028 28.0506L14.8933 38.1509C14.9012 38.1585 14.909 38.1658 14.9178 38.1737C14.9266 38.1815 14.929 38.1852 14.9346 38.1908C14.9451 38.2013 14.9564 38.2108 14.9669 38.2213C15.1273 38.3802 15.2901 38.535 15.4555 38.6858C15.5405 38.7637 15.6265 38.8393 15.713 38.9153C15.7831 38.9764 15.8537 39.037 15.9245 39.0969C18.8016 41.5361 22.4301 42.9106 26.2003 42.9888C29.9708 43.0673 33.653 41.8451 36.629 39.5274C39.7875 41.9913 43.7373 43.2154 47.7347 42.969C51.7323 42.7226 55.502 41.0228 58.3344 38.1896L68.4277 28.0906C71.5017 25.008 73.2279 20.8312 73.2279 16.4765C73.2279 12.1219 71.5014 7.94513 68.4275 4.86251ZM36.6339 4.34235C39.0336 4.34081 41.3798 5.05166 43.3755 6.38489C45.3714 7.71813 46.9268 9.61381 47.8453 11.832C48.7639 14.0502 49.004 16.4913 48.5355 18.8461C48.0669 21.201 46.9107 23.3638 45.2131 25.0608L36.6339 33.6447L28.0545 25.0608C26.3569 23.3638 25.2006 21.2009 24.7321 18.8461C24.2635 16.4912 24.5037 14.0501 25.4222 11.8319C26.3408 9.61369 27.8964 7.718 29.8921 6.38479C31.888 5.05159 34.2342 4.34076 36.6339 4.34235ZM14.4074 26.5759C14.4031 24.9809 14.7149 23.4011 15.3249 21.9276C15.9349 20.4541 16.831 19.1164 17.9612 17.9917L20.2446 15.707C20.1341 17.9907 20.5024 20.2723 21.326 22.4051C22.1495 24.5377 23.41 26.4744 25.0265 28.0906L33.4302 36.4993C31.6175 37.7696 29.4912 38.5178 27.2828 38.6621C25.0746 38.8063 22.8689 38.3414 20.9066 37.3177C18.9442 36.2937 17.3004 34.7508 16.1543 32.8564C15.0082 30.9623 14.4038 28.7895 14.4069 26.5751L14.4074 26.5759ZM7.82783 25.0205C5.68036 22.8723 4.41615 19.9963 4.28494 16.9608C4.15373 13.9253 5.16504 10.9508 7.11911 8.62513C9.07318 6.29941 11.8279 4.79153 14.8391 4.39933C17.8504 4.00713 20.8991 4.75917 23.3831 6.50684L14.9332 14.9617C13.4041 16.4833 12.1919 18.2933 11.3666 20.2869C10.5414 22.2805 10.1195 24.418 10.1254 26.5759C10.1254 26.8306 10.1314 27.0843 10.1433 27.3373L7.82783 25.0205ZM46.7277 38.7153C44.2488 38.7212 41.8286 37.9615 39.7973 36.5399L48.2423 28.0906C49.8588 26.4744 51.1191 24.5377 51.9427 22.405C52.7662 20.2723 53.1346 17.9907 53.0242 15.707L55.3076 17.9917C57.0045 19.6896 58.1597 21.8527 58.6278 24.2076C59.0961 26.5624 58.8557 29.0034 57.9372 31.2216C57.0189 33.4399 55.4637 35.3358 53.4685 36.6696C51.4731 38.0035 49.1274 38.7153 46.7277 38.7153ZM65.3999 25.0608L63.1248 27.3373C63.1363 27.0845 63.1421 26.8308 63.1426 26.5759C63.1485 24.418 62.7266 22.2805 61.9014 20.2869C61.0761 18.2933 59.8637 16.4833 58.3347 14.9617L49.8906 6.51246C52.379 4.77984 55.4256 4.04218 58.4304 4.4447C61.4352 4.84719 64.1806 6.36072 66.126 8.68725C68.0713 11.0138 69.0756 13.9847 68.9412 17.0151C68.8069 20.0456 67.5436 22.9158 65.3999 25.0608Z" fill="#27272A" />
                </svg>
              </div>
              <p className="font-Mulish font-extrabold">WEBBER</p>


            </button>
            <div className=''>

              <p className='text-sm font-normal text-gray-600 pb-2'>Copyright © 2021 WEBBER.</p>
              <p className='text-sm font-normal text-gray-600'>All rights reserved</p>
            </div>
            <div>
              <button className='fill-black hover:text-cyan-400 transition duration-300'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg" stroke="currentColor">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M15.5208 13.0051L15.5544 13.5587L14.9948 13.4909C12.9579 13.2311 11.1784 12.3498 9.66756 10.8696L8.92891 10.1352L8.73865 10.6776C8.33575 11.8865 8.59316 13.1633 9.43253 14.022C9.8802 14.4965 9.77948 14.5643 9.00725 14.2819C8.73865 14.1915 8.50363 14.1237 8.48124 14.1576C8.4029 14.2367 8.6715 15.2648 8.88414 15.6716C9.17513 16.2365 9.76828 16.7902 10.4174 17.1178L10.9658 17.3777L10.3167 17.389C9.68994 17.389 9.66756 17.4003 9.73471 17.6376C9.95854 18.372 10.8427 19.1516 11.8276 19.4906L12.5214 19.7278L11.9171 20.0894C11.0218 20.6091 9.96973 20.9029 8.91772 20.9255C8.41409 20.9368 8 20.982 8 21.0159C8 21.1289 9.36538 21.7616 10.16 22.0102C12.5438 22.7446 15.3753 22.4282 17.5017 21.1741C19.0126 20.2815 20.5235 18.5076 21.2286 16.7902C21.6091 15.875 21.9896 14.2028 21.9896 13.4006C21.9896 12.8808 22.0232 12.813 22.6499 12.1916C23.0192 11.83 23.3662 11.4346 23.4333 11.3216C23.5452 11.1069 23.534 11.1069 22.9633 11.299C22.012 11.638 21.8777 11.5928 22.3477 11.0843C22.6947 10.7228 23.1088 10.0674 23.1088 9.87536C23.1088 9.84146 22.9409 9.89796 22.7506 9.99964C22.5492 10.1126 22.1015 10.2821 21.7658 10.3838L21.1614 10.5759L20.613 10.203C20.3108 9.99964 19.8856 9.77367 19.6617 9.70588C19.0909 9.5477 18.218 9.57029 17.7032 9.75107C16.3042 10.2595 15.4201 11.5702 15.5208 13.0051Z" />
                </svg>

              </button>
              <button className='fill-black hover:text-red-600 transition duration-300'>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M22.6677 10.4995C23.4021 10.701 23.9804 11.2948 24.1767 12.0488C24.5333 13.4153 24.5333 16.2666 24.5333 16.2666C24.5333 16.2666 24.5333 19.1178 24.1767 20.4845C23.9804 21.2385 23.4021 21.8322 22.6677 22.0338C21.3369 22.4 16 22.4 16 22.4C16 22.4 10.6631 22.4 9.33218 22.0338C8.59783 21.8322 8.0195 21.2385 7.82323 20.4845C7.46667 19.1178 7.46667 16.2666 7.46667 16.2666C7.46667 16.2666 7.46667 13.4153 7.82323 12.0488C8.0195 11.2948 8.59783 10.701 9.33218 10.4995C10.6631 10.1333 16 10.1333 16 10.1333C16 10.1333 21.3369 10.1333 22.6677 10.4995ZM14.4 13.8666V19.1999L18.6667 16.5333L14.4 13.8666Z" />
                </svg>

              </button>

            </div>
          </div>
        </div>
        <div className='col-span-3'>
          <div className='grid grid-cols-3 text-gray-800'>
            <div className='flex flex-col items-start gap-y-4'>
              <div className='text-xl font-medium'>Company </div>
              <div className='flex flex-col items-start gap-y-1'>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>About us</button>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Contact us</button>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Pricing</button>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Testimonials</button>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Blog</button>
              </div>
            </div>
            <div className='flex flex-col items-start gap-y-4'>
              <div className='text-xl font-medium'>Support</div>
              <div className='flex flex-col items-start gap-y-1'>

                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Help center</button>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Terms of service</button>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Legal</button>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Privacy policy</button>
                <button className='text-base font-normal transition duration-300 hover:opacity-80'>Status</button>
              </div>
            </div>
            <div className='flex flex-col items-start'>
              <div className='text-xl font-medium'>Get Updates and more</div>
              <div className="h-10 mt-4 flex justify-center items-center rounded">

                <input className='h-8 outline-none px-3'
                placeholder='Your email address'
                ></input>
                <span className='bg-gradient-to-r from-cyan-500 to-cyan-700 via-sky-600 flex justify-center px-2 h-8 items-center'>
                  <button>

                  <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_1_190)">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M24.0845 12.9998C24.0845 13.2879 23.9195 13.5506 23.6599 13.6755L9.34097 20.5698C9.0639 20.7032 8.73347 20.654 8.50734 20.4456C8.28121 20.2372 8.20521 19.9119 8.3156 19.6249L10.8637 12.9998L8.3156 6.37474C8.20521 6.08772 8.28121 5.7624 8.50734 5.554C8.73347 5.3456 9.0639 5.29635 9.34097 5.42976L23.6599 12.324C23.9195 12.449 24.0845 12.7117 24.0845 12.9998ZM12.1824 13.7498L10.3947 18.3977L20.048 13.7498H12.1824ZM20.048 12.2498L10.3947 7.60193L12.1824 12.2498H20.048Z" fill="white" />
                    </g>
                    <defs>
                      <clipPath id="clip0_1_190">
                        <rect width="18" height="18" fill="white" transform="translate(12.7279 0.271973) rotate(45)" />
                      </clipPath>
                    </defs>
                  </svg>
                  </button>

                </span>
              </div>

            </div>
          </div>
        </div>


      </div>

    </div>
  )
}

export default Footer