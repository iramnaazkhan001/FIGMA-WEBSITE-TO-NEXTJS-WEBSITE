import { Image } from '@chakra-ui/react'
import React from 'react'
import {
    FormControl,
    FormLabel,
Input,
Button
} from '@chakra-ui/react'
function ContactUs() {
    return (
        <div style={{ backgroundColor: 'black' }}>
            <h1 style={{ textAlign: 'center', fontSize: 40 }}>
                <b style={{ color: 'white' }}>   Contact Us</b>
            </h1>
            <div style={{ display: 'flex', backgroundColor: 'black' }}>
                <div>
                    <Image src={'../contact.png'} width={500} marginLeft={20}/>
                </div>
                <div style={{width:'30%', height:'30%', marginLeft:'20%', marginTop:'6%'}}>
                    <FormControl>
                        <FormLabel color={'white'} marginBottom={'5%'}>Name</FormLabel>
                        <Input type='text' placeholder='Enter Name'/>
                        <br />
                        <FormLabel color={'white'} marginBottom={'5%'}>Email</FormLabel>
                        <Input type='email' placeholder='Enter Email'/>
                        <br />
                        <FormLabel color={'white'} marginBottom={'5%'}>Phone</FormLabel>
                        <Input type='number' placeholder='Enter Phone'/>
                    </FormControl>
                    <Button style={{backgroundColor:'rgb(144,63,118)', color:'white', width:'100%', marginTop:'5%'}}>Contact</Button>
                </div>
            </div>
        </div>
    )
}

export default ContactUs