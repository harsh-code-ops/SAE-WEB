import React from 'react'
import './Teammembers.css'
import TGWmembers  from './TeamMembersDataTGW'
import Membercard from '../Membercard'

const TeamMembersTGW = () => {
  return (
    <div className='mainmemberscon'>
      <div className="teamheading">THE TEAM</div>
      <div className="lineborder mm"></div>
      <div className="leaders" data-aos='fade-up' data-aos-duration='1000' data-aos-delay='300'>
        <div className='leadericon'></div>
        <div className='leadercon'>
        {
          TGWmembers[0].Leaders.map((i,key)=> {
            return (<div>
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
                   TGWmembers[1].TechnicalMembers.map((i,key)=> {
                     return (<div className='coon'>
                     <div className='namemm'>{i.Name}</div>
                     <div className='postmm'>{i.Post}</div>
       
       
                   </div>)
                   })
                 }
              

          </div>
        </div>
        <div className="halfteamcon">
          <div className='electronicsteamicn'></div>
          <div className="hh">Electronics Team Members</div>
          <div className='memcardcon' id='margin'> 
                 {
                   TGWmembers[2].ElectronicsMembers.map((i,key)=> {
                     return (<div className='coon'>
                     <div className='namemm'>{i.Name}</div>
                     <div className='postmm'>{i.Post}</div>
       
       
                   </div>)
                   })
                 }
              

          </div>
          <div className='managemnticon'></div>
          <div className="hh">Managemnt Members</div>
          <div className='memcardcon'> 
                 {
                  TGWmembers[3].ManagementMmebrs.map((i,key)=> {
                     return (<div className='coon'>
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

export default TeamMembersTGW