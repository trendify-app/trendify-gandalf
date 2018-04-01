import Route from '@ember/routing/route';

export default Route.extend({
  queryParams: {
    accessPass: {
      refreshModel: true
    }
  },
  model (params) {
    return Promise.resolve(params);
  }
});
