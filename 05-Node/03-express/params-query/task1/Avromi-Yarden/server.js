const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.static('public'))

app.post('./getColor', (req, res)=>{
   const color =  req.data.color
   console.log(color);
   res.send('something')
})




app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})
