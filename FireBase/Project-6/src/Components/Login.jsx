import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../Firebase";

function Log() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async () => {
        try {
            const res = await signInWithEmailAndPassword(auth, email, password);
            console.log(res);
            navigate("/dashboard");
        } catch (err) {
            alert("Login failed: " + err.message);
        }
    };

    return (
        <>
            <h5>Login Page</h5>
            <input 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="Enter password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)} 
            />
            <button onClick={submit}>Submit</button><br />
            <Link to="/">Switch to Signup</Link>
        </>
    );
}

export default Log;
