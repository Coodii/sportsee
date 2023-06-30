import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getActivity } from '../../Utility/Utility';
import { useEffect, useState } from 'react';
import {CustomTooltip} from './ToolTipActivity/ToolTipActivities';
import './dailyActivity.css';



function DailyActivity()  {

const [activities, setActivities] = useState ([]);
  useEffect(() => {fetchActivities()}, []);
  //useEffect(() => {}, [userInformation]); 
  
  async function fetchActivities () {
    const info = await getActivity(18); 
    setActivities(info)
  }


    return (
      <div className='dailyActivity'>
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          width={500}
          height={300}
          data={activities}
          margin={{ top: 40, right: 30, left: 30, bottom: 40 }}
        >
          <text x="200" y="40" textAnchor="middle" fontSize="22" fontWeight="700" fill="black">
            Activités quotidiennes
          </text>
          <CartesianGrid strokeDasharray="3 3" vertical = {false}/>
          <XAxis dataKey="index" tickLine={false} />
          <YAxis dataKey='calories' type="number" yAxisId= 'calories' hide/>
          <YAxis dataKey='kilogram' type="number" orientation='right' axisLine={false} tickLine={false} domain={['dataMin - 2', 'dataMax + 2']} />
          <Tooltip content={CustomTooltip}/>
          <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-20px' }} />
          <Bar dataKey="kilogram" fill="#282D30" radius = {[5,5,5,5]} barSize={10} name={'Poids (kg)'} />
          <Bar yAxisId='calories' dataKey="calories" fill="#E60000" radius = {[5,5,5,5]} barSize={10} name={'Calories brûlées (kCal)'} />
        </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }

  export default DailyActivity