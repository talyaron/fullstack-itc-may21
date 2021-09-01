import {Users} from '../models/users';

const users = new Users ();


export function isFirstNameExist(req, res, next) {
    try {
       
        if(users!==undefined) next()
    
    } catch (error) {
        
    }
}
