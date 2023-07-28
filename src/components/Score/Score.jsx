import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, RadialBarChart, RadialBar, Pie, PieChart } from 'recharts';
import { getActivity, getDataUser, getPerformances, getScore } from '../../Utility/Utility';
import { useEffect, useState } from 'react';
import './score.css';


function Score()  {

const [score, setScore] = useState ([]);
const displayScore = '';
  useEffect(() => {fetchScore()}, []);
  //useEffect(() => {}, [userInformation]); 
  
  async function fetchScore () {
    const info = await getScore(12); 
    setScore(info)
  }




    return (
      <div className='score'>
        <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart data={score} innerRadius={120} barSize={10} startAngle={90} endAngle={450} fill={'#FF0000'}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="score" cornerRadius={5} background />
          <text x="50%" y="50%" textAnchor="middle" fontSize="26" fontWeight="700" fill="black">
            
          </text>
          <text x="50%" y="55%" textAnchor="middle" fontSize="16" fill="gray" fontWeight="500">
            de votre objectif
          </text>
        </RadialBarChart>
      </ResponsiveContainer>
      </div>
    )
      
  }

  export default Score