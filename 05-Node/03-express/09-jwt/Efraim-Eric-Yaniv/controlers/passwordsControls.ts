const jwt = require('jwt-simple');
import { secret } from '../secret/secret';

export const passwordsControl = (req, res)=>{

    const { user } = req.cookies;
    const decoded = jwt.decode(user, secret);
    console.log('decoded',decoded);
    const { role } = decoded
    req.role = role;

    if (req.role === 'admin') {
        res.send({password:123});
    }
    else res.status(401).send({error:'Unauthrized path'})
   
}