import express from 'express';
import path from 'path';

let app = express();

app.get('/*',(req, res)=>{

    res.sendfile(path.join(__dirname,'/index.html'));

});

app.listen(5000, ()=> console.log('local host port 5000'));
