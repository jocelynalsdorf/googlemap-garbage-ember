import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'http://api.randomuser.me/?results=' + params.number;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var users = [];
     responseJSON.results.forEach(function(user) {
       users.push(user);
     });
     return users;
   });
  }
});