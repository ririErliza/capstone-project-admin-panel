import {useEffect, useState} from 'react';
import "./ProductsTable.css";
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid} from '@mui/x-data-grid';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const columns = [
  { field: '_id', headerName: 'ID', width: 90 },
  {
  
    headerName: 'Product',
    width: 110,
    editable: true,
    renderCell: (params) => {
      return (
        <div className="productListItem">
          <img className="productListImg" src={params.row.img} alt="" />
        </div>
      );
    },
  },
  {
    field: 'title',
    headerName: 'Title',
    width: 100,
    editable: true,
  },
  {
    field: 'desc',
    headerName: 'Description',
    width: 100,
    editable: true,
  },
 
  {
    field: 'color',
    headerName: 'Color',
    width: 110,
    editable: true,
  },
  {
    field: 'price',
    headerName: 'Price',
    width: 150,
    editable: true,
  },
  
  {field: 'inStock',width: 120,editable: true,headerName: 'In Stock',
  renderCell: (params) => {
    return (
      <div class={params.row.inStock === true ? "true-status" : "false-status"}>
        {params.row.inStock}
        <span>
        {params.row.inStock === true ? "true" : "false"}
        </span>
      </div>
    );
  },}



];

const ProductsTable = () => {


  const [data, setData]=useState([])
  const apiUrl = 'https://backend-reviver.herokuapp.com'
  const token = localStorage.getItem('token')

  const authAxios = axios.create({
    baseURL:apiUrl,
    headers: {Authorization :`Bearer ${token}`}
  })
      

  useEffect(()=> {
    authAxios.get(`${apiUrl}/products`)
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
          
          <Link to={"/products/" + params.row._id}>
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
      checkboxSelection
      disableSelectionOnClick
    
    />
  </Box>
  )
}


export default ProductsTable