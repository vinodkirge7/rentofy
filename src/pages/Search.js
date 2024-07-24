import { Button, Grid, Paper, TextField} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useFormik } from 'formik';
//import { useNavigate } from 'react-router-dom';
import Layout from '../components/Layout/Layout';
import { useDispatch, useSelector } from 'react-redux';
import { areaPostAction, searchPostAction } from '../redux/post/post.action';
import { store } from '../redux/store';
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia,IconButton, Typography } from '@mui/material'
import { FavoriteOutlined, MoreVert, ShareOutlined } from '@mui/icons-material'
import { red } from '@mui/material/colors'

const paperstyle = {padding:20,height:"40vh", width:"98%",margin:" auto auto"}
const buttonst = {margin:8}
const Search = () => {

  const [city , setCity] = useState("");
  const [area , setArea] = useState("")

  const {postss} = useSelector(store=>store);

  const dispatch = useDispatch();

  const handleChange=(e)=>{
      setCity(e.target.value)
      setArea(e.target.value)
      console.log( "search....", postss.searchPost)
      dispatch(searchPostAction(city))
      dispatch(areaPostAction(area))


  }
  
  
  return (

    <Layout>



    <Grid className='sticky top-0' >
      
     <Paper className='w-full' elevation={10} style={paperstyle}>

     <Typography>
        <h2 className='m-3 font-bold'>Search....</h2>
        </Typography>
 <div className=''>
 <input
  className='bg-transparent w-full border-[#3b4054] rounded-full
   outline-double px-3 py-3' placeholder='Search City...' onChange={handleChange} type="text" /></div>

<div className='relative'>
 <input
  className='bg-transparent w-full border-[#3b4054] rounded-full
   outline- px-3 py-3 mt-3' placeholder='Search Area...' onChange={handleChange} type="text" /></div>


     </Paper>
    </Grid>

    <Grid>
         
    {  city && area  && (
        postss.searchPost.map((p)=>(
                  
            <Box width="70vh" flex={4} p={2}>
            <Card >
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                R
              </Avatar>
            }
            action={
              <IconButton aria-label="settings">
                <MoreVert />
              </IconButton>
            }
            title="Shrimp and Chorizo Paella"
            subheader="September 14, 2016"
          />
          <CardMedia sx={{height:"50vh" ,width:"100%"}}
            component="img"
            height="20%"
            width="100"
            image={p.image}
            alt="Paella dish"
          />
          <CardContent  >

            <Grid  container>
            <Grid  item sm={6} xs={6} >

            <Typography paragraph  color="text.primary">
               Rent= {p.rent}
            </Typography>

            <Typography paragraph    color="text.primary">
               Type= {p.type}
            </Typography>
            </Grid>

            <Grid item sm={6} xs={6}>
            <Typography  paragraph    color="text.primary">
               Mobile No.= {p.mobile}
            </Typography>

            <Typography  paragraph   color="text.primary">
               City= {p.city}
            </Typography>
            </Grid>

            </Grid>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteOutlined />
            </IconButton>
            <IconButton aria-label="share">
              <ShareOutlined/>
            </IconButton>
    
          </CardActions>
        </Card>
        </Box>
        ))
      )
      }
    


    </Grid>

    </Layout>
  )
}

export default Search