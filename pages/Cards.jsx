import React from 'react'
import { Card, CardHeader, CardBody, CardFooter, SimpleGrid, Heading, Text, Button, Image } from '@chakra-ui/react'
function Cards() {
  return (
    <div style={{marginRight:'10%'}}>
      <div style={{display:'flex', width:'100%', marginTop:'3%'}}>
        <div style={{marginLeft:'10%'}}>
            <Card backgroundColor={'rgb(51,37,44)'} border={'1px solid white'}>
              <CardHeader>
              <Image src={'../web.png'} height={20} width={20} borderRadius={'60px'}/>
                <Heading size='md' color={'white'}>Web Design</Heading>
              </CardHeader>
              <CardBody>
              <Text color={'white'}>FOR STARTUPS AND GROWING BUSINESSES, WER AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR & TRANSFORMATIVE JOURNEY INTIS THE DIGITAL REALM</Text>
              </CardBody>
             
            </Card>
        </div>
        <div style={{marginLeft:'25%'}}>
        <Card backgroundColor={'rgb(29,55,45)'} border={'1px solid white'}>
              <CardHeader>
              <Image src={'../mob.png'} height={20} width={20} borderRadius={'60px'}/>
                <Heading size='md' color={'white'}>Web/Mobile Application</Heading>
              </CardHeader>
              <CardBody>
              <Text color={'white'}>FOR STARTUPS AND GROWING BUSINESSES, WER AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR & TRANSFORMATIVE JOURNEY INTIS THE DIGITAL REALM</Text>
              </CardBody>
             
            </Card>
        </div>
      </div>

      <div style={{display:'flex', width:'100%', marginTop:'3%'}}>
        <div style={{marginLeft:'10%'}}>
            <Card backgroundColor={'rgb(50,33,46)'} border={'1px solid white'}>
              <CardHeader>
              <Image src={'../seo.png'} height={20} width={20} borderRadius={'60px'}/>
                <Heading size='md' color={'white'}>SEO</Heading>
              </CardHeader>
              <CardBody>
                <Text color={'white'}>FOR STARTUPS AND GROWING BUSINESSES, WER AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR & TRANSFORMATIVE JOURNEY INTIS THE DIGITAL REALM</Text>
              </CardBody>
            
            </Card>
        </div>
        <div style={{marginLeft:'25%'}}>
        <Card backgroundColor={'rgb(44,46,57)'} border={'1px solid white'}>
              <CardHeader>
              <Image src={'../dm.png'} height={20} width={20} borderRadius={'60px'}/>
                <Heading size='md' color={'white'}>Digital Marketing</Heading>
              </CardHeader>
              <CardBody>
              <Text color={'white'}>FOR STARTUPS AND GROWING BUSINESSES, WER AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR & TRANSFORMATIVE JOURNEY INTIS THE DIGITAL REALM</Text>
              </CardBody>
           
            </Card>
        </div>
      </div>
      <div style={{display:'flex', width:'100%', marginTop:'3%'}}>
        <div style={{marginLeft:'10%'}}>
            <Card backgroundColor={'rgb(54,40,32)'} border={'1px solid white'}>
              <CardHeader>
              <Image src={'../devops.png'} height={20} width={20} borderRadius={'60px'}/>
                <Heading size='md' color={'white'}>Dev Ops</Heading>
              </CardHeader>
              <CardBody>
              <Text color={'white'}>FOR STARTUPS AND GROWING BUSINESSES, WER AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR & TRANSFORMATIVE JOURNEY INTIS THE DIGITAL REALM</Text>
              </CardBody>
             
            </Card>
        </div>
        <div style={{marginLeft:'25%'}}>
        <Card backgroundColor={'rgb(28,39,57)'} border={'1px solid white'}>
              <CardHeader>
              <Image src={'../data.png'} height={20} width={20} borderRadius={'60px'}/>
                <Heading size='md' color={'white'}>Data Science</Heading>
              </CardHeader>
              <CardBody>
              <Text color={'white'}>FOR STARTUPS AND GROWING BUSINESSES, WER AND MOBILE SOLUTIONS, CLOUD EXPERTISE, AND DYNAMIC DIGITAL MARKETING STRATEGIES PARTNER WITH US FOR & TRANSFORMATIVE JOURNEY INTIS THE DIGITAL REALM</Text>
              </CardBody>
             
            </Card>
        </div>
      </div>
      
    </div>
  )
}

export default Cards