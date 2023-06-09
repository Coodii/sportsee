
import { USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE } from "../__mocks__/mock";

export async function isMock() {
    let mock = false;
    let url = 'http://localhost:3000/user/12/activity';
    let data;
    try {
        let response = await fetch(url);
        console.log(response);
        data = response.json;
        mock = true;
    }
    catch (err){
        console.log(err);
        data = undefined;
    }
    finally {
        console.log(mock);
        console.log(data);
    }
}

export async function getDataUser(id){
    let data;
    data = USER_MAIN_DATA.find(user => user.id === id);
    return data;
}

export async function getActivity(id){
    let data;
    data = USER_ACTIVITY.find(user => user.userId === id);
    console.log(data);
    return data;
}

export async function getAverageSesssions(id){
    let data;
    data = USER_AVERAGE_SESSIONS.find(user => user.userId === id);
    console.log(data);
    return data;
}

export async function getPerformances(id){
    let data;
    data = USER_PERFORMANCE.find(user => user.userId === id);
    console.log(data);
    return data;
}