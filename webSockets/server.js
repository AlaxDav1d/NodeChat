const Web = require('ws');

const server = new Web.Server({port:8080});
const users = [1];
server.on('connection' , (ws)=>{     
     users.push(ws);
     console.log('Cliente conectado');
     ws.on('message', (message) =>{
          const usu = users.indexOf(ws);
          users.forEach( convi =>{
               if(convi !== ws && convi.readyState === Web.OPEN){
                    convi.send(usu + ':' + message);
               }
          });
     })
})
