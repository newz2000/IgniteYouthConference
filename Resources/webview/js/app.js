var AppRouter = Backbone.Router.extend({
    routes: {
        'events/:id': 'getEvent',
        'social': 'socialRoute',
        'my-events': 'myEvents',
        '*default': 'home'
    },
    getEvent: function(id) {
      var template = Handlebars.compile(
        $('#eventTemplate').html()
      );

      $('#dummyDom').html(template( {
        event: {
          id: id
        }
      }));
    },

    socialRoute: function() {
      var template = Handlebars.compile(
        $('#socialTemplate').html()
      );

      $('#dummyDom').html(template());
    },

    myEvents: function() {
      var template = Handlebars.compile(
        $('#myEventsTemplate').html()
      );

      $('#dummyDom').html(template());
    },

    home: function() {
      var template = Handlebars.compile(
        $('#homeTemplate').html()
      );

      $('#dummyDom').html(template());
    }

});

$(document).ready(function() {

  // Instantiate the router
  var app_router = new AppRouter;

  // Start Backbone history a necessary step for bookmarkable URL's
  Backbone.history.start();

})