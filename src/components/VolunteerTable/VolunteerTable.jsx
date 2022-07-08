import {useEffect, useState} from 'react';
import "./VolunteerTable.scss";
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 100,
    editable: true,
  },
  {
    field: 'surname',
    headerName: 'Surname',
    width: 100,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 110,
    editable: true,
  },
  {
    field: 'phone',
    headerName: 'Phone',
    width: 110,
    editable: true,
  },
  {
    field: 'choiceOfJob',
    headerName: 'Job',
    width: 150,
    editable: true,
  },
  {
    field: 'location',
    headerName: 'Location',
    width: 100,
    editable: true,
  },
  {
    field: 'duration',
    headerName: 'Duration',
    width: 125,
    editable: true,
  },



];

const VolunteerTable = () => {


  const [data, setData]=useState([])
  const apiUrl = 'https://reviver-backend.herokuapp.com'
  const token = localStorage.getItem('token')

  const authAxios = axios.create({
    baseURL:apiUrl,
    headers: {Authorization :`Bearer ${token}`}
  })
      

  useEffect(()=> {
    authAxios.get(`${apiUrl}/volunteers`)
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
          
          <Link to={"/volunteers/" + params.row._id}>
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
    <Box sx={{ height: 510, width: '90%' }} className="Box-Table">
    <DataGrid
      getRowId={(row) => row._id}
      rows={data}
      columns={columns.concat(actionColumn)}
      pageSize={7}
      rowsPerPageOptions={[7]}
      loading={!data.length}
    
    />
  </Box>
  )
}


export default VolunteerTable