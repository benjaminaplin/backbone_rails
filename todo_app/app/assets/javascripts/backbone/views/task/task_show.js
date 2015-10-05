App.Views.TaskShow = Backbone.View.extend({

    model: App.Models.Task,
    urlRoot: '/tasks',
    className: 'task',

    initialize: function() {
        this.listenTo(this.model, 'change', this.render);
        this.listenTo(this.model, 'destroy', this.remove);
        this.render();
    },
    //JST is object: ejs gem in rails loades up the templates in this object
    render: function() {
    //this function returns html string, populated with model
        var html = JST['tasks/show'](this.model.attributes);
    //append element on DOM
        this.$el.html(html);
    },
    events: {
        "click button.delete": "deleteTask",
                "click .update": "updateTask"

    },
    deleteTask: function() {
        console.log('you cliked delete')
        this.model.destroy();
    },
    updateTask: function(){
      console.log('upudatein')
      var newTitle = this.$(".title-field").text();
      var newContent = this.$(".content-field").text();
      var updatedTask = {title: newTitle, content: newContent};
      console.log(updatedTask)
      this.model.set(updatedTask);
      this.model.save();

    } 
});

