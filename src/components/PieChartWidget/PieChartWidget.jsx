import "./PieChartWidget.scss";
import React from 'react'
import { Paper } from "@mui/material";
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';
import { PieChart, Pie, Cell, Tooltip} from 'recharts';

const data = [
  { name: 'Depok', value: 400 },
  { name: 'Cilegon', value: 300 },
  { name: 'Lampung', value: 300 },
  { name: 'Bandung', value: 200 },
  { name: 'Jogjakarta', value: 400 },
  { name: 'Semarang', value: 300 },
  { name: 'Surabaya', value: 300 },
  { name: 'Malang', value: 200 },
];

const COLORS = ['#087776', '#3e908f', '#396463', '#84d3d1', '#055654', '#98c3c2', '#0abeba', '#389391'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const PieChartWidget = () => {

  return (
    <Paper elevation={3} id="paper">
      <div className="title">Shoes by Drop Points</div>

      <PieChart width={400} height={310}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={91}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      <div id="chart-description">
      <ul>
      <li className="pc-text"><FiberManualRecordIcon className='icon' style={{ color: "#087776" }}/>Depok</li>
      <li className="pc-text"><FiberManualRecordIcon className='icon'style={{ color: "#3e908f" }}/>Cilegon</li>
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