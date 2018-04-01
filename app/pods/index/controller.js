import Controller from '@ember/controller';
import fetch from 'fetch';

export default Controller.extend({
    actions: {
        host () {
            fetch('http://localhost:8080/api/sessions/create',
            {
                "async": true,
                "crossDomain": true,
                "url": "http://localhost:8080/api/sessions/create",
                "method": "POST"
            }).
            then(response => {
                response.json().
                then(response => {
                    localStorage['room_id'] = response.room_id
                    fetch('http://localhost:8080/api/sessions/join/' + response.room_id, {
                        "async": true,
                        "crossDomain": true,
                        "url": "http://localhost:8080/api/sessions/join/" + response.room_id,
                        "method": "PUT",
                        "headers": {
                            Authorization: response.access_token
                        }
                    }).
                    then(response => {
                        response.json().
                        then(response => {
                            localStorage['accessPass'] = response.access_pass
                            this.transitionToRoute('sessions', {
                                session_id: localStorage['room_id']
                            });
                        })
                    });
                })   
            });
        },
        join () {

        }
    }
});


// /sessions/create => session_id
// /sessions/join?token=${token} {session_id: <>}
//   - accessPass

// cache last attempt

// transitionTo game route
//  - pass contextual information
//  - session attempting to join in url

// localStorage['a'] = 1


// socket.on('connect', (id) => {
//   socket.emit('handshake', accessPass, () => {
   
//   })
// }