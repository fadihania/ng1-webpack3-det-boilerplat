import angular from 'angular';
import HomeService from './home.service';
import HomeController from './home.controller';
import HomeComponent from './home.component';

const HomeModule = angular
  .module('home', [])
  .controller('homeCtrl', HomeController)
  .component('homeComponent', HomeComponent)
  .service('homeService', HomeService);

export default HomeModule;
