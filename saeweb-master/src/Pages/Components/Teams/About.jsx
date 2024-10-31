import React,{useEffect} from 'react'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
function About(propm) {
  useEffect(() => {
    AOS.init();
  }, [])
    
  return (
    <div className='aboutteampagecon' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
      <div className='wave'>
      
      </div>
       
       <div className="leftsidecon" data-aos='fade-right' data-aos-duration='1000' data-aos-delay='700' >
         <div className="headingleftsidecon">
           Who are we?
         </div>
         <div className="descriptionleftsidecon">
           {propm.Desc}
         </div>
       </div>
       <div className='rightsidecon'>
         <div className='dottedbg'></div>
         <div className='rightsideimg' style={{backgroundImage:`url(${propm.Rightsideimg})`}}></div>
         <div className='dottedbg2'></div>
       </div>
       
    </div>
  )
}

export default About