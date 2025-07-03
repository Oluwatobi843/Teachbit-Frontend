import React from 'react';
import { Check } from 'lucide-react';

const Webinar = () => {
  return (
    <div className='main-padding bg-[#FCF8EB] h-full w-full pt-50 lg:pt-10 z-30 pb-14'>
      <h3 className='text-xl lg:text-4xl text-black font-bold text-center pt-8'>Free Webinar</h3>
      <p className='text-base text-black font-normal text-center pt-6'>Don’t miss this chance to learn essential tech skills for free.</p>

      <div>
        <div>
          <h4 className='text-xl lg:text-2xl text-[#3d3d3d] font-bold text-left pt-16'>Does these speak to you?</h4>
          <div className='flex gap-6 mt-8'>
            <Check className='text-white p-1 bg-[#E2B934] rounded-full' />
            <div className='flex flex-col gap-6'>
            <h5 className='text-base lg:text-xl text-[#3d3d3d] font-bold text-left'>Are you feeling Stuck in your career?</h5>
            <p className='text-base text-[#3d3d3d] font-medium text-left'>Discover new paths and unlock your true potential.</p>
            </div>
          </div>
          <div className='flex gap-6 mt-8'>
            <Check className='text-white p-1 bg-[#E2B934] rounded-full' />
            <div className='flex flex-col gap-6'>
            <h5 className='text-base lg:text-xl text-[#3d3d3d] font-bold text-left'>Struggling to lay your hands on a tech skill?</h5>
            <p className='text-base text-[#3d3d3d] font-medium text-left max-w-[420px]'>Get the support and resources you need to start your tech journey.</p>
            </div>
          </div>
          <div className='flex gap-6 mt-8'>
            <Check className='text-white p-1 bg-[#E2B934] rounded-full' />
            <div className='flex flex-col gap-6'>
            <h5 className='text-base lg:text-xl text-[#3d3d3d] font-bold text-left'>Want to have live sessions with professionals?</h5>
            <p className='text-base text-[#3d3d3d] font-medium text-left max-w-[420px]'>Connect directly with experts and get your questions answered in real time.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Webinar