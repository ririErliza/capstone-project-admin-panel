import {useEffect, useState} from 'react';
import "./DroppointTable.scss";
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';

const columns = [
  { field: '_id', headerName: 'ID', width: 200 },
  {
    field: 'name',
    headerName: 'Name',
    width: 170,
    editable: true,
  },
  {
    field: 'phone',
    headerName:'Phone',
    type: 'number',
    width: 170,
    editable: true,
  },
  {
    field: 'city',
    headerName: 'City',
    width: 170,
    editable: true,
  },
  {
    field: 'zipCode',
    headerName: 'Zip Code',
    width: 170,
    editable: true,
  },

];

const DroppointTable = () => {


  const [data, setData]=useState([])
  const apiUrl = 'https://reviver-backend.herokuapp.com'
  const token = localStorage.getItem('token')

  const authAxios = axios.create({
    baseURL:apiUrl,
    headers: {Authorization :`Bearer ${token}`}
  })
      

  useEffect(()=> {
    authAxios.get(`${apiUrl}/droppoints`)
    .then(res=> {
      console.log("Data is", res.data)
      setData(res.data)
    })
    .catch(err=>console.log(err))
  }, 
 // eslint-disable-next-line
  [])

  
  return (
    <Box sx={{ height: 500, width: '80%' }} className="Box-Table">
    <DataGrid
      getRowId={(row) => row._id}
      rows={data}
      columns={columns}
      pageSize={5}
      rowsPerPageOptions={[5]}
      checkboxSelection
      disableSelectionOnClick
      loading={!data.length}
    />
  </Box>
  )
}

export default DroppointTable