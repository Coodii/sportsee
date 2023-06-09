import React, { useEffect, useState } from 'react';
import { getDataUser, isMock } from '../../Utility/Utility';
import KeyData from '../../components/KeyData/KeyData';
import calorieImg from '../../assets/calories-icon.png';
import carbsImg from '../../assets/carbs-icon.png'
import fatImg from '../../assets/fat-icon.png'
import proteinImg from '../../assets/protein-icon.png'


function Home() {
  
  const [userInformation, setUserInformations] = useState ([]);
  const [isloading, setIsLoading] = useState(true);
  useEffect(() => fetchInformationUser);

  async function fetchInformationUser () {
    const info = await getDataUser(12) 
    setUserInformations(info)
    setIsLoading(false);
    console.log(userInformation);
  }

  
  if(isloading){
    isMock()
    return (<div> Chargement...</div>)
  } 
  else return (
    <div>
      <h1>Bonjour <span>{userInformation.userInfos?.firstName}</span></h1>
      <p>Félicitations! Vous avez explosés vos objectifs hier</p>
      <div className='keyData_Card'>
          <KeyData image={calorieImg} value={userInformation.keyData?.calorieCount + 'kCal'} text = 'Calories' /> 
          <KeyData image={proteinImg} value={userInformation.keyData?.proteinCount + 'g'} text = 'Protéines' /> 
          <KeyData image={carbsImg} value={userInformation.keyData?.carbohydrateCount + 'g'} text = 'Glucides' /> 
          <KeyData image={fatImg} value={userInformation.keyData?.lipidCount + 'g'} text = 'Lipides' /> 
      </div>
    </div>
  )
} 

export default Home