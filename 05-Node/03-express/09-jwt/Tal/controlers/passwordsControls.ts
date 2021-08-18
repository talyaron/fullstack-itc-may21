export const passwordsControl = (req, res)=>{
    if(req.role === 'admin') res.send({password:123})
    else res.status(401).send({error:'Unauthrized path'})
   
}