import { Explicit, Notifications, ShoppingCart } from '@mui/icons-material'
import { AppBar, Toolbar, styled, Box, Button, Avatar, Badge, MenuItem, Menu } from '@mui/material'
import MenuIcon from "@mui/icons-material/Menu";
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const PageToolBar = styled(Toolbar)(({theme})=>({
        padding:theme.spacing(2),
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:theme.palette.primary.main,
    }))
    const NavLeftSide = styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        gap:theme.spacing(2)
    }))
    const PageLogoWrapper = styled(Box)(({theme})=>({
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        color:theme.palette.primary.secondary,
        fontSize:"24px",
        fontWeight:"bold",
    }))

    const NavListContainer = styled(Box)(({theme})=>({
        display:"flex",
        marginTop:"4.5px",
        alignItems:"center",
        justifyContent:"center",
        gap:theme.spacing(0.8),
        [theme.breakpoints.down("sm")]:{
            display:"none"
        }
    }))
    const NavListIcon = styled(Box)(({theme})=>({
        [theme.breakpoints.down("sm")]:{
            display:"block"
        },
        [theme.breakpoints.up("sm")]:{
            display:"none"
        }
    }))
    const NavItems = styled(Button)(({theme})=>({
        color:theme.palette.primary.secondary,
        display:"flex",
        alignItems:"center",
    }))
    const NavRightSide = styled(Box)(({theme})=>({
        display:'flex',
        flexDirection:"row-reverse",
        alignItems:'center',
        gap:theme.spacing(2)
    }))
    const IconsWrapper = styled(Box)(({theme})=>({
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"center",
        gap:theme.spacing(0)
    }))
    const [anchorEl, setAnchorEl]=useState(false)
    const handleOpenNav = () =>{
        setAnchorEl(true)
    }
    const handleClose = () =>{
        setAnchorEl(false)
    }
  return (
    <>
      <AppBar position="sticky">
        <PageToolBar>
          <NavLeftSide>
            <NavListIcon>
              <MenuIcon onClick={handleOpenNav} sx={{ mt: "5px" }} />
            </NavListIcon>
            <Menu
              sx={{ mt: "50px" }}
              anchorOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              transformOrigin={{
                vertical: "bottom",
                horizontal: "top",
              }}
              id="basic-menu"
              anchorEl={anchorEl}
              open={anchorEl}
              onClose={handleClose}
              MenuListProps={{
                "aria-labelledby": "basic-button",
              }}
            >
              <MenuItem onClick={handleClose}>
                {" "}
                <NavItems>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#292828",
                    }}
                    to={"/"}
                  >
                    Home
                  </Link>
                </NavItems>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <NavItems>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#292828",
                    }}
                    to={"/products"}
                  >
                    Products
                  </Link>
                </NavItems>
              </MenuItem>
              <MenuItem onClick={handleClose}>
                {" "}
                <NavItems>
                  <Link
                    style={{
                      textDecoration: "none",
                      color: "#292828",
                    }}
                    to={"/login-register"}
                  >
                    LoginRegister
                  </Link>
                </NavItems>
              </MenuItem>
            </Menu>

            <PageLogoWrapper>RetardedE</PageLogoWrapper>
            <NavListContainer>
              <NavItems>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#dedcdc",
                  }}
                  to={"/"}
                >
                  Home
                </Link>
              </NavItems>
              <NavItems>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#dedcdc",
                  }}
                  to={"/products"}
                >
                  Products
                </Link>
              </NavItems>
              <NavItems>
                <Link
                  style={{
                    textDecoration: "none",
                    color: "#dedcdc",
                  }}
                  to={"/login-register"}
                >
                  LoginRegister
                </Link>
              </NavItems>
            </NavListContainer>
          </NavLeftSide>
          <NavRightSide>
            <Avatar
              src="src/assets/012c1ed6-18a9-4981-aac1-8d225931cad8.png"
              sx={{ height: "40px", width: "40px", cursor: "pointer" }}
            />
            <IconsWrapper>
              <Link
                style={{
                  textDecoration: "none",
                  color: "white",
                  marginTop:"5px"
                }}
                to={"/cart"}
              >
                <ShoppingCart sx={{ cursor: "pointer" }} />
              </Link>
              <Badge badgeContent={4} color="error">
                <Notifications sx={{ cursor: "pointer" }} />
              </Badge>
            </IconsWrapper>
          </NavRightSide>
        </PageToolBar>
      </AppBar>
    </>
  );
}
