Users.authenticate = function(data, callback)
{
				var user;
			 	Users.all({
											where: {email : data.email}, limit: 1
									}, function(err, user){
													console.log(user);
													console.log(data);
													if(user && user[0].password == data.password)
																	{
																					callback(true, user[0]);
//																					redirect(path_to.show_user(user.id));
																	}
																	else callback(false, data);
									
									}	);
/*				if( user && user.password == data.password){
								return user;
				}
				else{
								console.log("user Not found");
								return null;
				}*/
			
}

/*action(function authenticate(data)
			 {
							 var user = Users.find({
											 where: {email : data.email}
							 });
							 if(user.password == data.password){
											 return user;
							 }
							 else{
											 console.log("user Not found");
											 return null;
							 }

			 });*/
