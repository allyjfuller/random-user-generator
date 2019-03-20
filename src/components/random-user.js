import React from 'react';

function RandomUser(props) {
	console.log(props);
	return (
		<div>
		<ul>
			{props.user.map((user, index) => {
				return(
					<div>
					<h1 key={user}>{user.name.first} {user.name.last}</h1>
					<li>{user.phone}</li>
					<li>{user.email}</li>
					<li>{user.gender}</li>
					<li>{user.location.city}</li>
					</div>
				)
			
			})}


		</ul>
		</div>

	)
}

export default RandomUser