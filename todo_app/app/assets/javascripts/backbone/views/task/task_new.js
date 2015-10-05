App.Views.TaskNew = Backbone.View.extend({
    url: '/tasks',
    className: 'form',
    initialize: function() {
      this.render();
      this.$newTaskInput = this.$el.find('input#task');
      this.$newDetailsInput = this.$el.find('input#details');
    },
    render: function() {
      $("body").append(this.$el);

      this.$el.append("<input id='task' type='text' name='save' placeholder='Add an item'><input id='details' type='text' name='save' placeholder='Add details'><button class='save'>save</button>");
    },    
    events: {
        "click .save": "newTask"
    },
    newTask: function(){
        var newTask = new App.Models.Task({
          title: this.$newTaskInput.val(),
          content: this.$newDetailsInput.val()
        });
        this.$newTaskInput.val("");
        this.$newDetailsInput.val("");
        newTask.save();        
        this.collection.add(newTask);
    }
});