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
    const info = await getAverageSesssions(12); 
    setSessions(info)
  }

  function CustomizedCursor({ points }) {
    return (
      <Rectangle
        fill="black"
        opacity={0.1}
        x={points[0].x}
        width={3000}
        height={3000}
      />
    );
    }
    
  return (
    <div className='averageSessions'>
      <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sessions} margin={{ top: 40, right: 30, left: 30, bottom: 5 }}>
            <text x="25" y="45" fontSize="20" fill="white"opacity={0.7}>Durée moyenne des sessions</text>
            <XAxis dataKey="day" tickLine={false}
              axisLine={false} tick={{ fill: '#FFFFFF', opacity: '0.7' }} dy={-10}/>
            <YAxis hide domain={['dataMin -20', 'dataMax + 30']}/>
            <Line type="natural" dataKey="sessionLength" stroke="#FFFFFF" strokeWidth={2} dot={false} />
            <Tooltip content={<ToolTipAverageSessions/>} cursor={<CustomizedCursor/>} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    );
}
