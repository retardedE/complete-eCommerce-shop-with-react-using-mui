import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Box, Button, TableFooter, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, removeAll } from '../../store/slice/CartSlice';
const TableBoxContainer = styled(Box)(({theme})=>({
  display:'flex',
  justifyContent:"center",
  minHeight:"80vh",
  textAlign:"center",
  backgroundColor:theme.palette.primary.main,
  marginBottom:"10vh"
}))
const NoItemAlert = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  minHeight: "80vh",
  textAlign: "center",
  backgroundColor: theme.palette.primary.main,
  alignItems: "center",
}));
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.primary.secondary,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));


export default function CustomizedTables() {
  const {list}=useSelector((state)=>state.cart)
  console.log(list)
  const dispatch=useDispatch()
  return (
    <>
      {list.length === 0 ? (
        <NoItemAlert>
          <Typography fontWeight={"bold"} color={"#dedcdc"} variant="h2">
            Cart Is Empty!
          </Typography>
        </NoItemAlert>
      ) : (
        <TableBoxContainer>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell>Name</StyledTableCell>
                  <StyledTableCell align="center">Image</StyledTableCell>
                  <StyledTableCell align="center">Price</StyledTableCell>
                  <StyledTableCell align="center">Quantity</StyledTableCell>
                  <StyledTableCell align="center">Add/Remove</StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {list.map((e, index) => (
                  <StyledTableRow key={index}>
                    <StyledTableCell component="th" scope="row">
                      {e?.title}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <img
                        src={e?.image}
                        style={{ height: "60px", width: "60px" }}
                        alt="img"
                      />
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {e?.price}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      {e?.quantity}
                    </StyledTableCell>
                    <StyledTableCell align="center">
                      <Button
                        onClick={() => dispatch(addItem(e))}
                        color="success"
                        variant="contained"
                      >
                        +
                      </Button>
                      <Button
                        onClick={() => dispatch(removeItem(e?.id))}
                        color="error"
                        variant="contained"
                      >
                        -
                      </Button>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
              <TableFooter>
                <TableRow>
                  <TableCell >
                    <Button onClick={()=>dispatch(removeAll())} variant='outlined' color='error'>Clear All</Button>
                  </TableCell>
                </TableRow>
              </TableFooter>
            </Table>
          </TableContainer>
        </TableBoxContainer>
      )}
    </>
  );
}