import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { motion } from 'framer-motion';
import { fadeIn } from '../variants';


// data
export const workSlider = {
  slides: [
    {
      images: [
        {
          title: 'Email Spam Detector',
          path: '/thumb1.png',
          description: 'It is an Email Detector which detects spam emails.',
        },
        {
          title: 'Vibewalls',
          path: '/thumb2.png',
          description: 'A dynamic wallpaper android application created using Java and Figma.',
        },
        {
          title: 'Portfolio',
          path: '/thumb3.png',
          description: 'Portfolio of our team creates using Next.js, Tailwind CSS and Framer motion.'

        },
        {
          title: 'Write Right',
          path: '/thumb4.png',
          description: 'Currently, I am working to develop an Oflline Handwriting Recognition Application using Flutter, ML and IOT'
        },
      ],
    },
  ],
};

// WorkSlider component
const WorkSlider = () => {
  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[380px] sm:h-[380px]'
    >
      {workSlider.slides[0].images.map((image, index) => (
        <SwiperSlide key={index}>
          <motion.div 
          variants={fadeIn('up', 0.2)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className='justify-center flex cursor-pointer rounded-lg overflow-hidden items-center group'>
            <div className='flex items-center justify-center relative overflow-hidden'>
              <Image src={image.path} width={380} height={380} alt='' />

              {/* Overlay */}
              <div className='absolute inset-0 bg-gradient-to-l from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>

              {/* Centered hidden content that appears on hover */}
              <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 translate-y-full group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500'>
                <h3 className='text-lg font-bold text-white'>{image.title}</h3>
                <p className='text-sm text-white mt-2'>{image.description}</p>
              </div>
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default WorkSlider;
