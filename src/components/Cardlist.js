import React from 'react';
import Card from './Card.js'		

const Cardlist = ({robots}) =>{
	return(
		<div>
			{
				robots.map((num,i) => {
				return(
						<Card 
							key = {num.id} 
							id = {num.id}
							name = {num.name}
							email = {num.email}
						/>
					);
			})
			}
		</div>	
			
		);

}
 export default Cardlist;
	