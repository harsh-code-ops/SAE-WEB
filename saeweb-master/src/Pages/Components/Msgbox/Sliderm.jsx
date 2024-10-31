import {useState} from 'react';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';
import './swiperm.css'



// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import Msgbox from './Msgbox';

export default () => {

  
  return (
    
    <Swiper
      
      // install Swiper modules
      modules={[Navigation, Pagination, A11y]}
      spaceBetween={50}
      slidesPerView={1}
     
      
      navigation
      pagination={{ clickable: true }}
     
      
      onSlideChange={() => console.log('slide change')}
    >
      
      <SwiperSlide><Msgbox Designation='Dean' Image='Dean.jpeg' Department='Faculty of Engineering & Technology,ZHCET' Name='Prof. Mirza Salim Beg' Content='Students from SAE-ZHCET proved they are as capable as students from IITs, NITs, and other renowned universities by creating a variety of automobiles in several industries and winning multiple competitions. I am thus quite pleased with all of the efforts made by our students since this speaks well of their original thought.' /></SwiperSlide>
      <SwiperSlide><Msgbox Designation='Principal' Image='principal.jpg' Department='ZHCET' Name='Prof. M.M. Sufyan Beg' Content='I find it exhilarating to observe the many accomplishments that the teams affiliated with SAE ZHCET regularly achieve in numerous domains and events around the country. We are all aware of how difficult it is getting for graduates from traditional colleges to get work in the private sector. To address this gap, SAE-ZHCET goes above and beyond by providing extracurricular training and helping students get real-world experience in subjects that are challenging to learn about purely via classroom education.' /></SwiperSlide>
      <SwiperSlide><Msgbox Designation='Chairman' Image='Chairman.jpeg' Department='Department of Mechanical Engineering, ZHCET' Name='Prof. Raisuddin Ansari' Content='I am very proud of the successful journey of SAE ZHCET to this date.  They have not only brought honors to the Mechanical Engineering Department of ZHCET but also to Aligarh Muslim University by winning several tournaments throughout these years. All this was possible not only due to enthusiasm. hard work and devotion of its members but also with the support from their alumni network. I wish them to come up with flying colors in their future endeavors.' /></SwiperSlide>
      
      
      
     
    </Swiper>
  );
};