
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../__mocks__/mock";


export async function getData(id, dataType){
    let data;
    let url = '';
    let mockData;


    //get correct url and mock url with dataType
    switch (dataType) {
        case 'userInfo' :
             url = `http://localhost:3000/user/${id}`;
             mockData = USER_MAIN_DATA.find(user => user.id === id);
             break;
        
        case 'activity' :
            url = `http://localhost:3000/user/${id}/activity`;
            mockData = USER_ACTIVITY.find(user => user.userId === id);
            break

        case 'average-session' :
            url = `http://localhost:3000/user/${id}/average-sessions`;
            mockData = USER_AVERAGE_SESSIONS.find(user => user.userId === id);
            break;

        case 'performance':
            url = `http://localhost:3000/user/${id}/performance`;
            mockData = USER_PERFORMANCE.find(user => user.userId === id);

        default : console.log('Please choose a dataType');
    }

    //Try to connect to the server
    try {
        let response = await fetch(url);
        console.log('Connection successful');
        data = await response.json();
        return data.data;
        }
    
    //if unable to connect to the backend, mocking api 
    catch (err){
        console.log(err);
        console.log('Connection error : mocking data instead');
        data = mockData;
        return data;
    }


}



// export async function getDataUser(id){
//     let data;
//     let url = `http://localhost:3000/user/${id}`;
//     //Try to connect to the server
//     try {
//         let response = await fetch(url);
//         console.log('Connection successful');
//         data = await response.json();
//         return data.data;
//         }
    
//     //if unable to connect to the backend, mocking api 
//     catch (err){
//         console.log(err);
//         console.log('Connection error : mocking data instead');
//         data = USER_MAIN_DATA.find(user => user.id === id);
//         return data;
//     }
// }

// export async function getActivity(id){
//     let data;
//     let url = `http://localhost:3000/user/${id}/activity`;
//     //Try to connect to the server
//     try {
//         let response = await fetch(url);
//         console.log('Connection successful');
//         data = await response.json();
//         return data.data;
//         }
    
//     //if unable to connect to the backend, mocking api 
//     catch (err){
//         console.log(err);
//         console.log('Connection error : mocking data instead');
//         data = USER_ACTIVITY.find(user => user.userId === id);
//         return data;
//     }
// }


// export async function getAverageSesssions(id){
//     let data;
//     let url = `http://localhost:3000/user/${id}/average-sessions`;
//     //Try to connect to the server
//     try {
//         let response = await fetch(url);
//         console.log('Connection successful');
//         data = await response.json();
//         return data.data;
//         }
    
//     //if unable to connect to the backend, mocking api 
//     catch (err){
//         console.log(err);
//         console.log('Connection error : mocking data instead');
//         data = USER_AVERAGE_SESSIONS.find(user => user.userId === id);
//         return data;
//     }
// }

// export async function getPerformances(id){
//     let data;
//     let url = `http://localhost:3000/user/${id}/performance`;
//     //Try to connect to the server
//     try {
//         let response = await fetch(url);
//         console.log('Connection successful');
//         data = await response.json();
//         return data.data;
//         }
    
//     //if unable to connect to the backend, mocking api 
//     catch (err){
//         console.log(err);
//         console.log('Connection error : mocking data instead');
//         data = USER_PERFORMANCE.find(user => user.userId === id);
//         return data;
//     }
// }