var App = {
    
    Collections: {},
    Models: {},
    Views: {},
    Routers: {},
    
    initialize: function() {
        this.tasks = new App.Collections.Tasks();
        this.router = new App.Routers.Tasks({collection: this.tasks});
        this.newTaskView = new App.Views.TaskNew({collection: this.tasks});
        Backbone.history.start();
        this.tasks.fetch();
    }
};
