import React from 'react';

function RandomUser(props) {
	return (
		<div>
		<ul>
			{props.user.map((user, index) => {
				return (
					<div key={index}>
					<h1>{user.name.first} {user.name.last}</h1>
					<li>Phone: {user.phone}</li>
					<li>Email: {user.email}</li>
					<li>Gender: {user.gender}</li>
					<li>Residence: {user.location.city}</li>
					</div>


					)
			})}

			</ul>
		</div>

	)
}

export default RandomUser