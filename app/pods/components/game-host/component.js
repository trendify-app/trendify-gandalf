import Component from '@ember/component';
import computed from '@ember/object';

export default Component.extend({
    items: [
        {
            icon: "share",
            title: "Share"
        }
    ],
    sortedUsers: Ember.computed('data.users', function () {
      const users = this.get('data.users');
      return users.sort((a, b) => (a.score || 0) - (b.score || 0))
    })
});
