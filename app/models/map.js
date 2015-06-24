import DS from 'ember-data';

export default DS.Model.extend({
  latitude: DS.attr('string'),
  longitude: DS.attr('number'),
 	addNum: DS.attr('string'),
 	addStreet: DS.attr('string'),
 	addCity: DS.attr('string'),
 	addState: DS.attr('string')
});
