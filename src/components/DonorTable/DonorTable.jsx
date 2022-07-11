import {useEffect, useState} from 'react';
import { Link } from "react-router-dom";
import "./DonorTable.scss";
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';

const columns = [
  {field: '_id', headerName: 'ID', width: 100 },
  {field: 'name', headerName: 'Name',width: 100,editable: true,},
  {field: 'surname', headerName: 'Surname', width: 100, editable: true,},
  {field: 'email', headerName: 'Email',width: 190,editable: true,},
  {field: 'phone', headerName: 'Phone',width: 160,editable: true,},
  {field: 'numberOfShoes', headerName: 'Amount (shoes)',type: 'number',width: 100,editable: true,},
  {field: 'dropPoints', headerName: 'Droppoint',width: 150,editable: true,},
];

const DonorTable = () => {


  const [data, setData]=useState([])
  const apiUrl = 'https://reviver-backend.herokuapp.com'
  const token = localStorage.getItem('token')

  const authAxios = axios.create({
    baseURL:apiUrl,
    headers: {Authorization :`Bearer ${token}`}
  })
      

  useEffect(()=> {
    authAxios.get(`${apiUrl}/donors`)
    .then(res=> {
      console.log("Data is", res.data)
      setData(res.data)
    })
    .catch(err=>console.log(err))
  }, 
 // eslint-disable-next-line
  [])

  
  const handleDelete = (_id) => {
    setData(data.filter((item) => item._id !== _id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to={"/donors/" + params.row._id} style={{ textDecoration: "none" }}>
              <Button className="editButton">Edit</Button>
            </Link>
            <Button
              className="deleteButton"
              onClick={() => handleDelete(params.row._id)}
            >
              Delete
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Box sx={{ height: 500, width: '90%' }} className="Box-Table">
    <DataGrid
      getRowId={(row) => row._id}
      rows={data}
      columns={columns.concat(actionColumn)}
      pageSize={7}
      rowsPerPageOptions={[7]}
      checkboxSelection
      disableSelectionOnClick
      loading={!data.length}
    />
  </Box>
  )
}

export default DonorTable