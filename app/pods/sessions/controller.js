import Controller from '@ember/controller';

export default Controller.extend({
  queryParams: ['accessPass'],
  accessPass: null,
  init () {
    this.set('accessPass', this.get('accessPass') || localStorage['accessPass']);
  }
});
