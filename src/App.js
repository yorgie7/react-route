import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import About from './About';
import User from './User';
import Home from './Home';
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
