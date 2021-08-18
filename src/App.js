import './App.css';
import { Switch, Route } from 'react-router-dom';
import React, { Component } from 'react';
import Example from './views/Example';
import Page2 from './views/Page2';
import Page3 from './views/Page3';
import Home from './views/Home';
import NavBar from './components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';


export default class App extends Component {
  constructor() {
    super();
    this.state={
      user:'',
      test:'This is a test'
    }
  }

setUser = (user)  =>{
  this.setState({user:user},()=>console.log("User is",this.state.user));
}


  render() {
    return (
      <div>
        <NavBar/>

        <Switch>
          <Route exact path = "/" render={()=><Home/>}/>
          <Route exact path = "/page2"  render={()=><Page2 user={this.state.user} test={this.state.test} setUser={this.setUser}/>}/>
          <Route exact path = "/page3" render={()=><Page3 user={this.state.user}/>}/>
          <Route exact path = "/example" render={()=><Example/>}/>
        </Switch>
      </div>
    )
  }
}
