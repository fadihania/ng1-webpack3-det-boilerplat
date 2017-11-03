class HomeService {
  constructor($http) {
    'ngInject';
    this.$http = $http;
    this.url = 'https://randomuser.me/api/';
  }
  getAllData() {
    return this.$http.get(this.url).then(response => response.data);
  }

  post() {
    return this.$http.post(this.url, {});
  }
}

HomeService.$inject = ['$http'];
export default HomeService;
