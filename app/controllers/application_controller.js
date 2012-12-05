var cur_user;
before('protect from forgery', function () {
    protectFromForgery('c36ec1a86e814f111a8069151cdd2f3656cf66fe');
});

action(function currentUser(){
				if(session[user_id])
						cur_user = User.find(session[user_id]);
});
