var AppRouter = Backbone.Router.extend({
    routes: {
        'events/:id': 'getEvent',
        'social': 'socialRoute',
        'my-events': 'myEvents',
        '*default': 'home'
    },
    getEvent: function(id) {
      console.log('event');
      var _template = _.template(
        $('#eventTemplate').html()
      );

      // $('#dummyDom').html(_template( {
      //   event: {
      //     id: id
      //   }
      // }));
    },

    socialRoute: function() {
      var _template = _.template(
        $('#socialTemplate').html()
      );

      $('#dummyDom').html(_template());
    },

    myEvents: function() {
      var _template = _.template(
        $('#myEventsTemplate').html()
      );

      $('#dummyDom').html(_template());
    },

    home: function() {
      var _template = _.template(
        $('#homeTemplate').html()
      );

      $('#dummyDom').html(_template());
    }

});

// Instantiate the router
var app_router = new AppRouter;

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
