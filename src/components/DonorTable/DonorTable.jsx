import {useEffect, useState} from 'react';
import "./DonorTable.scss";
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {field: 'name',headerName: 'Name',width: 150,editable: true,},
  {field: 'surname',headerName: 'Surname', width: 150, editable: true,},
  {field: 'email',headerName: 'Email',type: 'number',width: 110,editable: true,},
  {field: 'phone',headerName: 'Phone',type: 'number',width: 110,editable: true,},
  {field: 'numberOfShoes',headerName: 'Amount (shoes)',width: 150,editable: true,},
  {field: 'dropPoints',headerName: 'Droppoint',width: 150,editable: true,},
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

  
  return (
    <Box sx={{ height: 500, width: '90%' }} className="Box-Table">
    <DataGrid
      getRowId={(row) => row._id}
      rows={data}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
    />
  </Box>
  )
}

export default DonorTable