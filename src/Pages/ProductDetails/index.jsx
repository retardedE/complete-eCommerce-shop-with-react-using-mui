import * as React from "react";
import { useEffect, useState, useRef } from "react";
import { MoonLoader } from "react-spinners";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { styled, Box } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem } from "../../store/slice/CartSlice";
export default function MediaCard() {
  const x = useParams();
  const {list}=useSelector(state=>state.cart)
  const quantityProduct=list.find(e=>{
    if(e.id==x.id){
      return true
    }
  })?.quantity
  const dispatch=useDispatch()
  const CardContainer = styled(Box)(({theme})=>({
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
    height:"80vh",
    backgroundColor:theme.palette.primary.main
  }))
  const [details, setDetails] = useState();
  const divEl = useRef();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${x.id}`, {
      method: "GET"
    })
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [x.id]);
  return (
    <>
      {details === undefined ? (
        <Box
          sx={{
            height: "80vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#292828",
          }}
        >
          <MoonLoader />
        </Box>
      ) : (
        <CardContainer>
          <Card
            sx={{
              height: { sm: "700px", xs: "400px" },
              width: "300px",
              backgroundColor: "#292828",
            }}
          >
            <CardMedia
              sx={{ height: { sm: "63%", xs: "50%" } }}
              image={details?.image}
              title="green iguana"
            />
            <CardContent>
              <Typography
                textAlign={"center"}
                color={"#dedcdc"}
                gutterBottom
                variant="h5"
                component="div"
              >
                {details?.title}
              </Typography>
              <Typography
                textAlign={"center"}
                variant="body2"
                color={"#dedcdc"}
              >
                {details?.price}
              </Typography>
            </CardContent>
            <CardActions sx={{ display: "flex", justifyContent: "center" }}>
              <Button
                onClick={() => dispatch(addItem(details))}
                color="success"
                size="small"
              >
                <AddIcon />
              </Button>
              {quantityProduct && (
                <Typography color={"#dedcdc"}>{quantityProduct}</Typography>
              )}
              <Button
                onClick={() => dispatch(removeItem(details?.id))}
                color="error"
                size="small"
              >
                <RemoveIcon />
              </Button>
            </CardActions>
          </Card>
        </CardContainer>
      )}
    </>
  );
}
