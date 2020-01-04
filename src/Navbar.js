import React from 'react';
import { Link } from 'react-router-dom';
function User() {
return (<div>

  <nav>
<ul>
<li><Link to to="/">Home</Link></li>
<li><Link to to="/user/">User</Link></li>
<li><Link to to="/about/">About</Link></li>

</ul>
</nav>
</div>);
}

export default User;
