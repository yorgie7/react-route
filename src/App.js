import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './components/AboutPage';
import User from './components/UserPage';
import Home from './components/HomePage';
import Navbar from './Navbar';


function App(){

return (
<Router>

<div className="App">
 <header className="header">
<Navbar />
</header>
 
<Switch>

 <Route path="/about" exact component={About}/>
 <Route path="/user" component={User}/>
 <Route path="/" exact component={Home}/>
  
</Switch>
</div>

</Router>
);

}

export default App;
