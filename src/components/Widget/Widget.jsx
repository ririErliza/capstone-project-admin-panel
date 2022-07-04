import "./Widget.scss";

import React from 'react'
import { Paper } from "@mui/material";

const Widget = (props) => {
  return (
    <Paper elevation={3} id="paper">
    
      <div className="widget-icon">{props.icon}</div>
      <div className="widget-number">{props.number}</div>
      <div className="widget-text">{props.text}</div>
    </Paper>
  )
}

export default Widget