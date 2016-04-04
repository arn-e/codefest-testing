import { Template } from 'meteor/templating';

import { Tasks } from '../api/tasks.js';

import './task.html';

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  },
  'keyup [name=nameItem]': function(event){
    var itemId = this._id;
    // var nameItem = $(event.target).val();
    var nameItem = event.target.value;

    // Tasks.update({ _id: itemId}, {$set: { name: nameItem }});
    Tasks.update(this._id, {
      $set: { Name : nameItem },
    });
    console.log("tasks " + itemId + " changed to : " + nameItem);
  }
});
