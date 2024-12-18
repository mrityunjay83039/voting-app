import { Box, Typography } from '@mui/material'
import ErrorImage from '../assets/404.gif'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {

  const navigate = useNavigate();

  useEffect(()=>{
    const timeOutId = setTimeout(()=>{
      navigate(-1)
    },6000)

    return ()=> clearTimeout(timeOutId)
  },[])

  return (
    <Box>
      <img src={ErrorImage} alt='page not found'/>
      <Typography variant='h1'>404</Typography>
      <Typography>Page Not Found. You will be redirected soon on previous page.</Typography>
    </Box>
  )
}

export default ErrorPage
