import React from 'react'
import AuthContext from '../../utils/AuthContext'
import { useContext } from 'react'
import { styled ,Box, TextField, Typography, Checkbox, FormControlLabel, Button} from '@mui/material'
import useFormFields from '../../utils/useFormFields'
export default function LoginRegister() {
  const {handleToken}=useContext(AuthContext)
  const [fields, handleChange]=useFormFields()
  const handleLogin = () => {
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(fields),
    })
      .then((res) => res.json())
      .then((data) => handleToken(data.token))
      .catch((err) => {
        console.log(err);
      });
  };
  const LoginFormContainer = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"70vh",
    backgroundColor:theme.palette.primary.main,
  }))
  const HeaderWrapper = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    flexDirection:"column",
    padding:theme.spacing(2)
  }))
  const LoginFormBox = styled(Box)(({theme})=>({
    display:"flex",
    flexDirection:"column",
    height:"450px",
    width:"600px",
    [theme.breakpoints.down("sm")]:{
    height:"400px",
    width:"300px",      
    },
    color:theme.palette.primary.secondary,
    "::placeholder":{
      color:"red"
    },
    padding:theme.spacing(5),
    backgroundColor:theme.palette.primary.secondary,
    boxShadow:theme.shadows[7],
    borderRadius:theme.spacing(2),
    border:`1px solid ${theme.palette.primary.main}`
  }))
  const CheckBoxWrapper = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:'center',
    color:theme.palette.primary.secondary,
    justifyContent:"space-between",
    marginTop:theme.spacing(2)
  }))
  const ButtonWrapper = styled(Box)(({theme})=>({
    display:"flex",
    alignItems:"end",
    gap:theme.spacing(1.5),
    height:"200px"
  }))
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
        backgroundColor: "#292828",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: { xs: "400px", sm: "450px" },
          color: "whitesmoke",
          backgroundColor: "#dedcdc",
          padding: "30px",
          width: { xs: "300px", sm: "600px" },
        }}
      >
        <HeaderWrapper sx={{ height: "120px" }}>
          <Typography color={"error"} gutterBottom variant="h4">
            Login
          </Typography>
          <Typography color={"primary"} textAlign={'center'} lineHeight={"25px"} fontSize={{xs:"12px", sm:'16px'}} variant="body6">
            username : mor_2314 / password : 83r5^_ <br/> From fakestoreapi.com
          </Typography>
        </HeaderWrapper>
        <TextField
          onChange={handleChange}
          name="username"
          fullWidth
          color="error"
          id="outlined-basic"
          label="Username Or Email"
          variant="filled"
          sx={{ mb: "20px" }}
        />
        <TextField
          onChange={handleChange}
          name="password"
          fullWidth
          color="error"
          id="filled-basic"
          label="Password"
          variant="filled"
        />
        <CheckBoxWrapper>
          <Box display={"flex"} alignItems={"center"}>
            <Checkbox />
            <Typography
              sx={{ display: { xs: "none", sm: "block" } }}
              marginTop={"3px"}
              color={"primary"}
            >
              I have read and agree Terms And Conditions
            </Typography>
            <Typography
              sx={{ display: { xs: "block", sm: "none", fontSize: "14px" } }}
              marginTop={"3px"}
              color={"primary"}
            >
              Terms of use
            </Typography>
          </Box>
          <Box>
            <Typography
              sx={{ cursor: "pointer", fontSize: { xs: "14px", sm: "16px" } }}
              color={"primary"}
            >
              Forget Password?
            </Typography>
          </Box>
        </CheckBoxWrapper>
        <ButtonWrapper>
          <Button onClick={handleLogin} variant="contained">
            Submit
          </Button>
          <Button color="error" variant="contained">
            Cancel
          </Button>
        </ButtonWrapper>
      </Box>
    </Box>
  );
}
