
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../__mocks__/mock";

const isMocked = false;

/**
 * Get all the datas of an user.
 * @param {int} id The id of the user
 * @returns {array} The data.
 */
export async function getDataUser(id){
    let data;
    if(isMocked){
        data = USER_MAIN_DATA.find(user => user.id === id);
        return data;
    }

    else {
        let url = `http://localhost:3000/user/${id}`;
        //Try to connect to the server
        try {
            let response = await fetch(url);
            data = await response.json();
            return data.data;
        }
        
        //if unable to connect to the backend, mocking api 
        catch (err){
            console.log('Connection error with user data: ' + err);
        }
    }
}

/**
 * Get the activities data of an user.
 * @param {int} id  The id of the user
 * @returns {array} The activty data.
 */
export async function getActivity(id){
    let data;
    
    if(isMocked){
        data = USER_ACTIVITY.find(user => user.userId === id);
        data = convertDailyActivityData(data.sessions);
        return data;
    }
    
    else {
        let url = `http://localhost:3000/user/${id}/activity`;
        //Try to connect to the server
        try {
            let response = await fetch(url);
            data = await response.json();
            data = convertDailyActivityData(data.data.sessions);
            return data;
        }
        
        //if unable to connect to the backend, mocking api 
        catch (err){
            console.log('Connection error with activities:' + err);
        }
    }
}

/**
 * Get the average sessions data of an user.
 * @param {int} id The id of the user
 * @returns {array} The average sessions data.
 */
export async function getAverageSesssions(id){
    let data;
    
    if(isMocked){
        data = USER_AVERAGE_SESSIONS.find(user => user.userId === id);
        data = convertAverageSessions(data.sessions);
        return data;
    }

    else{
        let url = `http://localhost:3000/user/${id}/average-sessions`;
        //Try to connect to the server
        try {
            let response = await fetch(url);
            data = await response.json();
            data = convertAverageSessions(data.data.sessions);
            return data;
            }
        
        //if unable to connect to the backend, mocking api 
        catch (err){
            console.log('Connection error with average sessions: ' + err);
        }
    }
}

/**
 * Get the performance data of an user.
 * @param {int} id The id of the user
 * @returns {array} The performance data.
 */
export async function getPerformances(id){
    let data;

    if(isMocked){
        data = USER_PERFORMANCE.find(user => user.userId === id);
        data = convertPerformanceData(data);
        return data;
    }

    else {
        let url = `http://localhost:3000/user/${id}/performance`;
        //Try to connect to the server
        try {
            let response = await fetch(url);
            data = await response.json();
            data = convertPerformanceData(data.data);
            return data;
            }
        
        //if unable to connect to the backend, mocking api 
        catch (err){
            console.log('Connection error with perfomance: ' + err);
        }
    }
}


/**
 * Get the score data of an user.
 * @param {int} id The id of the user
 * @returns {array} The score data.
 */
export async function getScore(id){
    let data;

    if(isMocked){
        data = USER_MAIN_DATA.find(user => user.id === id);
        data = convertScoreData(data);
        return data;
    }

    else{
        let url = `http://localhost:3000/user/${id}`;
        //Try to connect to the server
        try {
            let response = await fetch(url);
            data = await response.json();
            data = convertScoreData(data.data)
            return data;
            }
        
        //if unable to connect to the backend, mocking api 
        catch (err){
            console.log('Connection error with score: ' + err);
        }
    }
}

/**
 * Convert the the daily activity data to the right format.
 * @param {array} data The daily activity data
 * @returns {array} The converted daily activity data.
 * 
 */
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

/**
 * Convert the the average session data to the right format.
 * @param {array} data
 * @returns {array} The converted average session data.
 */
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
    return newData;
}

/**
 * Convert the the perfomance data to the right format.
 * @param {array} data The perfomance session data
 * @returns {array} The converted perfomance data.
 */
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


/**
 * Convert the the score data to the right format.
 * @param {array} data The score data
 * @returns {array} The converted score data.
 */
function convertScoreData(data){
    let newData = [];
    if(data.todayScore !== undefined){
        newData.push({score: data.todayScore*100})
    }
    else{
        newData.push({score: data.score*100})
    }
    return newData;
}
