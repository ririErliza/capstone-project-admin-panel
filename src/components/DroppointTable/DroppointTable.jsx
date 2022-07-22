import {useEffect, useState} from 'react';
import "./DroppointTable.scss";
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { Button } from '@mui/material';

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
  const apiUrl = 'https://backend-reviver.herokuapp.com'
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
            <Link to={"/droppoints/" + params.row._id} style={{ textDecoration: "none" }}>
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

export default DroppointTable