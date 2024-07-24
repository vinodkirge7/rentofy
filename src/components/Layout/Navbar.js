import { AppBar, Box, Drawer, IconButton, InputBase,   Toolbar, Typography } from '@mui/material'
import React, { useState } from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import { AccountCircleOutlined, AddCircleOutline, Home, Search } from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import { Menu } from '../NavigationMenu';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigate = useNavigate();

  const [mobileOpen , setMobileOpen] = useState(false);

  const handleDrawerToggle = ()=>{
    setMobileOpen(!mobileOpen)
  }
  const drawer =(
    <Box onClick = {handleDrawerToggle} sx={{textAlign:"center"}}>
         <div className='space-y-6 mt-6 p-4'>

               <div>
               <Typography color={'goldenrod'} variant='h6' >
        <ApartmentIcon className=''/>
        RENTOFY
        </Typography>
               </div>
              {Menu.map((item)=>(

                <div  onClick={()=>navigate(item.path)} className='flex space-x-3 cursor-pointer items-center'>
        
                    {item.icon}
                    <p>{item.title}</p>

                </div>
    
              ))}
              </div>
    </Box>
  )

  return (
    <>
    <Box>
      <AppBar className='sticky h-24' component={'nav'} sx={{bgcolor:"black"}}>
       <Toolbar className='  flex h-16 '>

       <IconButton onClick={handleDrawerToggle} className='p-6' color='inherit' area-label="open drawer" edge="start"
        sx={{display:{xs:"block" , sm:"none"} , marginTop:3}}>
       
       <MenuIcon className='m-3' />
       </IconButton>

       <Typography className='gap-6' color={'goldenrod'} variant='h6' component="div" sx={{ display:{xs:"none" , sm:"block"}}}>
        <ApartmentIcon className=''/>
        RENTOFY
        </Typography>

       
          
          <InputBase onClick={()=>{navigate("/search")}} sx={{ display:{xs:"none",md:"block"}}} className='
           bg-white w-70 justify-center p-3 rounded-full ml-4 '  placeholder='search.....'/> 
           
           
           
           <div className='flex-grow-1 flex gap-16 ml-12 mt-6   '>

           <Search  onClick={()=>{navigate("/search")}} sx={{display:{xs:"block" , sm:"none"}}} />

     <Home onClick={()=>{navigate("/middle")}} sx={{display:{xs:"block" , sm:"none"}}} />

         <AddCircleOutline onClick={()=>{navigate("/create-post")}} sx={{display:{xs:"block" , sm:"none"}}}/>

           </div>
          
           <AccountCircleOutlined onClick={()=>{navigate("/profile")}} className='mt-6 ml-16' sx={{display:{xs:"block" , sm:"none"}}}/>

      
      

       </Toolbar>

      </AppBar>
      <Box component="nav">
       <Drawer variant='temporary' open={mobileOpen} onClose={handleDrawerToggle} sx={{display:{
        xs:"block" , sm:"none"
       } , "& .MuiDrawer-paper":{
        boxSizing:"border-box",
        width:"230px"
       }}}>
        {drawer}
       </Drawer>
      </Box>

      <Toolbar/>
    </Box>
    
    </>
  )
}

export default Navbar