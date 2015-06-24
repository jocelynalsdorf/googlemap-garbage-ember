import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
 
  actions: {
    
    save: function() {
      var newMap = this.store.createRecord('map', {
         latitude: this.get(addresses[0].geometry.location.lat),
        longitude: this.get(addresses[0].geometry.location.lng),
        addNum: this.get('addNum'),
        addStreet: this.get('addStreet'),
        addCity: this.get('addCity'),
        addState: this.get('addState')
      });
     newMap.save();
    }
    // delete: function() {
    //   var map = this.get('model');
    //   // var users = post.get('users');
    //  	map.destroyRecord();
    //  	this.transitionToRoute('maps');
    //   }
		
	
	}
});