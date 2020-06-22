import React, {Component} from 'react';
import Cardlist from '../components/Cardlist.js';
import {robots} from './robots.js';
import Search from '../components/Search.js';
import Scroll from '../components/Scroll.js'
import './App.css';
class App extends Component{
constructor(){
	super();
	this.state = {
		robots: robots,
		searchfield: ''
	}
}
 SearchVal = (event)=>{
	this.setState({searchfield: event.target.value})
}
render(){
	const {robots, searchfield} = this.state;
	const filterBots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchfield.toLowerCase())
	})
	return(
	<div className = 'tc'>
		<h1 className='f1'>RoboFriends</h1>	
		<Search searchVal = {this.SearchVal}/>	
		<Scroll>
		<Cardlist robots = {filterBots}/>
		</Scroll>
	</div>	
	);
	}
}

export default App;