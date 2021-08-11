export function getUsers(req: any, res: any) {
    // console.log(req)

    // const { cookieName } = req.cookies;
    // console.log(JSON.stringify(req.cookies));
    
    // const cookie = JSON.parse(cookieName);
    console.log(req.cookies);
    

    res.send({ok:"okay"});
};  
