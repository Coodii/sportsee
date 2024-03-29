import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, Radar } from 'recharts';
import { getPerformances } from '../../utility/Utility';
import { useEffect, useState } from 'react';
import './performances.css'


function Performances({userId})  {

  const [performances, setPerformances] = useState ([]);
  useEffect(() => {fetchPerformances()}, []);
  
  async function fetchPerformances () {
    const info = await getPerformances(userId); 
    setPerformances(info)
  }

    return (
      <div className='performance'>
        <ResponsiveContainer width="100%" height="100%" >
        <RadarChart className='radar_chart' cx="50%" cy="50%" outerRadius="50%" fontSize="13" data={performances} >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="white" tickLine={false} dy={2} />
          <Radar name="Performance" dataKey="value" stroke="##FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    )
      
  }

  export default Performances