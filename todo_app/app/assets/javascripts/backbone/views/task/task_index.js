
App.Views.TasksIndex = Backbone.View.extend({
    initialize: function() {
        this.listenTo(this.collection, 'add', this.add);
        this.render();
    },

    //'add' function will throw model, which we'l'l take in as argument 
    //for add function
    //this is constructor, we will instantiate it and it will
    //know which model to work on

    render: function() {
    //render will append the top level element to the DOM
    //most views have render functions
        $(".container").empty();
    //appends EMPTY div
        $(".container").append(this.$el);
    },

    add: function(model) {
        //makes view populated with model
        var view = new App.Views.TaskShow({model: model});
        // appends populated model to view
        this.$el.append(view.$el);
    }
});
