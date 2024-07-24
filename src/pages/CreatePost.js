import React, { useState } from 'react'
import Layout from '../components/Layout/Layout'
import { Button, Grid, IconButton, Paper, TextField, Typography } from '@mui/material'
//import { useNavigate } from 'react-router-dom'
import { useFormik } from 'formik'
import { uploadToCloudniry } from '../utiles/UploadOnCloudinary'
import ImageIcon from '@mui/icons-material/Image'
import { useDispatch } from 'react-redux'
import { createPostAction } from '../redux/post/post.action'

const paperstyle = {padding:20,height:"94vh", width:"96%",margin:"20px auto"}
const CreatePost = () => {

  const jwt = localStorage.getItem("jwt");
    const dispatch = useDispatch();

    const [selectedImage,setSelectedImage] = useState();

  const handleSelectImage = async (event)=>{
    const imageUrl = await uploadToCloudniry(event.target.files[0],"image")

    setSelectedImage(imageUrl);
    formik.setFieldValue("image", imageUrl)

  }

    //const navigate = useNavigate();

    const formik = useFormik({
        initialValues:{
            name:"",
            city:"",
        area:"",
        subarea:"",
        rent:"",
        type:"",
        mobile:"",
        image:""
        },
    
        onSubmit:(values)=>{
         
             dispatch(createPostAction({data:values},jwt))
             console.log(values)
           
         }
    })

  return (
    <Layout>
   
    <Grid>
     <Paper elevation={10} style={paperstyle}>
       <Grid>
        
        <Typography className='font-bold'>
            Add Your Property
        </Typography>

       </Grid>
       
       
       <form onSubmit={formik.handleSubmit}>
       <TextField
          fullWidth
          id="name"
          variant='standard'
          name="name"
          label="Enter Name"
          value={formik.values.name}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="city"
          variant='standard'
          name="city"
          label="Enter City"
          value={formik.values.city}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="area"
          variant='standard'
          name="area"
          label="Enter Area"
          value={formik.values.area}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="mobile"
          variant='standard'
          name="mobile"
          label="Enter Mobile"
          value={formik.values.mobile}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="subarea"
          variant='standard'
          name="subarea"
          label="Enter Sub-Area"
          value={formik.values.subarea}
          onChange={formik.handleChange}
        />
        <TextField
          fullWidth
          id="type"
          variant='standard'
          name="type"
          label="Enter Type eg.flat/room"
          value={formik.values.type}
          onChange={formik.handleChange}
        />

        <TextField
          fullWidth
          id="rent"
          variant='standard'
          name="rent"
          label="Enter Rent"
          value={formik.values.rent}
          onChange={formik.handleChange}
        />

         <input type="file" accept='image/*'
            onChange={handleSelectImage}
            // style={{display:"none"}}
            id='image-input'/>
            <label htmlFor='image-input' component="span">
               <IconButton>
                <ImageIcon/>
               </IconButton>
            </label>
            {
              selectedImage && <div>
                <img src={selectedImage} className='h-[10rem]' alt=''/>
              </div>
            }

        <Button color="primary" variant="contained" fullWidth type="submit">
          Post
        </Button>
         
       </form>

     </Paper>


    </Grid>


    </Layout>
  )
}

export default CreatePost