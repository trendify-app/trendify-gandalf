import Component from '@ember/component';


export default Component.extend({
    didInsertElement () {
        debugger
    },
    chartData: Ember.computed('data', function() {
        // debugger
        // let data = this.get('data').default.map((x) => {
        //     return this.prefix + x;
        // })
        // this.get('data').default.timelineData.map((x) => {
	
        // })
    })
});
