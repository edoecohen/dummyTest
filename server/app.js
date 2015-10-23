var express         = require('express');
var app             = express();
var path            = require('path');
var morgan          = require('morgan');
var bodyParser      = require('body-parser');
// var questions       = require('./routes/questions.js');
// var bugs            = require('./routes/bugs.js');
// var config          = require('../oauth.js');
// var passport        = require('passport');


function startServer (opts) {
  var port = process.env.PORT || 4000;

  app.use(bodyParser.json());
  app.use(morgan('dev'));

  app.use(express.static(__dirname + '/../')); 
  // app.use('/bower_components',  express.static(__dirname + '/../../bower_components'));

  // Set routes for questions
  // app.use('/questions', questions);
  // app.use('/bugs', bugs);

  app.listen(port, function() {
    console.log('Listening on port ' + port);
  });

  // var postVideoRoutes   = express.Router();
  // app.use('/api/postVideo', postVideoRoutes);
  // require('./postVideo/postVideoRoutes')(postVideoRoutes);

}

if (process.env.S3_BUCKET && process.env.AWS_KEY && process.env.AWS_SECRETKEY) {
  persist.retrieveDir(path.resolve(__dirname + '/../app/data/'), startServer); 
} else {
  console.error('Sync disabled. Requires ENV: S3_BUCKET, AWS_KEY, AWS_SECRETKEY');
  startServer({no_sync: true});
}
