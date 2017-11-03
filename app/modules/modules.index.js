import angular from 'angular';
import HomeModule from './home/home.module';

const ModuleIndex = angular.module('modules', [HomeModule.name]);

export default ModuleIndex;
