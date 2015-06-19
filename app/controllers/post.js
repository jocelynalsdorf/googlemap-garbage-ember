import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
 
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var post = this.get('model');
      post.set('title', this.get('model.title'));
      post.set('body', this.get('model.body'));
      post.save();
      this.set('isEditing', false);
    },
    delete: function() {
      var post = this.get('model');
      // var users = post.get('users');
     	post.destroyRecord();
     	this.transitionToRoute('posts');
      }
		
	
	}
});