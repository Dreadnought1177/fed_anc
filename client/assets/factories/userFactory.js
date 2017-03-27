myApp.factory('userFactory', ['$http', function($http){
var factory = {};



factory.addmessage = function(message, callback){
  $http.post('/addmessage', message).then(function(returned_data){
    // users[returned_data.data.user_id].message += data.message;
    callback(returned_data.data);
    console.log(returned_data.data);
  })
};
factory.getMessages = function(callback){
  $http.get('/messages').then(function(returned_data){
    callback(returned_data.data);
  })
};


return factory;
}]);
