const express = require('express');
const app = express();

app.use(express.static(__dirname + '/dist/sysocli'));

app.get('/*', function(request, response){
  response.sendFile(__dirname + '/dist/sysocli/index.html');
}); 

app.listen(process.env.PORT ||4200);
