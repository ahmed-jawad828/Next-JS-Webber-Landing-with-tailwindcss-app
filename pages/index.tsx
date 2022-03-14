import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { useState } from 'react'
import CaseStudiesDetail from './components/Case Studies Detail'
import CaseStudies from './components/CaseStudies'
import Homepage from './components/Homepage'
import Pricing from './components/Pricing'

const Home: NextPage = () => {
  const [open, setOpen] = useState<any>("Homepage")
  const [caseStudy, setCaseStudy] = useState<any>(1)
  return (
    <div className="flex   justify-center  font-Mulish" >
      <Head>
        <title>AlphaSquad - WEBBER Landing</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@600&family=Mulish:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,900&display=swap" rel="stylesheet"></link>
      </Head>

      <section className="  ">
        <div className={open==='Homepage'?'':'hidden'}>
          <Homepage open={open} setOpen={setOpen}/>
        </div>
        <div className={open==='Pricing'?'':'hidden'}>          
          <Pricing open={open} setOpen={setOpen}/>
        </div>
        <div className={open==='CaseStudies'?'':'hidden'}>          
          <CaseStudies open={open} setOpen={setOpen}/>
        </div>                
        <div className={open==='CaseStudiesDetai;'?'':'hidden'}>          
          <CaseStudiesDetail />
        </div>                
      </section>

      {/* <footer className="flex h-24 w-full items-center justify-center border-t">
        
      </footer> */}
    </div>
  )
}

export default Home
