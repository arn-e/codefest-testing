import '../imports/api/tasks.js';
import { Meteor } from 'meteor/meteor';

Meteor.startup(() => {
  // code to run on server at startup
});

var Markers = new Meteor.Collection('markers');
Meteor.publish("markers", function () {
  return Markers.find();
});
