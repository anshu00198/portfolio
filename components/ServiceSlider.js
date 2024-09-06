import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { SiFlutter, SiFirebase, SiAndroid, SiFigma } from 'react-icons/si';
import { RxArrowTopRight, RxGear } from 'react-icons/rx';
import { FreeMode, Pagination } from 'swiper';

// Data for services
export const serviceData = [
  {
    icon: <SiAndroid />,
    title: 'Android App Development',
    description: 'End-to-end app development tailored to meet specific business needs.',
  },
  {
    icon: <SiFlutter />,
    title: 'Cross Platform App Development',
    description: 'Developing apps that work seamlessly across both Android and iOS platforms using Flutter.',
  },
  {
    icon: <RxGear />,
    title: 'App Optimization and Maintenance',
    description: 'Ongoing support to ensure smooth functioning of apps post-launch.',
  },
  {
    icon: <SiFirebase />,
    title: 'API Integration and Backend Services',
    description: 'Connecting your app with third-party services such as payment gateways, cloud storage, or social media.',
  },
  {
    icon: <SiFigma />,
    title: 'UI/UX Designing',
    description: 'Designing intuitive and user-friendly interfaces that align with user needs and business goals.',
  },
];

// ServiceSlider component
const ServiceSlider = () => {
  return (
    <Swiper
      breakpoints={{
        320: {
          slidesPerView: 1,
          spaceBetween: 15,
        },
        640: {
          slidesPerView: 3,
          spaceBetween: 15,
        },
      }}
      freeMode={true}
      pagination={{ clickable: true }}
      modules={[FreeMode, Pagination]}
      className='h-[240px] sm:h-[340px]'
    >
      {serviceData.map((item, index) => (
        <SwiperSlide key={index}>
          <div className='bg-[rgba(65,47,123,0.15)] h-max rounded-lg px-6 py-8 flex sm:flex-col gap-x-6 sm:gap-x-0 group cursor-pointer hover:bg-[rgbs(89,65,169,0.15)] transition-all duration-300'>
            <div className='text-4xl text-accent mb-4'>{item.icon}</div>
            <div className='mb-8'>
              <div className='mb-2 text-lg'>{item.title}</div>
              <p className='max-w-[350px] leading-normal'>{item.description}</p>
            </div>
            <div className='text-3xl text-accent group-hover:text-accent-hover transition'>
              <RxArrowTopRight className='group-hover:rotate-45 group-hover:text-accent transition-all duration-300' />
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default ServiceSlider;
