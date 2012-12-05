exports.routes = function (map) {
		map.root('users#welcome');
		map.resources('posts');
		map.resources('users');
		map.get('signup', 'users#signup');
    // Generic routes. Add all your routes below this line
    // feel free to remove generic routes
    map.all(':controller/:action');
    map.all(':controller/:action/:id');

};
