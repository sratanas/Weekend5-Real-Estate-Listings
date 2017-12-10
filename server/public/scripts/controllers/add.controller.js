app.controller('AddController',['RentService','SaleService', function(RentService, SaleService){
    var self = this;
    self.newSale = SaleService.newSale;
    self.addNewSale = SaleService.addNewSale;
    self.newRental = RentService.newRental;
    self.addNewRental = RentService.addNewRental;
    self.deleteRental = RentService.deleteRental;
    
}])