import React from 'react'
import navbar from './navbar'

const Home = () => {
  return (
    <div id="jumbo">
      <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
        <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
            We invest in the world&apos;s potential
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-30">
            IoT Sofftech is a bootstrapped company founded by 3 students from technical background with a motivation to solve a greater problem in the field of water management in Odisha. Students having different streams like Computer Science and Mechanical are developing a product that can be used in all the households to save water using technology. Product that is being build is a device that controls the motor of the building by fetching the data of the water reservoirs present on the buildings. The customer not only gets the privilege to use the technology through the device but also gets a chance to use the technology through their cell phones, tabs, laptops, etc. They can also specify their minimum water requirements and maximum water requirements which would help to save the water loss from over flowing of tanks.

            Rather than using products from abroad this product is completely made in India. Apart from that the product would also be comparatively affordable for this market which is price sensitive.
          </p>
          <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
            <a href="#" className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
              Get started
              <svg className="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
              </svg>
            </a>
            <a href="#" className="inline-flex justify-center hover:text-gray-900 items-center py-3 px-5 sm:ms-4 text-base font-medium text-center text-white rounded-lg border border-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-400">
              Learn more
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
