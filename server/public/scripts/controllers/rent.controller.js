app.controller('RentController',['RentService', function(RentService){
    var self = this;
    self.rent = RentService.rent;    
    self.getRentals = RentService.getRentals;
    self.newRental = RentService.newRental;
    self.addNewRental = RentService.addNewRental;
}])