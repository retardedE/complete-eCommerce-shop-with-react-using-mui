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
        marginBottom:'20vh',
        backgroundColor:theme.palette.primary.main
    }))
    const [query,setQuery]=useState([])
    useEffect(() => {
      (async () => {
        const res = await fetch(
          "https://asos2.p.rapidapi.com/products/v2/list?store=US&offset=0&categoryId=4209&limit=48&country=US&sort=freshness&currency=USD&sizeSchema=US&lang=en-US",
          {
            method: "GET",
            headers: {
              "X-RapidAPI-Key":
                "856b3da013mshff2e5f950c53a5fp1e31c9jsn214b232ca85b",
              "X-RapidAPI-Host": "asos2.p.rapidapi.com",
            },
          }
        );
        const data = await res.json();
        setQuery(data.products);
      })();
    }, []);
    console.log(query)
    const queryMapped = query?.map((e,index)=><Card key={index} image={e?.imageUrl} name={e?.brandName} description={e?.colour} id={e?.id} price={e?.price?.current?.text} />)
    return (
      <QueryContainer>
        {query?.length === 0 ? (
          <Box sx={{height:"80vh", width:"100%", display:"flex", flexDirection:"row", alignItems:"center", justifyContent:"center", backgroundColor:"#292828"}}>
            <MoonLoader style={{ height: "10vh" }} />
          </Box>
        ) : (
          queryMapped
        )}
      </QueryContainer>
    );
}
