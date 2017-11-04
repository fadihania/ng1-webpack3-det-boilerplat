import template from './home.html';
import controller from './home.controller';

const homeComponent = {
  // Use template URL instead of template
  templateUrl: template,
  controller: controller,
  controllerAs: 'homeCtrl'
};
export default homeComponent;
