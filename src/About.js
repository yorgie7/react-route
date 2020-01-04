import React from 'react';
import { Link } from 'react-router-dom';

function About() {
return (
<div className="App">
<h1> About page </h1>

<img src={require("./img/about.png")} />
<h3>This is About page.. </h3>
</div>);

}

export default About;
