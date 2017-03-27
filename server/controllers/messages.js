console.log("messages Controller");

var mongoose = require('mongoose');
var Message = mongoose.model('Message');

function messagesController(){
  this.home = function(req,res){
    Message.find({}, false, true).populate('_comment').exec(function(err, messages) {
    res.json(messages);
  })
  };
  this.addmessage = function(req,res){
    var newMessage = new Message(req.body)
    newMessage._user = req.session.userId;
    newMessage.save( function(err, result) {
      if(err) {
        console.log('unable to add message');
      } else {
        console.log('successfully added a message!');
         res.json(result);
      }
    })
  };
};

module.exports = new messagesController();
