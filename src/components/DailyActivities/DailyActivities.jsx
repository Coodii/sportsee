import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { getData } from '../../Utility/Utility';
import { useEffect, useState } from 'react';



function DailyActivity()  {

const [activities, setActivities] = useState ([]);
  useEffect(() => {fetchActivities()}, []);
  //useEffect(() => {}, [userInformation]); 
  
  async function fetchActivities () {
    const info = await getData(12, 'activity'); 
    setActivities(info.sessions)
  }
    console.log(activities)

    return (
      <ResponsiveContainer width="50%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={activities}
        >
          <CartesianGrid strokeDasharray="3 3" vertical = {false}/>
          <XAxis dataKey="index" />
          <YAxis dataKey='calories' type="number" yAxisId= 'calories' hide/>
          <YAxis dataKey='kilogram' type="number" orientation='right' axisLine={false} tickLine={false} domain={['dataMin - 2', 'dataMax + 2']} />
          <Tooltip />
          <Legend verticalAlign='top' align='right' iconType='circle' wrapperStyle={{ marginTop: '-23px' }} />
          <Bar dataKey="kilogram" fill="#282D30" radius = {[5,5,5,5]} barSize={10} name={'Poids (kg)'} />
          <Bar yAxisId='calories' dataKey="calories" fill="#E60000" radius = {[5,5,5,5]} barSize={10} name={'Calories brûlées (kCal)'} />
        </BarChart>
      </ResponsiveContainer>
    );
  }

  export default DailyActivity