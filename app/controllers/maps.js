import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    submit: function() {
    	var addNum = this.get('addNum');
    	var addStreet = this.get('addStreet');
    	var addCity = this.get('addCity');
    	var addState = this.get('addState');
      this.transitionToRoute('map', addNum, addStreet, addCity, addState);
    }
  }
});