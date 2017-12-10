app.service('RentService', ['$http', function ($http) {
    var self = this;
    

    self.rent = { list: [] };
    self.newRental = {};

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
  
    self.addNewRental =  function (newRental){
        console.log('addNewSaleClicked');
        
        $http({
            method: 'POST',
            url: '/rent',
            data: newRental
        }).then(function(response){
            console.log('response', response);
            swal('Thank you for adding a rental listing!')
            self.newRental = {};
            self.newRental = '';
            self.getRentals();
        })
    };

    self.deleteRental = function (rentalToDelete) {
        console.log('Delete Rental button was clicked');
        $http({
            method: 'DELETE',
            url:'/rent/' + rentalToDelete._id,
        }).then(function (response) {
            console.log('response', response);

            self.getRentals();
        });
    };

    // 'http://localhost:27017/realestate'+ rentalToDelete
   
   
}]);

