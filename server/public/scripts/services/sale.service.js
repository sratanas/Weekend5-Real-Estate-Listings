app.service('SaleService', ['$http', function ($http) {
    var self = this;

    self.sale = { list: [] };

    self.getListings = function () {
        $http({
            method: 'GET',
            url: '/sale'
        }).then(function (response) {
            console.log('response', response);
            self.sale.list = response.data;

        });
    };
    self.getListings();

    self.addNewSale = function (newSale) {
        console.log('addNewSaleClicked');

        $http({
            method: 'POST',
            url: '/sale',
            data: newSale
        }).then(function (response) {
            console.log('response', response);
            swal('Thank you for adding a for sale listing!')
            self.getListings();

        })

    }

    self.deleteListing = function (listingToDelete) {
        console.log('Delete Listing button was clicked');
       $http({
           method: 'DELETE',
           url: '/sale/' + listingToDelete._id,
       }).then(function (response) {
               console.log('response', response);

               self.getListings();
           });
       };
}]);