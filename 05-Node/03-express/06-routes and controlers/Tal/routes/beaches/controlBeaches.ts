export {};

import {beaches} from '../../model/images';

export const beachesCtl = (req, res)=>{
    res.send(beaches)
}