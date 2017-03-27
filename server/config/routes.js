var path = require('path');
var messages = require('../controllers/messages.js');
var comments = require('../controllers/comments.js');


module.exports = function(app){
  app.post('/addmessage', messages.addmessage);
  app.get('/messages', messages.home);
  app.post('/message/:id/comments', comments.create);
};
