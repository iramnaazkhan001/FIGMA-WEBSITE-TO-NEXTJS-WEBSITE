import { Image } from '@chakra-ui/react'
import React from 'react'
import Cards from './Cards'
function Services() {
  return (
    <div>
    <div style={{backgroundColor:'rgb(15,4,32)', display:'flex'}}>
        <div style={{marginLeft:'5%', marginTop:'4%'}}>
        <h6 style={{fontSize:20, color:'white'}}>
          <b>We provide the best web services</b>
        </h6>
        <p style={{color:'white', marginTop:'2%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa molestiae <br/>qui laudantium expedita quod quas perferendis saepe vel mollitia! Deleniti <br/>
         sint consequuntur molestiae sapiente nam eos omnis dicta repellat labore!</p>
        
         <div style={{marginLeft:'3%', color:'white', marginTop:'2%'}}>
         <ul>
            <li>MOST EASY PREMIUM WEB DESIGN PROCESS</li>
            <li>RESERARCH & DEVELOPMENT BEFORE STARTING</li>
            <li>MAKING A QUALITY DESIGN IDEAS</li>
            <li>MAKING A QUALITY DESIGN IDEAS</li>
            <li>MAKING A QUALITY DESIGN IDEAS</li>
         </ul>
         </div>
         </div>
        <div>
        <Image src='../SHOPING.png' style={{width:'50vh', height:'45vh', marginLeft:'90%', marginTop:'5%'}} />
        </div>
              
            </div>
            <div style={{backgroundColor:'rgb(8,9,13)'}}>
                <h3 style={{ textAlign:'center', fontSize:30}}>
                  <b style={{color:'white'}}>Services We are Offering</b>  
                </h3>
                <Cards/>
            </div>
            </div>
  )
}

export default Services