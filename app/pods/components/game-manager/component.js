import Component from '@ember/component';

export default Component.extend({
    socketIOService: Ember.inject.service('socket-io'),
    didInsertElement() {
        this._super(...arguments);

        const socket = this.get('socketIOService').socketFor('http://localhost:8080/');

        /*
        * 3. Define any event handlers
        */
        socket.on('connect', this.onConnect, this);
        

        /*
            4. It is also possible to set event handlers on specific events
        */
        //socket.on('myCustomEvent', () => { socket.emit('anotherCustomEvent', 'some data'); });
    },
    
    onConnect() {
        const socket = this.get('socketIOService').socketFor('http://localhost:8080/');
        //debugger
        socket.emit('handshake', localStorage['accessPass']);
    },
    
    myCustomEvent(data) {
        const socket = this.get('socketIOService').socketFor('http://localhost:8080/' + this.get('namespace'));
        socket.emit('anotherCustomEvent', 'some data');
    },
    
    willDestroyElement() {
        this._super(...arguments);

        const socket = this.get('socketService').socketFor('http://localhost:8080/' + this.get('namespace'));
        socket.off('connect', this.onConnect);
        //socket.off('message', this.onMessage);
        //socket.off('myCustomEvent', this.myCustomEvent);
    }
});
