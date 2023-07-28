import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts';
import { getActivity, getPerformances } from '../../Utility/Utility';
import { useEffect, useState } from 'react';
import './performances.css'


function Performances()  {

const [performances, setPerformances] = useState ([]);
  useEffect(() => {fetchPerformances()}, []);
  //useEffect(() => {}, [userInformation]); 
  
  async function fetchPerformances () {
    const info = await getPerformances(12); 
    setPerformances(info)
  }

    return (
      <div className='performance'>
        <ResponsiveContainer width="100%" height="90%" >
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={performances} >
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" stroke="white" tickLine={false} dy={2} />
          <Radar name="Performance" dataKey="value" stroke="##FF0101B2" fill="#FF0101B2" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
      </div>
    )
      
  }

  export default Performances