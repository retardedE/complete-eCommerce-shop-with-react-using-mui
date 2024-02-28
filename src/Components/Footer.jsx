import { styled, Box, Typography } from '@mui/material'
import React from 'react'

export default function Footer() {
    const FooterContentContainer = styled(Box)(({theme})=>({
        display:'flex',
        alignItems:"center",
        justifyContent:"center",
        backgroundColor:theme.palette.primary.main,
        height:"20vh",
        width:"100%",
        position:"fixed",
        bottom:0,
        right:0,
        left:0,    
    }))
    const FooterMessageWrapper = styled(Typography)(({theme})=>({
        color:theme.palette.primary.secondary,
        fontWeight:"bold",
        fontFamily:"Roboto"
    }))
  return (
    <FooterContentContainer>
      <FooterMessageWrapper variant="h6">
        Made with <span style={{color:"red", fontSize:"30px"}}>♥</span> by Emad Alizade (RetardedE on Github)
      </FooterMessageWrapper>
    </FooterContentContainer>
  );
}
