import {
  IconButton,
  Avatar,
  Box,
  CloseButton,
  Flex,
  HStack,
  VStack,
  Icon,
  useColorModeValue,
  Text,
  Drawer,
  DrawerContent,
  useDisclosure,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from '@chakra-ui/react'
import {
  FiMenu,
} from 'react-icons/fi'
import Home from './Home'
import Link from 'next/link'
import Services from './Services'
import ContactUs from './ContactUs'

const MobileNav = ({ onOpen, ...rest }) => {
  return (
    <Flex
      // ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={useColorModeValue('black', 'white')}
      color={'white'}
      borderBottomWidth="1px"
      borderBottomColor={useColorModeValue('white.200', 'white.700')}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}>
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        onClick={onOpen}
        variant="outline"
        aria-label="open menu"
        icon={<FiMenu />}
      />

      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Logo
      </Text>

      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            {/* <MenuButton py={2} transition="all 0.3s" _focus={{ boxShadow: 'none' }}> */}
              <HStack>
            
                  <Avatar src={'../logo.jpg'} borderRadius={0} style={{marginRight:1100, width:80, height:70}} />
              
              
                  <div style={{ display: 'flex', gap: 20 }}>
                    <div>
                      <Link href='/Home'>Home</Link></div>
                    <div><Link href='/Services'>Services</Link></div>
                    <div><Link href='/AboutUs'>AboutUs</Link></div>
                    <div><Link href='/ContactUs'>ContactUs</Link></div>
                  </div>
            
              </HStack>
            {/* </MenuButton> */}
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}

const Main = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <Box minH="100vh" bg={useColorModeValue('gray.100', 'gray.900')}>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        returnFocusOnClose={false}
        onOverlayClick={onClose}
        size="full">
      </Drawer>
      {/* mobilenav */}
      <MobileNav onOpen={onOpen} />
     <Home/>
     <Services/>
     <ContactUs/>
    </Box>
  )
}

export default Main;

