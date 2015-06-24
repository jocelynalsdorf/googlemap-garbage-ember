import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
    	var addNum = this.get('addNum');
    	var addStreet = this.get('addStreet');
    	var addCity = this.get('addCity');
    	var addState = this.get('addState');
    	var map;
      // var latitude = this.get(addresses);
       // var longitude = this.get(address.geometry.viewport.northeast.lng);


			//  map = new google.maps.Map(document.getElementById('map-canvas'), {
			//     zoom: 15,
			//     center: {lat:  36.8466744802915, lng:  -119.6881141697085}
			// });

			 // alert(latitude);
      this.transitionToRoute('map', addNum, addStreet, addCity, addState);


    }
  }
});



//https://www.google.com/maps/embed/v1/view¢er=-33.8569,151.2152&zoom=18&maptype=satellite