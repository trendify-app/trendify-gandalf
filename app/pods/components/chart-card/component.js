import Component from '@ember/component';


export default Component.extend({
    chartData: Ember.computed('data', function() {
        // debugger
        // let data = this.get('data')
        // for(let i = 0; i< data.default[0].value.length;i++ ){
        //     for(let j = 0; j < data.default.length; j++){
        //         data.default[j].value[i]
        //     }
        // }
        // let data = this.get('data').default.map((x) => {
        //     return this.prefix + x;
        // })
        // this.get('data').default.timelineData.map((x) => {
	
        // })
    })
});