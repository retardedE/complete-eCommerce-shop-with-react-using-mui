import React, { useState, useEffect } from 'react'
import Card from '../../Components/Card';
import { Box } from '@mui/material';
import styled from '@emotion/styled';
import { MoonLoader } from 'react-spinners';
export default function Products() {
    const QueryContainer = styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        flexDirection: "row" ,
        justifyContent:"center", 
        gap:theme.spacing(8),
        flexWrap:"wrap",
        padding:theme.spacing(3),
        marginBottom:'10vh',
        backgroundColor:theme.palette.primary.main
    }))
    const [query,setQuery]=useState([])
    useEffect(() => {
      (async () => {
        const res = await fetch("https://fakestoreapi.com/products", {
          method: "GET",
        });
        const data = await res.json();
        setQuery(data);
      })();
    }, []);
    console.log(query)
    const queryMapped = query?.map((e,index)=><Card key={index} image={e?.image} name={e?.title} description={e?.category} id={e?.id} price={e?.price} />)
    return (
      <QueryContainer>
        {query?.length === 0 ? (
          <Box sx={{height:"80vh", width:"100%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", backgroundColor:"#292828"}}>
            <MoonLoader />
          </Box>
        ) : (
          queryMapped
        )}
      </QueryContainer>
    );
}
