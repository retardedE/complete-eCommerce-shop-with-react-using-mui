import * as React from "react";
import { useEffect, useState, useRef } from "react";
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
    height:"70vh",
    backgroundColor:theme.palette.primary.main
  }))
  const [details, setDetails] = useState();
  const divEl = useRef();
  useEffect(() => {
    fetch(
      `https://asos2.p.rapidapi.com/products/v3/detail?id=${x.id}&lang=en-US&store=US&sizeSchema=US&currency=USD`,
      {
        method: "GET",
        headers: {
          "X-RapidAPI-Key":
            "8096c50e6cmshdfe46701ce1d8e6p1fdfa3jsn7bafbb978840",
          "X-RapidAPI-Host": "asos2.p.rapidapi.com",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => setDetails(data));
  }, [x.id]);
  return (
    <CardContainer>
      <Card
        sx={{ height: {sm:"500px",xs:'400px'}, width: "300px", backgroundColor: "#292828" }}
      >
        <CardMedia
          sx={{ height: {sm:"63%",xs:'50%'} }}
          image={`https://${details?.media?.images[0]?.url}`}
          title="green iguana"
        />
        <CardContent>
          <Typography
            color={"#dedcdc"}
            gutterBottom
            variant="h5"
            component="div"
          >
            {details?.brand?.name}
          </Typography>
          <Typography color={"#dedcdc"} variant="body2">
            {details?.name}
          </Typography>
          <Typography variant="body2" color={"#dedcdc"}>
            {details?.price?.current?.text}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={()=>dispatch(addItem(details))} color="success" size="small">
            <AddIcon />
          </Button>
          {quantityProduct&&<Typography color={'#dedcdc'}>{quantityProduct}</Typography>}
          <Button onClick={()=>dispatch(removeItem(details?.id))} color="error" size="small">
            <RemoveIcon />
          </Button>
        </CardActions>
      </Card>
    </CardContainer>
  );
}
