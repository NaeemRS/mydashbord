import React from 'react';
import { Link } from 'react-router-dom';
import Aboutanner from '../images/aboutUS1.png'
import imagelogo1 from '../images/logo1.svg'
import imagelogo2 from '../images/logo2.svg'
import imagelogo3 from '../images/logo3.svg'
import imagelogo4 from '../images/logo4.svg'
import imagelogo5 from '../images/logo5.svg'
import Pricingplan from './Pricingplan';

const AboutUs = () => {
  const data = [
    {image:<img src={imagelogo1} />},
    {image:<img src={imagelogo2} />},
    {image:<img src={imagelogo3} />},
    {image:<img src={imagelogo4} />},
    {image:<img src={imagelogo5} />},
   

];
  return (
   <>
    <section className='bg-[#F5F5F8] '>
      <div className="w-full lg:px-6 px-4">
        <div className="grid md:grid-cols-2 lg:pt-10 2xl:pt-20 2xl:pb-[80px] md:py-12 py-6 gap-4 md:gap-8 xl:gap-10 md:items-center">

          <div className="text-left">
            <h1 className="block md:text-4xl lg:mb-5 mb-3 lg:text-[40px] 2xl:text-[40px] text-2xl font-bold text-[#000000] lg:leading-tight dark:text-white">Grow your
              subscription
              business</h1>
            <p className=" lg:text-lg md:text-sm xl:w-[462px] text-sm  text-[##696871]">
              Outcome-centered products that reduce churn, optimize pricing, and grow your subscription business end-to-end.
            </p>

            <div className="mt-10 grid gap-3 w-full sm:inline-flex">
              <Link className="inline-flex justify-center items-center xl:w-[261px] w-[200px]  xl:h-[69px] gap-x-3 text-center bg-[#E92424] hover:bg-[#2277FF] border border-transparent text-sm lg:text-[16px] text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-600" href="/">
                Participate Now
              </Link>
            </div>
          </div>
          <div className='relative'>
            <div className='lg:w-[320px] right-[8rem] h-[100px] w-[100px] absolute top-[10rem] lg:h-[320px] dark:bg-[#9b9a9a] bg-[#27F]' style={{ filter: 'blur(175px)', }
            }>

            </div>
            <img
              className='relative'
              src={Aboutanner}
              alt="banner image"

            />
          </div>
        </div>


      </div>

      <div className="grid grid-cols-3 xl:pb-12 w-full lg:pb-10 pb-10 md:grid-cols-5 lg:px-6 px-4 gap-x-6">
      {data.map((item, index) => (
                    <div className='w-full'>
                      {item.image}
                    </div>
                ))}
      </div>



    </section>
    <Pricingplan /></>
  );
};

export default AboutUs;
