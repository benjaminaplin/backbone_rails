App.Routers.Tasks = Backbone.Router.extend({
    
    //options hash is backbone feature you can pass in when 
    //you instantiate a view
    initialize: function(options) {
        this.collection = options.collection;
    },

    routes: {
        "": "index",
        "new": "new",
        "tasks/:id": "show"
    },

    index: function() {
        console.log('hello, world, this is bacbone router action');
        this.view = new App.Views.TasksIndex({collection: this.collection});
    },

    new: function() {

    },

    show: function() {

    }
});

