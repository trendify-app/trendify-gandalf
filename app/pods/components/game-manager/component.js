import Component from '@ember/component';

export default Component.extend({
    socketIOService: Ember.inject.service('socket-io'),
    gameState: 'lobby',
    myVote: '',
    name: 'host',
    rounds: {
        round_number: 1,
        total_rounds: 5,
        ends_at: 0
    },
    enrolled: true,
    challenge: '',
    users: [
        {
            name: "Mat",
            score: 69
        },
        {
            name: "Seena",
            score: 420
        },
        {
            name: "Nick",
            score: 9001
        }
    ],
    currentModel: Ember.computed('gameState', 'rounds.@each', 'name', 'trendData', 'users.[]', function() {
        let x = {
            gameState: this.get('gameState'),
            rounds: this.get('rounds'),
            name: this.get('name'),
            trendData: this.get('trendData'),
            users: this.get('users'),
            challenge: this.get('challenge'),
            room: localStorage['room_id']
        }
        console.log(x)
        return x
    }),
    trendData: {},
    
    didInsertElement() {
        this._super(...arguments);

        this.socket = this.get('socketIOService').socketFor('http://localhost:8080/');
        this.socket.on('connect', this.onConnect, this);
        this.socket.on('update', event => {
            console.log(event.type, event);
            this.send(`update_${event.type}`, event)
        });
        /*
            4. It is also possible to set event handlers on specific events
        */
        //socket.on('myCustomEvent', () => { socket.emit('anotherCustomEvent', 'some data'); });
    },
    
    onConnect() {
        //debugger
        this.socket.emit('handshake', localStorage['accessPass']);
    },
    
    myCustomEvent(data) {
        this.socket.emit('anotherCustomEvent', 'some data');
    },
    
    willDestroyElement() {
        this._super(...arguments);
        this.socket.emit('exit', localStorage['accessPass']);
        //socket.off('message', this.onMessage);
        //socket.off('myCustomEvent', this.myCustomEvent);
    },

    actions: {
        update_trend_data (event) {
            this.set('trendData', event)
        },
        update_challenge (event) {
            this.set('challenge', event.word)
        },
        update_state (event) {
            console.log(event);
            this.set('gameState', event.state)
        },
        update_round_number (event) {
            this.set('rounds', event)
        },
        update_users (event) {
            debugger
            this.set('users', event.users)
        },

        update_user (event) {
            this.set('name', event.name)
        },

        enroll_user (event) {
            //if(event.user_id == localStorage[''])
        },
        user_vote (word) {
            
        },
        game_start () {
            console.log('nshoeu')
            this.socket.emit('game_start', localStorage['accessPass']);
        },
    }
});
