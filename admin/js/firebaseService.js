import {BaseAPI} from './baseAPI.js';
export class FireBaseService extends BaseAPI{
    getAll(){
        return this.get(`Catalogies`);
    }
    addUser(userData){
        return this.postFirebase(`Catalogies`,userData);
    }
    deleteTodo(id){
        return this.delete(`Catalogies/Cate${id}`);
    }
}