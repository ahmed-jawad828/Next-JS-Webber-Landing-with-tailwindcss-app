import React from 'react'
import Footer from '../Footer';
import Header from '../Header'

const Pricing = ({ open, setOpen }: { open: any, setOpen: any }) => {
  const PricingPlanList = [
    {
      title: 'Starter',
      Price: 20,
      limitedlink: true,
      analyticalPlatform: true,
      chatSupport: true,
      NumOfUsers: "3 users",
      optimizeHastags: true,
      accountManager: false,
      NumOfArticles: false,
      satisfactionGuaranteed: true,

    },
    {
      title: 'Pro',
      Price: 100,
      limitedlink: true,
      analyticalPlatform: true,
      chatSupport: true,
      NumOfUsers: "3 users",
      optimizeHastags: true,
      accountManager: true,
      NumOfArticles: false,
      satisfactionGuaranteed: true,
    },

    {
      title: 'Enterprise',
      Price: 200,
      limitedlink: true,
      analyticalPlatform: true,
      chatSupport: true,
      NumOfUsers: "Unlimited",
      optimizeHastags: true,
      accountManager: true,
      NumOfArticles: true,
      satisfactionGuaranteed: true,
    },
  ];
  const Faqs = [
    {
      title: 'How do I use the webber for 3+ members?',
      content:'Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil.'

    },
    {
      title: 'What does early access mean',
      content:'Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil.'

    },
    {
      title: 'Whats the best way to make the most out of it?',
      content:'Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil.'

    },
    {
      title: 'How are enterprise package customers accomodated?',
      content:'Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil.'

    },
    {
      title: 'How do I use the webber for 3+ members',
      content:'Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil.'

    },
    {
      title: 'How do I use the webber for 3+ members',
      content:'Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et. Suscipit quia et aspernatur officiis quo. Officia sed eaque enim doloribus quisquam mollitia nihil.'

    },
  ];
  return (
    <div className='flex flex-col justify-center tracking-tighter bg-gradient-to-b from-cyan-200 to-transparent'
    // style={{ width: "100vw" }}
    >
      <div className=" max-h-screen">
        <Header open={open} setOpen={setOpen} />
        <div className=' flex flex-col items-center justify-center mt-20'>
          <div className='tracking-tighter text-8xl font-extrabold w-4/6 text-center text-gray-800'>
            SIMPLE PRICING
          </div>
          <p className='w-6/12 text-xl font-normal text-gray-600 text-center pt-5'>No contracts. No surprise fees. Register now or try out the Webbber free trial so you're absolutely sure that it’s the right fit for your frontend team</p>
          <div className="mt-8">
            <button className="w-24 py-3 bg-gradient-to-r from-cyan-500 to-cyan-700 via-sky-600 hover:opacity-75 text-gray-50 text-xs font-semibold rounded-sm">MONTHLY</button>
            <button className="w-24 py-3 bg-cyan-100  text-cyan-700 text-xs font-semibold rounded-sm hover:opacity-75">YEARLY</button>
          </div>
        </div>
      </div>
      <div className='flex justify-center my-20 '>
        <div className='grid grid-cols-5 w-11/12 '>
          <div className='col-span-2 pb-10 pt-16 '>
            <div className='flex flex-col gap-y-7 justify-center items-center'>
              <div className='invisible'>del- All limited links</div>
              <div className='invisible'>del- All limited links</div>
              <div className="flex flex-col gap-y-7 ">
                <div className="">All limited links</div>
                <div>Own analytics platform</div>
                <div>Chat support</div>
                <div>Number of users</div>
                <div>Optimize hashtags</div>
                <div>Account manager</div>
                <div>Number of articles</div>
                <div>Satisfaction guaranteed</div>
              </div>
              <div className='invisible'>del - Satisfaction guaranteed</div>
            </div>
          </div>
          <div className='col-span-1 py-10  '>
            <div className='flex flex-col gap-y-7 justify-center items-center'>
              <div className='text-3xl font-extrabold text-gray-600'>Starter</div>
              <div className='flex items-end'>
              <p className='text-4xl font-bold text-gray-800 '>$20</p>
                <span className='text-base font-medium text-gray-600'>/month</span>
              </div>
              <div className='flex flex-col gap-y-9 items-center'>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>
                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>
                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>
                </div>
                <div>
                  1 user
                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7251 9.13422C10.6899 9.09905 10.67 9.05128 10.67 9.00147C10.67 8.95166 10.6899 8.9039 10.7251 8.86872L17.6724 1.92222C18.1116 1.48233 18.1111 0.76962 17.6712 0.330347C17.2313 -0.108927 16.5186 -0.108423 16.0794 0.331472L9.13287 7.27497C9.09769 7.31024 9.04993 7.33006 9.00012 7.33006C8.95031 7.33006 8.90255 7.31024 8.86737 7.27497L1.92087 0.331472C1.4816 -0.108009 0.769227 -0.108177 0.329746 0.331097C-0.109735 0.77037 -0.109903 1.48274 0.329371 1.92222L7.27512 8.86872C7.31039 8.9039 7.33021 8.95166 7.33021 9.00147C7.33021 9.05128 7.31039 9.09905 7.27512 9.13422L0.329371 16.0815C0.0452108 16.3658 -0.0656949 16.7801 0.038431 17.1683C0.142557 17.5565 0.445895 17.8597 0.834181 17.9637C1.22247 18.0676 1.63671 17.9565 1.92087 17.6722L8.86737 10.725C8.90255 10.6897 8.95031 10.6699 9.00012 10.6699C9.04993 10.6699 9.09769 10.6897 9.13287 10.725L16.0794 17.6722C16.5186 18.1117 17.231 18.1119 17.6705 17.6726C18.11 17.2333 18.1101 16.521 17.6709 16.0815L10.7251 9.13422Z" fill="#F87171" />
                  </svg>

                </div>
                <div>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7251 9.13422C10.6899 9.09905 10.67 9.05128 10.67 9.00147C10.67 8.95166 10.6899 8.9039 10.7251 8.86872L17.6724 1.92222C18.1116 1.48233 18.1111 0.76962 17.6712 0.330347C17.2313 -0.108927 16.5186 -0.108423 16.0794 0.331472L9.13287 7.27497C9.09769 7.31024 9.04993 7.33006 9.00012 7.33006C8.95031 7.33006 8.90255 7.31024 8.86737 7.27497L1.92087 0.331472C1.4816 -0.108009 0.769227 -0.108177 0.329746 0.331097C-0.109735 0.77037 -0.109903 1.48274 0.329371 1.92222L7.27512 8.86872C7.31039 8.9039 7.33021 8.95166 7.33021 9.00147C7.33021 9.05128 7.31039 9.09905 7.27512 9.13422L0.329371 16.0815C0.0452108 16.3658 -0.0656949 16.7801 0.038431 17.1683C0.142557 17.5565 0.445895 17.8597 0.834181 17.9637C1.22247 18.0676 1.63671 17.9565 1.92087 17.6722L8.86737 10.725C8.90255 10.6897 8.95031 10.6699 9.00012 10.6699C9.04993 10.6699 9.09769 10.6897 9.13287 10.725L16.0794 17.6722C16.5186 18.1117 17.231 18.1119 17.6705 17.6726C18.11 17.2333 18.1101 16.521 17.6709 16.0815L10.7251 9.13422Z" fill="#F87171" />
                  </svg>

                </div>
                <div>
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3596 2.55001L15.2656 0.450014C15.1952 0.379483 15.0997 0.339844 15.0001 0.339844C14.9004 0.339844 14.8049 0.379483 14.7346 0.450014L5.89056 9.30001C5.8202 9.37055 5.72468 9.41018 5.62506 9.41018C5.52544 9.41018 5.42991 9.37055 5.35956 9.30001L3.26556 7.20001C3.1952 7.12948 3.09968 7.08984 3.00006 7.08984C2.90044 7.08984 2.80491 7.12948 2.73456 7.20001L0.640557 9.30001C0.494163 9.44645 0.494163 9.68383 0.640557 9.83026L5.35956 14.55C5.42991 14.6205 5.52544 14.6602 5.62506 14.6602C5.72468 14.6602 5.8202 14.6205 5.89056 14.55L17.3596 3.07501C17.5025 2.9292 17.5025 2.69583 17.3596 2.55001Z" fill="#27272A" />
                  </svg>


                </div>
              </div>
              <div>
                <button className="px-7 py-3 bg-cyan-100  hover:opacity-75 text-cyan-700 text-base font-semibold rounded-sm">Choose Plan</button>
                
              </div>
            </div>
          </div>
          <div className='col-span-1  py-10  bg-white drop-shadow-2xl '>
            <div className='flex flex-col gap-y-7  justify-center items-center'>
              <div className='text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-700 via-sky-600'>Pro</div>
              <div className='flex  items-end'>
                <p className='text-4xl font-bold text-gray-800'>$100</p>
                <span className='text-base font-medium text-gray-600'>/month</span>
              </div>
              <div className='flex flex-col gap-y-9 items-center '>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>
                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>
                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                  1 user
                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                  <svg width="19" height="19" viewBox="0 0 19 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.7251 9.13422C10.6899 9.09905 10.67 9.05128 10.67 9.00147C10.67 8.95166 10.6899 8.9039 10.7251 8.86872L17.6724 1.92222C18.1116 1.48233 18.1111 0.76962 17.6712 0.330347C17.2313 -0.108927 16.5186 -0.108423 16.0794 0.331472L9.13287 7.27497C9.09769 7.31024 9.04993 7.33006 9.00012 7.33006C8.95031 7.33006 8.90255 7.31024 8.86737 7.27497L1.92087 0.331472C1.4816 -0.108009 0.769227 -0.108177 0.329746 0.331097C-0.109735 0.77037 -0.109903 1.48274 0.329371 1.92222L7.27512 8.86872C7.31039 8.9039 7.33021 8.95166 7.33021 9.00147C7.33021 9.05128 7.31039 9.09905 7.27512 9.13422L0.329371 16.0815C0.0452108 16.3658 -0.0656949 16.7801 0.038431 17.1683C0.142557 17.5565 0.445895 17.8597 0.834181 17.9637C1.22247 18.0676 1.63671 17.9565 1.92087 17.6722L8.86737 10.725C8.90255 10.6897 8.95031 10.6699 9.00012 10.6699C9.04993 10.6699 9.09769 10.6897 9.13287 10.725L16.0794 17.6722C16.5186 18.1117 17.231 18.1119 17.6705 17.6726C18.11 17.2333 18.1101 16.521 17.6709 16.0815L10.7251 9.13422Z" fill="#F87171" />
                  </svg>

                </div>
                <div>
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3596 2.55001L15.2656 0.450014C15.1952 0.379483 15.0997 0.339844 15.0001 0.339844C14.9004 0.339844 14.8049 0.379483 14.7346 0.450014L5.89056 9.30001C5.8202 9.37055 5.72468 9.41018 5.62506 9.41018C5.52544 9.41018 5.42991 9.37055 5.35956 9.30001L3.26556 7.20001C3.1952 7.12948 3.09968 7.08984 3.00006 7.08984C2.90044 7.08984 2.80491 7.12948 2.73456 7.20001L0.640557 9.30001C0.494163 9.44645 0.494163 9.68383 0.640557 9.83026L5.35956 14.55C5.42991 14.6205 5.52544 14.6602 5.62506 14.6602C5.72468 14.6602 5.8202 14.6205 5.89056 14.55L17.3596 3.07501C17.5025 2.9292 17.5025 2.69583 17.3596 2.55001Z" fill="#27272A" />
                  </svg>


                </div>
              </div>
              <div>
                <button className="px-7 py-3 mt-1 bg-gradient-to-r from-cyan-500 to-cyan-700 via-sky-600 hover:opacity-75 text-gray-50 text-base font-semibold rounded-sm">Choose Plan</button>
              </div>
            </div>
          </div>
          <div className='col-span-1 py-10  '>
            <div className='flex flex-col gap-y-7  justify-center items-center'>
              <div className='text-3xl font-extrabold text-gray-600'>Enterprise</div>
              <div className='flex items-end'>
              <p className='text-4xl font-bold text-gray-800 '>$200</p>
                <span className='text-base font-medium text-gray-600'>/month</span>
              </div>
              <div className='flex flex-col gap-y-9 items-center'>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                  Unlimited
                </div>
                <div>
                  <svg width="17" height="15" viewBox="0 0 17 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.8288 2.55001L14.7348 0.450014C14.6644 0.379483 14.5689 0.339844 14.4693 0.339844C14.3697 0.339844 14.2741 0.379483 14.2038 0.450014L5.3598 9.30001C5.28944 9.37055 5.19392 9.41018 5.0943 9.41018C4.99467 9.41018 4.89915 9.37055 4.82879 9.30001L2.73479 7.20001C2.66444 7.12948 2.56892 7.08984 2.4693 7.08984C2.36967 7.08984 2.27415 7.12948 2.20379 7.20001L0.109795 9.30001C-0.0365983 9.44645 -0.0365983 9.68383 0.109795 9.83026L4.82879 14.55C4.89915 14.6205 4.99467 14.6602 5.0943 14.6602C5.19392 14.6602 5.28944 14.6205 5.3598 14.55L16.8288 3.07501C16.9717 2.9292 16.9717 2.69583 16.8288 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3596 2.55001L15.2656 0.450014C15.1952 0.379483 15.0997 0.339844 15.0001 0.339844C14.9004 0.339844 14.8049 0.379483 14.7346 0.450014L5.89056 9.30001C5.8202 9.37055 5.72468 9.41018 5.62506 9.41018C5.52544 9.41018 5.42991 9.37055 5.35956 9.30001L3.26556 7.20001C3.1952 7.12948 3.09968 7.08984 3.00006 7.08984C2.90044 7.08984 2.80491 7.12948 2.73456 7.20001L0.640557 9.30001C0.494163 9.44645 0.494163 9.68383 0.640557 9.83026L5.35956 14.55C5.42991 14.6205 5.52544 14.6602 5.62506 14.6602C5.72468 14.6602 5.8202 14.6205 5.89056 14.55L17.3596 3.07501C17.5025 2.9292 17.5025 2.69583 17.3596 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div>
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3596 2.55001L15.2656 0.450014C15.1952 0.379483 15.0997 0.339844 15.0001 0.339844C14.9004 0.339844 14.8049 0.379483 14.7346 0.450014L5.89056 9.30001C5.8202 9.37055 5.72468 9.41018 5.62506 9.41018C5.52544 9.41018 5.42991 9.37055 5.35956 9.30001L3.26556 7.20001C3.1952 7.12948 3.09968 7.08984 3.00006 7.08984C2.90044 7.08984 2.80491 7.12948 2.73456 7.20001L0.640557 9.30001C0.494163 9.44645 0.494163 9.68383 0.640557 9.83026L5.35956 14.55C5.42991 14.6205 5.52544 14.6602 5.62506 14.6602C5.72468 14.6602 5.8202 14.6205 5.89056 14.55L17.3596 3.07501C17.5025 2.9292 17.5025 2.69583 17.3596 2.55001Z" fill="#27272A" />
                  </svg>

                </div>
                <div className='mt-2'>
                  <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M17.3596 2.55001L15.2656 0.450014C15.1952 0.379483 15.0997 0.339844 15.0001 0.339844C14.9004 0.339844 14.8049 0.379483 14.7346 0.450014L5.89056 9.30001C5.8202 9.37055 5.72468 9.41018 5.62506 9.41018C5.52544 9.41018 5.42991 9.37055 5.35956 9.30001L3.26556 7.20001C3.1952 7.12948 3.09968 7.08984 3.00006 7.08984C2.90044 7.08984 2.80491 7.12948 2.73456 7.20001L0.640557 9.30001C0.494163 9.44645 0.494163 9.68383 0.640557 9.83026L5.35956 14.55C5.42991 14.6205 5.52544 14.6602 5.62506 14.6602C5.72468 14.6602 5.8202 14.6205 5.89056 14.55L17.3596 3.07501C17.5025 2.9292 17.5025 2.69583 17.3596 2.55001Z" fill="#27272A" />
                  </svg>


                </div>
              </div>
              <div className=''>
              <button className="px-7 py-3 bg-cyan-100  hover:opacity-75 text-cyan-700 text-base font-semibold rounded-sm">Choose Plan</button>
              </div>
            </div>
          </div>

        </div>
      </div>
      <div className='bg-gray-100 py-20 '>
        <div className="flex flex-col justify-center items-center ">
          <div className='leading-tight text-6xl font-extrabold text-gray-800'>
            Frequently asked questions
          </div>
          <div className='grid grid-cols-2 w-11/12 pt-20'>
          {Faqs.map((item, index) => (
           <div key={index} className='flex flex-col mx-20  my-4'>
             <div className='text-2xl font-semibold text-gray-800'>

             {item.title}
             </div>
             <div className='text-lg font-normal text-gray-600 text-justify'>
               {item.content}
             </div>
           </div>     
          ))}

          </div>
         
        </div>
      </div>
      <div className='bg-gradient-to-r from-cyan-500 to-cyan-700 via-sky-600 py-20'>
        <div  className='flex flex-col justify-center items-center gap-y-6'>
          <div className='text-5xl text-white font-semibold'>Get results, no matter what</div>
          <div className='font-medium text-base text-white'>Start your free trial today, you get all the pro features for 1 month for you and your team. If you think its not for you can easily unsubscribe</div>
          <div>
            <button className='text-cyan-600 bg-white hover:opacity-70 transition duration-300 hover:text-sky-600 px-10 py-2 rounded'>Start  free trial</button>
          </div>


        </div>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default Pricing