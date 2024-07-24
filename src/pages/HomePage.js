import React from 'react'
import Layout from '../components/Layout/Layout'
import {  Grid } from '@mui/material'
import SideBar from './SideBar'
import {  Route, Routes } from 'react-router-dom'
import MiddleHome from './MiddleHome'
import CreatePost from './CreatePost'
import Profile from './Profile'
import Search from './Search'

const HomePage = () => {
  return (
    <Layout>
     <div>

      <Grid container>
        <Grid  item sm={3} sx={{display:{xs:"none",sm:"block"}}}>
           <div className=" sticky top-0">
           <SideBar/>
           </div>
         </Grid>

        
         <Grid bgcolor="" item sm={5} xs={12}   >
            <div className='text-center'>
             
             <Routes>
               <Route path='/middle' element={<MiddleHome/>}/>
               <Route path='/create-post' element={<CreatePost/>}/>
                <Route path='/profile' element={<Profile/>}/>
                <Route path='/search' element={<Search/>}/>

               </Routes>
             
             
            </div>
         </Grid>

         <Grid bgcolor="" item sm={3} sx={{display:{xs:"none",sm:"block"}}}>
           <div className='sticky top-0'>
            right
           </div>
         </Grid>

      </Grid>
     </div>
    </Layout>
  )
}

export default HomePage