'use client';
import React from 'react'
import  AOS  from 'aos';
import { useEffect } from 'react';
import 'aos/dist/aos.css'

const HomeContent = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);
  return (
        <section className='hero h-screen flex items-center bg-cover bg-center' style={{backgroundImage: 'url(homebg.jpg)'}}>
            <div className='pl-0 md:pl-16 text-white text-center'>
                <h1 className='text-3xl font-bold drop-shadow-md' data-aos='fade-up'>Welcome to Stevemax Watche's</h1>
                <p className='text-1xl mt-3'>Your one-stop shop for the best watches</p>
                <button className='mt-3 px-2 py-2 bg-blue-950 hover:bg-blue-800 rounded-md font-bold'>Shop Now</button>
            </div>
        </section>
  )
}

export default HomeContent
