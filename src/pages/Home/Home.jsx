import React, { useEffect, useState } from 'react';
import { getData, getDataUser, isMock } from '../../Utility/Utility';
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
  
  const [userInformation, setUserInformations] = useState ([]);
  useEffect(() => {fetchInformationUser()}, []);
  //useEffect(() => {}, [userInformation]);
  
  async function fetchInformationUser () {
    const info = await getDataUser(18); 
    setUserInformations(info)
  }
  
  return (
    <div className='homePage'>
    <Header/>
    <main className='homePage'>
      
      <h1>Bonjour <span className='user'> {userInformation.userInfos?.firstName}</span></h1>
      <p>Félicitations! Vous avez explosés vos objectifs hier</p>
      <article className='dashboard'>
        <div className='dashboard_graph'>
          <div className='dashboard_row activity'>
          <DailyActivity/>
          </div>
          <div className='dashboard_row'>
          <AverageSessions/>
          <Performances/>
          <Score/>
          </div>
        </div>
        <div className='keyData_Card'>
            <KeyData image={calorieImg} value={userInformation.keyData?.calorieCount + 'kCal'} text = 'Calories' /> 
            <KeyData image={proteinImg} value={userInformation.keyData?.proteinCount + 'g'} text = 'Protéines' /> 
            <KeyData image={carbsImg} value={userInformation.keyData?.carbohydrateCount + 'g'} text = 'Glucides' /> 
            <KeyData image={fatImg} value={userInformation.keyData?.lipidCount + 'g'} text = 'Lipides' /> 
        </div>
      </article>
    </main>
    <Footer/>
    </div>
  )
} 

export default Home