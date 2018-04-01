import Component from '@ember/component';
import computed from '@ember/object';

export default Component.extend({
  tagName: '',
    items: [
      {
          icon: "share",
          title: "Share"
      }
    ],
    sortedUsers: Ember.computed('users', function () {
      const users = this.get('users');
      return users.sort((a, b) => (a.score || 0) - (b.score || 0))
    })
});
