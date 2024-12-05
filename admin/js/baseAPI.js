// import {Config} from './config.js'
export class BaseAPI{
    urlfirebase="https://database-assignment-cb531-default-rtdb.firebaseio.com/";
    
    getFirebase(endPoint){
        return axios({
            url:`${this.urlfirebase}/${endPoint}.json`,
            method:"GET"
        })
    }
    postFirebase(endPoint,data){
        return axios({
            method:"POST",
            url:`${this.urlfirebase}/${endPoint}.json`,
            data:data 
        })
    }
    deleteFirebase(endPoint){
        return axios({
            method:"DELETE",
            url:`${this.urlfirebase}/${endPoint}.json`
        })
    }  
} 