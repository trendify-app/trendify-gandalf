import Controller from '@ember/controller';

export default Controller.extend({
    websockets: Ember.inject.service(),
    socketRef: null,
    didInsertElement() {
        this._super(...arguments);
        const socket = this.get('websockets').socketFor('ws://localhost:7000/');

        socket.on('open', this.myOpenHandler, this);
        socket.on('message', this.myMessageHandler, this);
        socket.on('close', this.myCloseHandler, this);
    
        this.set('socketRef', socket);
    },

    willDestroyElement() {
        this._super(...arguments);

        const socket = this.get('socketRef');

        /*
            4. The final step is to remove all of the listeners you have setup.
        */
        socket.off('open', this.myOpenHandler);
        socket.off('message', this.myMessageHandler);
        socket.off('close', this.myCloseHandler);
    },

    myOpenHandler(event) {
        console.log(`On open event has been called: ${event}`);
    },

    myMessageHandler(event) {
        console.log(`Message: ${event.data}`);
    },

    myCloseHandler(event) {
        console.log(`On close event has been called: ${event}`);
    },
    
    actions: {
        host () {
            this.transitionToRoute('session.session_id', sessionObj);
        },
        join () {

        },
        sendButtonPressed() {
            const socket = this.get('socketRef');
            socket.send('Hello Websocket World');
        }
    }
});
