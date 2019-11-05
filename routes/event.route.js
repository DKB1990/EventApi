module.exports = function(app) {
    var event = require('../controllers/event.controller.js');
 
    http://localhost:8085/api/events/getbyid?type=%27abc%27&repo_id=%27rerere%27
    app.get('/api/events/getById', event.filterByRepositoryIdAndEventType);

    http://localhost:8085/api/events/getActorDetails?actor_login=%test%27
    app.get('/api/events/getActorDetails', event.getActorDetailsByActorLogin);
 
    http://localhost:8085/api/events/getActorDetails?actor_login=%test%27
    app.get('/api/events/getMaxEvents', event.findRepositoryWithMaxEvents);

    http://localhost:8085/api/events/getTopContributors
    app.get('/api/events/getTopContributors', event.listOfRepositories);

    http://localhost:8085/api/events/delete?actor_login=%test%27
    app.delete('/api/events/delete', event.deleteEvents);
}