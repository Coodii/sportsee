import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {getDataUser} from '../../utility/Utility';
import KeyData from '../../components/KeyData/KeyData';
import calorieImg from '../../assets/calories-icon.png';
import carbsImg from '../../assets/carbs-icon.png'
import fatImg from '../../assets/fat-icon.png'
import proteinImg from '../../assets/protein-icon.png'
import DailyActivity from '../../components/DailyActivities/DailyActivities';
import AverageSessions from '../../components/AverageSessions/AverageSessions';
import Performances from '../../components/Performances/Performances';
import Score from '../../components/Score/Score';
import Header from '../../components/Header/Header';
import './home.css';
import Footer from '../../components/Footer/Footer';


function Home() {
  const {id} = useParams();
  let parsedId = parseInt(id);
  const [userInformations, setUserInformations] = useState ([]);
  useEffect(() => {fetchInformationUser()}, []);
  
  async function fetchInformationUser () {
    const info = await getDataUser(parsedId); 
    setUserInformations(info)
  }
  
  return (
    <div className='homePage'>
      <Header/>
      <main>
        <h1 className='user_title'>Bonjour <span className='user'> {userInformations.userInfos?.firstName}</span></h1>
        <p className='objective_text'>Félicitations! Vous avez explosés vos objectifs hier 👏</p>
        <article className='dashboard'>
          <div className='dashboard_graph'>
            <div className='dashboard_row activity'>
            <DailyActivity userId ={parsedId}/>
            </div>
            <div className='dashboard_row'>
            <AverageSessions userId ={parsedId}/>
            <Performances userId ={parsedId}/>
            <Score userId={parsedId}/>
            </div>
          </div>
          <div className='keyData_Card'>
              <KeyData image={calorieImg} value={userInformations.keyData?.calorieCount + 'kCal'} text = 'Calories' /> 
              <KeyData image={proteinImg} value={userInformations.keyData?.proteinCount + 'g'} text = 'Protéines' /> 
              <KeyData image={carbsImg} value={userInformations.keyData?.carbohydrateCount + 'g'} text = 'Glucides' /> 
              <KeyData image={fatImg} value={userInformations.keyData?.lipidCount + 'g'} text = 'Lipides' /> 
          </div>
        </article>
      </main>
      <Footer/>
    </div>
  )
} 

export default Home