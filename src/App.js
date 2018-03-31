import React, { Component } from 'react';
import './App.css';

class App extends Component {
	constructor(){
		super()
		this.state={
			status: false
		}
		this.updatestatus= this.updatestatus.bind(this)
	}

	updatestatus(e){

		this.setState({
			status: e.target.checked
		})
	}
  render() {
   	if (this.state.status === true){
    	return (
	      <div className="wrapper">
	        <label><input type="checkbox" checked= {this.state.status} onChange={this.updatestatus}/> Mostrar información importante</label>
	        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
	      </div>
    )}
   	else {
    	return (
	      <div className="wrapper">
	        <label><input type="checkbox" checked= {this.state.status} onChange={this.updatestatus}/> Mostrar información importante</label>
	        </div>)
    }
  }
}

export default App;
