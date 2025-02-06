import React, { useState } from "react";
import Navbar from "./Navbar";
import Dashboard from "./Dashboard";
import Home from "./Home";
import Login from "./Login";

function App() {
  
 const [currentPage, setCurrentPage] = useState('Home');
 const [userStatus, setUserStatus] = useState(false);
 console.log('currentPage', currentPage );
 return (
  <div>
    <Navbar setCurrentPage={setCurrentPage}></Navbar>
    {
  (() => {
    switch(currentPage){
      case 'Dashboard':
        return <Dashboard />;
      case 'Login':
        return <Login setCurrentPage={setCurrentPage}/>; 
      default:
        return <Home />;
    }
  })()
}
    
  </div>
 );
};

export default App;
