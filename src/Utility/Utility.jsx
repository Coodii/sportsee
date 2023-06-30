
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../__mocks__/mock";

export async function getDataUser(id){
    let data;
    let url = `http://localhost:3000/user/${id}`;
    //Try to connect to the server
    try {
        let response = await fetch(url);
        console.log('Connection successful with user data');
        data = await response.json();
        return data.data;
        }
    
    //if unable to connect to the backend, mocking api 
    catch (err){
        console.log('Connection error with user data: mocking data instead');
        data = USER_MAIN_DATA.find(user => user.id === id);
        return data;
    }
}

export async function getActivity(id){
    let data;
    let url = `http://localhost:3000/user/${id}/activity`;
    //Try to connect to the server
    try {
        let response = await fetch(url);
        console.log('Connection successful with activities ');
        data = await response.json();
        data = convertDailyActivityData(data.data.sessions);
        return data;
        }
    
    //if unable to connect to the backend, mocking api 
    catch (err){
        console.log('Connection error with activities: mocking data instead');
        data = USER_ACTIVITY.find(user => user.userId === id);
        data = convertDailyActivityData(data.sessions);
        return data;
    }
}


export async function getAverageSesssions(id){
    let data;
    let url = `http://localhost:3000/user/${id}/average-sessions`;
    //Try to connect to the server
    try {
        let response = await fetch(url);
        console.log('Connection successful with average-sessions');
        data = await response.json();
        data = convertAverageSessions(data.data.sessions);
        return data;
        }
    
    //if unable to connect to the backend, mocking api 
    catch (err){
        console.log('Connection error with average sessions: mocking data instead');
        data = USER_AVERAGE_SESSIONS.find(user => user.userId === id);
        data = convertAverageSessions(data.sessions);
        return data;
    }
}

export async function getPerformances(id){
    let data;
    let url = `http://localhost:3000/user/${id}/performance`;
    //Try to connect to the server
    try {
        let response = await fetch(url);
        console.log('Connection successful with performances');
        data = await response.json();
        data = convertPerformanceData(data.data);
        return data.data;
        }
    
    //if unable to connect to the backend, mocking api 
    catch (err){
        console.log('Connection error with perfomances: mocking data instead');
        data = USER_PERFORMANCE.find(user => user.userId === id);
        data = convertPerformanceData(data);
        return data;
    }
}

export async function getScore(id){
    let data;
    let url = `http://localhost:3000/user/${id}`;
    //Try to connect to the server
    try {
        let response = await fetch(url);
        console.log('Connection successful with score');
        data = await response.json();
        data = convertScoreData(data.data)
        return data;
        }
    
    //if unable to connect to the backend, mocking api 
    catch (err){
        console.log('Connection error with score: mocking data instead');
        data = USER_MAIN_DATA.find(user => user.id === id);
        data = convertScoreData(data);
        return data;
    }
}


function convertDailyActivityData(data){ 
    let i = 0;
    let newData = [];
    data.forEach(data => {
        i += 1;
        newData.push({
          index: i,
          calories : data.calories,
          kilogram : data.kilogram
        })})
    return newData;
}


function convertAverageSessions(data){
    const days = ['L','M', 'M', 'J', 'V', 'S', 'D'];
    let i = -1;
    let newData = [];
    data.forEach(data => {
        i += 1;
        newData.push({
          day: days[i],
          sessionLength : data.sessionLength
        })})
        console.log(newData);
    return newData;
}

function convertPerformanceData(data){
    const translation = {
        intensity: 'Intensité',
        cardio: 'Cadio',
        endurance: 'Endurance',
        energy: 'Energie',
        strength: 'Force',
        speed: 'Vitesse'
      };
    let newData = data.data.map((e) => ({
        subject: translation[data.kind[e.kind]],
        value: e.value
      }));
    return(newData.reverse());
}

function convertScoreData(data){
    let newData = [];
    if(data.todayScore !== undefined){
        console.log('test')
        newData.push({score: data.todayScore*100})
    }
    else{
        newData.push({score: data.score*100})
    }
    return newData;
}
