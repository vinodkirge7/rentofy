import { Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import {  useFormik } from 'formik';
import { useDispatch } from 'react-redux';
import { registerUserAction } from '../redux/auth/auth.action';
import { useNavigate } from 'react-router-dom';

const paperstyle = {padding:20,height:"60vh", width:290,margin:"20px auto auto"}
const buttonst = {margin:8}
const Register = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
      name:"",
        email:"",
    password:""
    },

    onSubmit:(values)=>{
     
      navigate("/middle")
      console.log(values)
      dispatch(registerUserAction({data:values}))
       
     }
})
  return (
    <Grid sx={{marginRight:{xs:14}}}>
     <Paper elevation={10} style={paperstyle}>
          <Grid align="center">
          <Typography color={'blue'} variant='h6' >
        <ApartmentIcon />
        RENTOFY
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
          id="email"
          variant='standard'
          name="email"
          label="Enter Email"
          value={formik.values.email}
          onChange={formik.handleChange}
        />

<TextField
          fullWidth
          id="password"
          name="password"
          label="Password"
          variant='standard'
          type="Set password"
          value={formik.values.password}
          onChange={formik.handleChange}
        />

        <Button style={buttonst}
           color="primary" variant="contained" fullWidth type="submit">
          Submit
        </Button>
           </form>

        <Typography>
       Do You Have an Account 
       <Link href="/login">
       Login
       </Link>
        </Typography>
     </Paper>
    </Grid>
  )
}

export default Register