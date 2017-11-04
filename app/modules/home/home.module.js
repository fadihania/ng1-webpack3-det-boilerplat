import angular from 'angular';
import HomeService from './home.service';
import HomeController from './home.controller';
import HomeComponent from './home.component';

const HomeModule = angular
  .module('home', [])
  .controller('homeCtrl', HomeController)
  // use home as the tagname, in case of homeComponent the tag name will be home-component
  .component('home', HomeComponent)
  .service('homeService', HomeService);

export default HomeModule;
