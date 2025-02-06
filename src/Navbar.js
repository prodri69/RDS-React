import React from "react";
import  "./Navbar.css";
function Navbar({ setCurrentPage } ){

return (
  <div>
    <button onClick={() => setCurrentPage('Home')}>Home</button>
<button onClick={() => setCurrentPage('Login') }>Login </button>
<button onClick={() => setCurrentPage('Dashboard')}>Dashboard</button>
</div>
);
};




export default Navbar;