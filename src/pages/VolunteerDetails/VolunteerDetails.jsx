// import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom'


const VolunteerDetails = () => {

const params= useParams();

console.log("paramsId:", params.id, "params:", params)

const [data, setData]=useState([])
  const apiUrl = 'https://reviver-backend.herokuapp.com'
  const token = localStorage.getItem('token')

  const authAxios = axios.create({
    baseURL:apiUrl,
    headers: {Authorization :`Bearer ${token}`}
  })
      

  useEffect(()=> {
    authAxios.get(`${apiUrl}/volunteers/`+ params.id)
    .then(res=> {
      console.log("Data is", res.data)
      setData(res.data)
    })
    .catch(err=>console.log(err))
  }, 
 // eslint-disable-next-line
  [])

  return (
    <>
    <div>id : {data._id}</div>
    <div>name : {data.name}</div>
    <div>email: {data.email}</div>
    <div>Client stuff : {params.id}</div>
    </>
  )
}

export default VolunteerDetails