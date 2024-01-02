import React, { useEffect, useState } from 'react'
import { getAverageSesssions } from '../../utility/Utility';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer} from 'recharts';
import './averageSessions.css'
import ToolTipAverageSessions from './ToolTipAverageSessions/ToolTipAverageSessions';
import { CustomizedCursor } from './CustomizedCursor/CustomizedCursor';


export default function AverageSessions({userId}) {
    const [sessions, setSessions] = useState ([]);
  useEffect(() => {fetchSessions()}, []);
  
  async function fetchSessions () {
    const info = await getAverageSesssions(userId); 
    setSessions(info)
  }

    
  return (
    <div className='averageSessions'>
      <ResponsiveContainer width="100%" height="100%">
          <LineChart data={sessions} margin={{ top: 40, right: 30, left: 30, bottom: 5 }}>
            <text className='average_session_text' x="25" y="45" fontSize="15" fill="white"opacity={0.7}>Durée moyenne des sessions</text>
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
