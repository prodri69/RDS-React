import React, { useState } from "react";
import axios from "axios";



function Login(){
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [userStatus, setUserStatus] = useState("");

async function handleSubmit(e){
    e.preventDefault();
   try{
     const response = await axios.post("http://localhost:3005/api/login", { username, password});
     if(response.status === 200){
        setUserStatus("success")
     }
     else {
        setUserStatus("invalid")
      
    }
   } catch(error){
     setUserStatus("error")
   } 
}
return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
            <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>

        {userStatus === "success" && <p>Login successful</p>}
        {userStatus === "invalid" && <p>Invalid credentials</p>}
        {userStatus === "error" && <p>Server error</p>}
    </div>
);
}

export default Login; 



 