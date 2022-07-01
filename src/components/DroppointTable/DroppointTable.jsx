import {useEffect, useState} from 'react';
import "./DroppointTable.scss";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from 'axios';

const DroppointTable = () => {


  const [data, setData]=useState([])
  const token = localStorage.getItem('token')

  axios.interceptors.request.use(
    config=>{
      config.headers.authorization =`Bearer ${token}`;
      return config
    },
    error =>{
      return Promise.reject(error)
    }
  )

  useEffect(()=> {
    axios.get('https://reviver-backend.herokuapp.com/droppoints')
    .then(res=> {
      console.log("Data is", res.data)
      setData(res.data)
    })
    .catch(err=>console.log(err))
  }, [])
  return (
    <TableContainer component={Paper} className="table">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell className="tableCell">Name</TableCell>
            <TableCell className="tableCell">Phone</TableCell>
            <TableCell className="tableCell">City</TableCell>
            <TableCell className="tableCell">ZipCode</TableCell>
            <TableCell className="tableCell">Status</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row._id}>
              <TableCell className="tableCell">{row.name}</TableCell>
              <TableCell className="tableCell">{row.phone}</TableCell>
              <TableCell className="tableCell">{row.city}</TableCell>
              <TableCell className="tableCell">{row.zipCode}</TableCell>
              <TableCell className="tableCell">
                <span className="status"> Status </span>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default DroppointTable