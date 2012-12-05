load('application');

before(loadUsers, {only: ['show', 'edit', 'update']});

action('new', function () {
    this.title = 'New users';
    this.users = new Users;
    render();
});

action('welcome', function(){
				this.title = 'Welcome';
				this.users = new Users;
				render();
});
action(function create() {
		console.log(req.body);
		var user = Users.authenticate(req.body.Users, callback);
/*		if(user){
						console.log(user);
				redirect(path_to.show_user(user.id));
		}
						Users.create(req.body.Users, function (err, users) {
										if (err) {
														flash('error', 'Users can not be created');
														render('new', {
																		users: users,
																		title: 'New users'
														});
										} else {
														flash('info', 'Users created');
														redirect(path_to.users());
										}
						});*/
});

action(function signup(){
				this.title = 'Sign Up';
				render();
});

function callback(flag, data){
				if(flag){
							session['user_id'] = data.id;
								console.log(session['user_id']);
								console.log('now It will be cur_user');
								redirect(path_to.user(data.id));
				}
				else{
				console.log("it is coming here " + data);
/*				Users.create(data, function(err, user){
								if(err){
												flash('error', 'User can not be created');
												render('new', {users: users,
															 				 title: 'New user'
												});
								}
								else{
												flash('info', 'User created');
												redirect(path_to.users());
								}
				});*/
				}
}

action(function index() {
		redirect('/');
/*(    this.title = 'Userss index';
    Users.all(function (err, users) {
        render({
            users: users
        });
    });*/
});

action(function show() {
    this.title = 'Users show';
		if(session['user_id']){
		Users.find(session['user_id'],function(err, users){
		    render({
								users: users
				});
		});
		}
		else{
						redirect('/');
		}
						

});

action(function edit() {
    this.title = 'Users edit';
    render();
});

action(function update() {
    this.users.updateAttributes(body.Users, function (err) {
        if (!err) {
            flash('info', 'Users updated');
            redirect(path_to.users(this.users));
        } else {
            flash('error', 'Users can not be updated');
            this.title = 'Edit users details';
            render('edit');
        }
    }.bind(this));
});

action(function destroy() {
    this.users.destroy(function (error) {
        if (error) {
            flash('error', 'Can not destroy users');
        } else {
            flash('info', 'Users successfully removed');
        }
        send("'" + path_to.users() + "'");
    });
});

function loadUsers() {
    Users.find(params.id, function (err, users) {
        if (err || !users) {
            redirect(path_to.users());
        } else {
            this.users = users;
            next();
        }
    }.bind(this));
}
