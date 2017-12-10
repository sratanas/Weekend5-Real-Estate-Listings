app.controller('SaleController',['SaleService', function(SaleService){
    var self = this;
    self.sale = SaleService.sale;    
    self.getListings = SaleService.getListings;
    self.newSale = SaleService.newSale;
    self.addNewSale = SaleService.addNewSale;
    self.deleteListing = SaleService.deleteListing;
}])