class HomeController {
  /*@ngInject*/
  constructor($scope, $state, appService, homeService) {
    this.homeVar = 'This text is from home controller';
    this.homeService = homeService;
    this.sampleData = this.homeService.getAllData();
  }
}

HomeController.$inject = ['$scope', '$state', 'appService', 'homeService'];
export default HomeController;

// Use this annotation if you are usig class /*@ngInject*/
// Use this annotation of you are using function 'ngInject';
