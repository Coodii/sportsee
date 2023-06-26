import React from 'react'
import { useEffect, useState } from 'react';
import { getAverageSesssions } from '../../Utility/Utility';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, Rectangle } from 'recharts';
import './averageSessions.css'
import ToolTipAverageSessions from './ToolTipAverageSessions/ToolTipAverageSessions';


export default function AverageSessions() {
    const [sessions, setSessions] = useState ([]);
  useEffect(() => {fetchSessions()}, []);
  //useEffect(() => {}, [userInformation]); 
  
  async function fetchSessions () {
    const info = await getAverageSesssions(18); 
    setSessions(info)
  }

  function CustomizedCursor({ points }) {
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        x={points[0].x}
        width={3000}
        height={300}
      />
    );
  }

  console.log(sessions);
  return (
    <ResponsiveContainer width="30%" height="100%" className={'averageSessions_graph'}>
        <LineChart width={300} height={100} data={sessions}>
            <XAxis dataKey="day" tickLine={false}
              axisLine={false} />
            <YAxis hide domain={['dataMin -10', 'dataMax + 10']}/>
          <Line type="monotone" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} />
          <Tooltip content={<ToolTipAverageSessions/>} cursor={<CustomizedCursor/>} />
        </LineChart>
      </ResponsiveContainer>
    );
}
