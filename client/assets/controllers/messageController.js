myApp.controller('messageController', ['userFactory', '$location', messageController]);

function messageController(userFactory, $location){
  var _this = this;

  function getMessages(){
    userFactory.getMessages(function(data){
      _this.messages=data;
    })
  }
  getMessages();

  this.addmessage = function(){
    userFactory.addmessage(this.message, function(data) {
      if(data.hasOwnProperty('errors')){
        _this.messageErrors = data.errors;
        console.log(data.errors);
      } else {
          getMessages();
        }
    })
  };

};
