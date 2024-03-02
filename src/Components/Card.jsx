import { Typography, styled, Box, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export default function Card({image, name, price, id, description}) {
    const CardDiv = styled(Box)(({theme})=>({
        height:"700px",
        width:"300px",
        display:"flex",
        cursor:"pointer",
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:theme.palette.primary.main,
        flexDirection:"column",
        borderRadius:theme.spacing(3),
        boxShadow:theme.shadows[7]
    }))
    const CardAction = styled(Box)(({theme})=>({
        display:"flex",
        justifyContent:"center",
        height:'18%',
    }))
    const CardImage = styled('img')(({theme})=>({
        height:"60%",
        width:"100%",
        objectFit:"cover",
    }))
    const CardData = styled(Box)(({theme})=>({
        paddingTop:theme.spacing(1),
        display:"flex",
        height:'20%',
        flexDirection:"column",
        alignItems:"center",
        gap:theme.spacing(1),
        color:theme.palette.primary.secondary
    }))
  return (
    <CardDiv>
      <CardImage objectFit='cover' src={image} />
      <CardData>
        <Typography textAlign={'center'} variant="h6">{name}</Typography>
        <Typography variant="body6">{description}</Typography>
        <Typography variant="body6">{price}</Typography>
      </CardData>
      <CardAction>
        <Button disableRipple sx={{ color: "#dedcdc" }}>
          <Link
            style={{ color: "#dedcdc", textDecoration: "none" }}
            to={`/product-details/${id}/name`}
          >
            More Information
          </Link>
        </Button>
      </CardAction>
    </CardDiv>
  );
}
