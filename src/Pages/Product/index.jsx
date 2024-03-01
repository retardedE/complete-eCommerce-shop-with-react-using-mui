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
                "8096c50e6cmshdfe46701ce1d8e6p1fdfa3jsn7bafbb978840",
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
        {query ? (  
          queryMapped
        ) : (
          <MoonLoader style={{ height: "10vh" }} color="#dedcdc" />
        )}
      </QueryContainer>
    );
}
