import angular from 'angular';
import HomeModule from './home/home.module';

// The same can be done for sample component after creating required modules
// Import the module and then add it to list of dependencies
const ModuleIndex = angular.module('modules', [HomeModule.name]);

export default ModuleIndex;
