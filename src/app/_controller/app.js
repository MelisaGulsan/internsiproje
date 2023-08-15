var app = angular.module('myApp', []);

app.controller('LoginController', function($scope,$location) {
$scope.username = ''; // Kullanıcı adı giriş alanı
$scope.fakeUsername = 'exampleUser'; // Sahte kullanıcı adı

$scope.login = function() {
if ($scope.username === $scope.fakeUsername) {
alert('Giriş başarılı!');
$location.path('/container');
} else {
alert('Geçersiz kullanıcı adı.');
}
};
});