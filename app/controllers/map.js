import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
 
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var map = this.get('model');
      map.set('latitude', this.get('model.address.geometry.viewport.northeast.lat'));
      map.set('longitude', this.get('model.address.geometry.viewport.northeast.lng'));
      map.save();
      alert("got it");
      // map = new google.maps.Map(document.getElementById('map-canvas'), {
      //     zoom: 15,
      //     center: {lat:  36.8466744802915, lng:  -119.6881141697085}
      // });
      this.set('isEditing', false);
    },
    delete: function() {
      var map = this.get('model');
      // var users = post.get('users');
     	map.destroyRecord();
     	this.transitionToRoute('maps');
      }
		
	
	}
});