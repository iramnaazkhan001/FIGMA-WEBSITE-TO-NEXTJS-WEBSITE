import { Image } from '@chakra-ui/react'
import React from 'react'
import { LuPhone } from "react-icons/lu";

function Home() {
  return (
   
    <div style={{backgroundColor:'black', display:'flex'}}>
    <div style={{marginLeft:'5%', marginTop:'3%'}}>
        <b style={{color:'white', fontSize:50}}>
        Transforming Ideas <br/>
        Into <span style={{color:'rgb(253,111,0)'}}>Powerful Solutions</span> 
        </b>
        <p style={{color: 'white'}}>FOR STARTUPS AND GROWING BUSINESSES, WER AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC <br/> DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR & TRANSFORMATIVE JOURNEY INTIS THE DIGITAL REALM</p>
        <div style={{display:'flex', marginTop:'2%'}}>
        <div style={{border:'2px solid white', color:'white', width:'30px', height:'40px',
        backgroundColor:'rgb(253,111,0)'
    }}><LuPhone style={{marginTop:'10px', marginLeft:'5px'}} /></div>
       <div style={{border:'2px solid white', color:'white', width:'200px', height:'40px',
        borderRadius:6
    }}>
       <span style={{marginLeft:'10px', marginTop:'10px'}}> Get a Free Consultation</span>
        </div>
        </div>
        
    </div>
    <div>
        <Image src='../pink_plane.png' style={{width:'60vh', height:'50vh', marginLeft:'20%'}} />
        </div>
    </div>
  )
}

export default Home