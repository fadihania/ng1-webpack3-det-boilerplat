import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngSanitize from 'angular-sanitize';
import uiBootstrap from 'angular-ui-bootstrap';

// css lib
import 'bootstrap/dist/css/bootstrap.min.css';

// modules
import ModuleIndex from './modules/modules.index';

// Application Specific
import routing from './app.route';
import appService from './app.service';
import mainApp from './app.component';

// constants
const MODULE_NAME = 'app';
require('../index.html');

angular
  .module(MODULE_NAME, [uiRouter, ngSanitize, uiBootstrap, ModuleIndex.name])
  .config(routing)
  .service('appService', appService)
  .component('myApp', mainApp);

export default MODULE_NAME;
