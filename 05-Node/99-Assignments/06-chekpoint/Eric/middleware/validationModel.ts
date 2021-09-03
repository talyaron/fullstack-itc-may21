import {Books} from '../models/books';

const books = new Books ();


export function isTitleExist(req, res, next) {
    try {
       
        if(books!==undefined) next()
    
    } catch (error) {
        
    }
}
