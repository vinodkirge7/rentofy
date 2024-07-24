import React, { useEffect } from 'react'
import Layout from '../components/Layout/Layout'
import { Avatar, Box, Card, CardActions, CardContent, CardHeader, CardMedia, Grid, IconButton, Typography } from '@mui/material'
import { FavoriteOutlined, MoreVert, ShareOutlined } from '@mui/icons-material'
import { red } from '@mui/material/colors'
import { useDispatch, useSelector } from 'react-redux'
import { getAllPostAction } from '../redux/post/post.action'

const MiddleHome = () => {

    const dispatch = useDispatch();
   const {postss} = useSelector(store=>store);


   useEffect(()=>{
        dispatch(getAllPostAction())
   },[])
  return (
    <Layout>
    <Grid>
    {
        postss.posts.map((p)=>(
                  
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
      }
    </Grid>
       
    </Layout>
  )
}

export default MiddleHome