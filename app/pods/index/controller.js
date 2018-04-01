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
            }).then(response => {
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
                        response.json().then(response => {
                          // debugger
                          localStorage['accessPass'] = response.access_pass
                          this.transitionToRoute(`/sessions/${localStorage['room_id']}?accessPass=${response.access_pass}`);
                        })
                    });
                })
            });
        },
        join (id) {
          fetch(`http://localhost:8080/api/sessions/join/${id}`, {
            "async": true,
            "crossDomain": true,
            "method": "PUT"
          }).then(response => response.json())
            .then(response => {
              this.transitionToRoute(`/sessions/${id}?accessPass=${response.access_pass}`);
            })
        }
    }
});
