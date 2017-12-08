app.service('RentService', ['$http', function ($http) {
    var self = this;

    self.rent = { list: [] };
    self.newRent = {};

    self.getRentals = function () {
        $http({
            method: 'GET',
            url: '/rent'
        }).then(function (response) {
            console.log('response', response);
            self.rent.list = response.data;

        });
    };
    self.getRentals();

   
}]);