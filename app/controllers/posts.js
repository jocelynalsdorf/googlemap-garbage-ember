import Ember from 'ember';

export default Ember.Controller.extend({

	actions: {
    publishPost: function() {
      var newPost = this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
      });
      newPost.save();
    }
  }
});
