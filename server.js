let express = require('express');

let app = express();

app.use(express.static(__dirname+'/dist/workspace-proyect-management'));

app.get('/*', (req, resp) => {
    resp.sendFile(__dirname+'/dist/workspace-proyect-management/index.html');
})

app.listen(process.env.PORT || 8080);