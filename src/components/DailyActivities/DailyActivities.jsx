import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getActivity } from '../../utility/Utility';
import { useEffect, useState } from 'react';
import {ToolTipActivities} from './ToolTipActivity/ToolTipActivities';
import './dailyActivity.css';



function DailyActivity({userId})  {

  const [activities, setActivities] = useState ([]);
  useEffect(() => {fetchActivities()}, []);
  
  async function fetchActivities () {
    const info = await getActivity(userId); 
    setActivities(info)
  }


  return (
    <div className='dailyActivity'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart width={500} height={300} data={activities} margin={{ top: 40, right: 30, left: 30, bottom: 40 }}>
          <text className = 'daily_activity_text' x="20" y="40" textAnchor="start" fontSize="15" fontWeight="700" fill="black">
            Activités quotidiennes
          </text>
          <CartesianGrid strokeDasharray="3 3" vertical = {false}/>
          <XAxis dataKey="index" tickLine={false} />
          <YAxis dataKey='calories' type="number" yAxisId= 'calories' hide/>
          <YAxis dataKey='kilogram' type="number" orientation='right' axisLine={false} tickLine={false} domain={['dataMin - 2', 'dataMax + 2']} />
          <Tooltip content={<ToolTipActivities/>}/>
          <Legend verticalAlign='top' align='right' iconType='circle' iconSize='10' wrapperStyle={{ marginTop: '-20px' }} />
          <Bar dataKey="kilogram" fill="#282D30" radius = {[5,5,5,5]} barSize={10} name={'Poids (kg)'} />
          <Bar yAxisId='calories' dataKey="calories" fill="#E60000" radius = {[5,5,5,5]} barSize={10} name={'Calories brûlées (kCal)'} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}

  export default DailyActivity