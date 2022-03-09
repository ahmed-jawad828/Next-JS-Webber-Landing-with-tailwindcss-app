import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import CaseStudies from './components/CaseStudies'
import Homepage from './components/Homepage'
import Pricing from './components/Pricing'

const Home: NextPage = () => {
  const [open, setOpen] = useState("Homepage")
  return (
    <div className="flex min-h-screen  bg-yellow-400 justify-center " style={{width:"100vw"}}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <main className="flex w-full bg-slate-600 ">
        <Homepage/>
        {/* <Pricing/> */}
        {/* <CaseStudies/> */}
        
        
      </main>

      <footer className="flex h-24 w-full items-center justify-center border-t">
        
      </footer>
    </div>
  )
}

export default Home
