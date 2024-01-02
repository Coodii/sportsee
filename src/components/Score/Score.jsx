import {ResponsiveContainer, PolarAngleAxis, RadialBarChart, RadialBar } from 'recharts';
import {getScore } from '../../utility/Utility';
import { useEffect, useState } from 'react';
import './score.css';


function Score({userId})  {

  const [score, setScore] = useState ([]);
  useEffect(() => {fetchScore()}, []);
  
  async function fetchScore () {
    const info = await getScore(userId); 
    setScore(info);
  }

  return (
    <div className='score'>
      <div className='whiteCircle'></div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart data={score} innerRadius={120} barSize={10} startAngle={90} endAngle={450} fill={'#FF0000'}>
          <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
          <RadialBar dataKey="score" cornerRadius={5} background />
          <text x="50%" y="45%" textAnchor="middle" fontSize="26" fontWeight="700" fill="black">{score[0]?.score} %</text>
          <text x="50%" y="55%" textAnchor="middle" fontSize="16" fill="gray" fontWeight="500">de votre objectif</text>
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
)
      
}

  export default Score