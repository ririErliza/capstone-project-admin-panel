import React from 'react';
import TableList from '../../components/TableList/TableList';
import "./DonorList.scss"

const DonorList = () => {
  return (
    <div className='listContainer'>
      <div className="listTitle">Donor List</div>
      <TableList/>
    </div>
  )
}

export default DonorList