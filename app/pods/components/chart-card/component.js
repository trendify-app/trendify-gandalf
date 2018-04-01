import Component from '@ember/component';


export default Component.extend({
    chartData: Ember.computed('data', function() {
        //debugger
        // let data = this.get('data')
        // let arr = []
        // for(let i = 0; i< data.labels.length;i++ ){
        //     for(let j = 0; j < data.data.default.length; j++){
        //         arr.push(data.data.default[j].value[i])
        //     }
        // }
        // let data = this.get('data').default.map((x) => {
        //     return this.prefix + x;
        // })
        // this.get('data').default.timelineData.map((x) => {
        return 0
        // })
    })
});