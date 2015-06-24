import Ember from 'ember';


export default Ember.Route.extend({
 model: function(params) {
   var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + params.addNum + '+' + params.addStreet + ',+' + params.addCity + ',+' + addState;
   return Ember.$.getJSON(url).then(function(responseJSON) {
     var addresses = [];
     responseJSON.results.forEach(function(address) {
       addresses.push(address);
        // var lat = [address.geometry.viewport.northeast.lat, address.geometry.viewport.northeast.lng];
     });
     
     map = new google.maps.Map(document.getElementById('map-canvas'), {
          zoom: 15,
          center: {lat:  addresses[0].geometry.location.lat, lng:  addresses[0].geometry.location.lng}
      });


 // console.log(addresses[0].geometry.location.lng);
    
   });
  }
});

