import React from 'react'

const About = () => {
  return (
        <section className='about h-screen flex items-center justify-start bg-cover bg-center text-white px-10' style={{backgroundImage:"url(abourbg.jpg)"}}>
            <div className='bg-black bg-opacity-60 p-8 rounded-md max-w-lg'>
                <h2 className=' text-4xl font-bold mb-4' data-aos='fade-up'>About Us</h2>
                <p>Stevemax Watches is a premium watch brand renowned for its unique design and high-quality craftsmanship. Their watches blend classic elegance with modern sophistication, featuring precise timekeeping, stylish designs, durable construction, and affordable prices. With attention to detail and a commitment to quality, Stevemax Watches offer an unparalleled watch-wearing experience, making them an ideal choice for those seeking luxury and style without the hefty price tag.</p>
            </div>
        </section>
  
  )
}

export default About
