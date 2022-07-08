// import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const VolunteerDetails = () => {

const params= useParams();

  return (
    <>
    <div>id</div>
    <div>name</div>
    <div>email</div>
    <div>Client stuff : {JSON.stringify(params)}</div>
    </>
  )
}

export default VolunteerDetails