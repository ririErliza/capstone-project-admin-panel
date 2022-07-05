import "./PieChartWidget.scss";
import React from 'react'
import { Paper } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { PieChart, Pie, Tooltip} from 'recharts';

const data = [
  { name: 'Group A', value: 400 },
  { name: 'Group B', value: 300 },
  { name: 'Group C', value: 300 },
  { name: 'Group D', value: 200 },
  { name: 'Group E', value: 400 },
  { name: 'Group F', value: 300 },
  { name: 'Group G', value: 300 },
  { name: 'Group H', value: 200 },
];


const PieChartWidget = () => {

  return (
    <Paper elevation={3} id="paper">
      <div className="title">Shoes by Drop Points</div>

      <PieChart width={400} height={275}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#087776"
            label
          />
      
          <Tooltip />
        </PieChart>
      <div id="chart-description">
      <ul>
      <li className="pc-text"><FiberManualRecordIcon className='icon' style={{ color: "#087776" }}/>Depok</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "##3e908f" }}/>Cilegon</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "#396463" }}/>Lampung</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "#84d3d1" }}/>Bandung</li>
    </ul>
    <ul>
     
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "#055654" }}/>Jogjakarta</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "#98c3c2" }}/>Semarang</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "#0abeba" }}/>Surabaya</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "#389391" }}/>Malang</li>
    </ul>
      </div>
    
    
    </Paper>
  )
}

export default PieChartWidget