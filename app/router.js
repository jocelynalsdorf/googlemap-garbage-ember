import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('home', {path:'/'});
  this.resource('posts');
  this.resource('users', function(){
      this.resource('user', {path: 'user/:number/:gender'});
	});
  this.resource('posts', function(){
  	this.resource('post', {path: 'posts/:id'});
  });
});

export default Router;
