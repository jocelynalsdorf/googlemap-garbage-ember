import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + params.addNum + '+' + params.addStreet + ',+' + params.addCity + ',+' + addState;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var addresses = [];
     responseJSON.results.forEach(function(address) {
       addresses.push(address);
     });
     return addresses;
   });
  }
});

