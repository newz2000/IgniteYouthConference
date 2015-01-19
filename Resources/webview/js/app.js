var AppRouter = Backbone.Router.extend({
    routes: {
        'events/:id': 'getEvent',
        'social': 'socialRoute',
        'my-events': 'myEvents',
        '*default': 'home'
    },
    getEvent: function(id) {
      console.log('Showing event '+id);
    },
    socialRoute: function() {
      console.log('Showing social info');
    },
    myEvents: function() {
      console.log('Here are your events');
    },
    home: function() {
      console.log('You are home. Welcome!');
    }

});

// Instantiate the router
var app_router = new AppRouter;
// app_router.on('route:getEvent', function (id) {
//     // Note the variable in the route definition being passed in here
//     alert( "Get event number " + id);   
// });
// app_router.on('route:home', function (actions) {
//     alert( actions ); 
// });

// Start Backbone history a necessary step for bookmarkable URL's
Backbone.history.start();
