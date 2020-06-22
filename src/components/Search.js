import React from 'react';
const Search = ({searchVal})=>{
	return(
		<div clasName = 'pa2'>
			<input 
				className = 'pa3 ba b--green bg-lightest-blue'
				type = 'search'
				placeholder='search Roboz'
				onChange = {searchVal}
			/>
		</div>

		);
}
export default Search