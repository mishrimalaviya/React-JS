import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, db, provider } from "../../Firebase";
import { doc, setDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Sign() {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const submit = async () => {
        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            await setDoc(doc(db, "users", userCredential.user.uid), { username, email });
            navigate("/dashboard");
        } catch (err) {
            alert("Signup failed: " + err.message);
        }
    };

    const google = async() =>{
        await signInWithPopup(auth,provider)
        .then((res)=>{
            setDoc(doc(db, "users", res.user.uid), { username:res.user.displayName, email:res.user.email });

            navigate("/dasboard")
        })
    }

    return (
        <>
            <h5>Signup Form</h5>
            <input 
                type="text" 
                placeholder="Enter username" 
                value={username}
                onChange={(e) => setUsername(e.target.value)} 
            />
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
            <button onClick={google}>Signin with google</button> 
            <Link to="/login">Switch to Login</Link>
        </>
    );
}

export default Sign;
