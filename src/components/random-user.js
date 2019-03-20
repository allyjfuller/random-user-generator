import React from 'react';

function RandomUser(props) {
	console.log(props);
	return (
		<div>
		<ul>
			{props.user.map((user, index) => {
				return(
					
					<p key={index}>{user.email}</p>
					
				)
			
			})}


		</ul>
		</div>

	)
}

export default RandomUser