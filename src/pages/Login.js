import { Button, Grid, Link, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import ApartmentIcon from '@mui/icons-material/Apartment';
import {  useFormik } from 'formik';
import { loginUserAction } from '../redux/auth/auth.action';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const paperstyle = {padding:20,height:"60vh", width:290,margin:"20px auto"}
const buttonst = {margin:8}
const Login = () => {

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const formik = useFormik({
    initialValues:{
        email:"",
    password:""
    },

    onSubmit:(values)=>{
     
      console.log(values)
      dispatch(loginUserAction({data:values}))

      navigate("/middle")
       
     }
})
  return (
    <Grid sx={{marginRight:{xs:14}}}>
     <Paper elevation={10} style={paperstyle}>
          <Grid align="center">
          <Typography fontFamily="serif" color={'blue'} variant='h6' >
        <ApartmentIcon/>
        RENTOFY
        </Typography>

          </Grid>
         <form onSubmit={formik.handleSubmit}>
          
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

        <Button style={buttonst} color="primary" variant="contained" fullWidth type="submit">
          Login..
        </Button>
         </form>

        <Typography>
       Don't Have an Account 
       <Link href="/register">
       Register
       </Link>
        </Typography>
     </Paper>
    </Grid>
  )
}

export default Login