myApp.controller('userController',['$scope','$state','user_factory',userController]);

function userController($scope,$state,user_factory){
    $scope.edit_user =  "user";
    console.log($scope.edit_user);
    $scope.getDatetime = new Date();
    $scope.user = {};
    $scope.users_list = user_factory.query();


    $scope.add_user = function () {
        var data = {
            'username':$scope.user.username,
            'password':$scope.user.password,
            'description':"Add Description",
            'email':$scope.user.email,
            'friends':[],
            'extra':{'extras':"nothing"},
            'user_level':'Admin',
            'created_at':$scope.getDatetime,
            'updated_at':$scope.getDatetime
        };

        if($scope.user.password_confirm == $scope.user.password){
            console.log("form valid and on it way");
            user_factory.save(data, function(){
                $scope.user= {}
                $scope.users_list = user_factory.query();
            })}
    };

    $scope.login_page = function (){
            $state.go('sample_api')
        };
    $scope.message_page = function (){
            $state.go('sample_backend')
        };

    return $scope
};