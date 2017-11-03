export default class appService {
  /* @ngInject */
  constructor() {
    this.serviceVar = 'Inside Service';
    this.es6Test = [];
    let materials = ['Hydrogen', 'Helium', 'Lithium', 'Beryllium'];
    this.es6Test = materials.map(material => material.length);
  }

  changeMe() {
    this.serviceVar = 'Changed my data';
  }
}
