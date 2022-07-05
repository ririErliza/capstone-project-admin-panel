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

      <PieChart width={400} height={400}>
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
      <li className="pc-text"><FiberManualRecordIcon className='icon' style={{ color: "blue" }}/>Depok</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "green" }}/>Cilegon</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "yellow" }}/>Lampung</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "purple" }}/>Bandung</li>
    </ul>
    <ul>
     
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "blue" }}/>Jogjakarta</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "blue" }}/>Semarang</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "blue" }}/>Surabaya</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "blue" }}/>Malang</li>
    </ul>
      </div>
    
    
    </Paper>
  )
}

export default PieChartWidget