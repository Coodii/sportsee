import React, { useEffect, useState } from 'react';
import { getData, getDataUser, isMock } from '../../Utility/Utility';
import KeyData from '../../components/KeyData/KeyData';
import calorieImg from '../../assets/calories-icon.png';
import carbsImg from '../../assets/carbs-icon.png'
import fatImg from '../../assets/fat-icon.png'
import proteinImg from '../../assets/protein-icon.png'
import DailyActivity from '../../components/DailyActivities/DailyActivities';


function Home() {
  
  const [userInformation, setUserInformations] = useState ([]);
  useEffect(() => {fetchInformationUser()}, []);
  //useEffect(() => {}, [userInformation]);
  
  async function fetchInformationUser () {
    const info = await getData(18, 'userInfo'); 
    setUserInformations(info)

    
  }
  console.log(userInformation)
  
  return (
    <div>
      <h1>Bonjour <span>{userInformation.userInfos?.firstName}</span></h1>
      <p>Félicitations! Vous avez explosés vos objectifs hier</p>
      <div className='keyData_Card'>
      <DailyActivity/>
          <KeyData image={calorieImg} value={userInformation.keyData?.calorieCount + 'kCal'} text = 'Calories' /> 
          <KeyData image={proteinImg} value={userInformation.keyData?.proteinCount + 'g'} text = 'Protéines' /> 
          <KeyData image={carbsImg} value={userInformation.keyData?.carbohydrateCount + 'g'} text = 'Glucides' /> 
          <KeyData image={fatImg} value={userInformation.keyData?.lipidCount + 'g'} text = 'Lipides' /> 
      </div>
      
    </div>
  )
} 

export default Home