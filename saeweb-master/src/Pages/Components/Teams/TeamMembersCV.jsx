import React,{useEffect} from 'react'
import Membercard from '../Membercard'

import './Teammembers.css'
import CVmembers from './TeamMembersDataCV'
import AOS from 'aos';
import 'aos/dist/aos.css'

const TeamMembersCV = () => {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
    <div className='mainmemberscon' data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300' >
      <div className="teamheading">THE TEAM</div>
      <div className="lineborder mm"></div>
         
       <div className="leaders" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
         <div className='leadericon'></div>
         <div className='leadercon'>
        
        {
          CVmembers[0].Leaders.map((i,key)=> {
            return (
            <div>
              <div className='namemm'>{i.Name}</div>
              <div className='postmm'>{i.Post}</div>


            </div>)
          })
        }
        </div>
        </div>
      <div className="restmembers" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
        <div className="halfteamcon">
          <div className='tchnclicn'></div>
          <div className="hh">Technical Members</div>
          <div className='memcardcon'> 
                 {
                   CVmembers[1].TechnicalMembers.map((i,key)=> {
                     return ( <div className='coon'>
                      <div className='namemm'>{i.Name}</div>
                      <div className='postmm'>{i.Post}</div>
        
        
                    </div>)
                   })
                 }
              

          </div>
        </div>
        <div className="halfteamcon">
          <div className='managemnticon'></div>
          <div className="hh">Management Members</div>
          <div className='mchnclicon'></div>
          <div className='memcardcon'> 
                 {
                   CVmembers[2].ManagementMembers.map((i,key)=> {
                     return ( <div className='coon'>
                      <div className='namemm'>{i.Name}</div>
                      <div className='postmm'>{i.Post}</div>
        
        
                    </div>)
                   })
                 }
              

          </div>
        </div>
      </div>
        
    </div>
  )
}

export default TeamMembersCV