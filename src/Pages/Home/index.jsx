import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Navigation, Pagination } from "swiper/modules";
import { Typography, Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <>
      <Swiper
        style={{
          position: "relative",
        }}
        navigation={true}
        modules={[Navigation]}
        className="mySwiper"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent:"center",
            left:"50%",
            top:"50%",
            transform:'translate(-50%,-50%)',
            gap: "30px",
            position: "absolute",
            textShadow: "10px 10px 10px black",
            zIndex: "1000",
          }}
        >
          <Typography
            textAlign={"center"}
            width={{ sm: "600px", xs: "300px", }}
            fontFamily={"Poppins"}
            color={"#dedcdc"}
            variant="h3"
          >
            Explore Newest Fashion Clothes In our Website
          </Typography>
          <Typography
            textAlign={"center"}
            width={{ sm: "800px", xs: "300px" }}
            fontFamily={"Poppins"}
            color={"#dedcdc"}
            variant="h6"
          >
            Best Prices & Qualities Offered
          </Typography>
          <Button
            color="error"
            variant="contained"
            sx={{ height: "50px", width: "300px", boxShadow:"10px 10px 10px rgba(0,0,0,0.8)" }}
          >
            <Link
              to={"/products"}
              style={{width:"100%", height:"100%", zIndex:"1000", marginTop:"15px" , textDecoration: "none", color: "#dedcdc" }}
            >
              Shop Now
            </Link>
          </Button>
        </Box>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1816865/pexels-photo-1816865.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/432059/pexels-photo-432059.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="img"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="https://images.pexels.com/photos/1417264/pexels-photo-1417264.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            style={{ objectFit: "cover" }}
            alt="img"
          />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
