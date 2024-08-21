 const express = require('express');
 const app = express();
 const path = require('path');
 const router = require('./router/index');
 const bodyParser = require('body-parser');
 
 const port = 3003;



 app.set('view engine', 'ejs');
 app.set('views', path.join(__dirname, '/views'));

 app.use(express.static(path.join(__dirname, '/views')));
 app.use(express.urlencoded({ extended: true }));
 app.use(bodyParser.json());


 app.use(express.static('path'));
 app.use('/', router);

 app.listen(port, () => {
     console.log(`Server running at http://localhost:${port}/`);
 }); 

