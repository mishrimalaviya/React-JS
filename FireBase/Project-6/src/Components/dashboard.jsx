import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../Firebase";
import { addDoc, collection, deleteDoc, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [uid, setUid] = useState(null);
    const [userData, setUserData] = useState({});
    const [task, setTask] = useState("");
    const [priority, setPriority] = useState("");
    const [tasks, setTasks] = useState([]);
    const [editTaskId, setEditTaskId] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUid(user.uid);
            } else {
                navigate("/login");
            }
        });
        return () => unsubscribe();
    }, [navigate]);

    useEffect(() => {
        if (uid) {
            fetchUser();
            fetchTasks();
        }
    }, [uid]);

    const fetchUser = async () => {
        const userDoc = await getDoc(doc(db, "users", uid));
        if (userDoc.exists()) setUserData(userDoc.data());
    };

    const fetchTasks = async () => {
        const querySnapshot = await getDocs(collection(db, "Tasks"));
        const allTasks = querySnapshot.docs.map((doc) => ({ docId: doc.id, ...doc.data() }));
        setTasks(allTasks);
    };

    const addOrUpdateTask = async () => {
        if (task.trim() === "") return alert("Task cannot be empty");

        if (editTaskId) {
            await updateDoc(doc(db, "Tasks", editTaskId), { task, priority });
        } else {
            const docRef = await addDoc(collection(db, "Tasks"), { userId: uid, task, priority });
            setTasks([...tasks, { docId: docRef.id, userId: uid, task, priority }]);
        }
        
        setTask("");
        setPriority("");
        setEditTaskId(null);
        fetchTasks();
    };

    const handleEdit = (id) => {
        const taskToEdit = tasks.find((task) => task.docId === id);
        setTask(taskToEdit.task);
        setPriority(taskToEdit.priority);
        setEditTaskId(id);
    };

    const handleDelete = async (id) => {
        await deleteDoc(doc(db, "Tasks", id));
        setTasks(tasks.filter((task) => task.docId !== id));
    };

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/login");
    };

    return (
        <div>
            <p>Welcome, {userData.username}</p>
            <button onClick={handleLogout}>Logout</button>
            <div>
                <input
                    type="text"
                    placeholder="Enter Task"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                />
                <select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    <option value="">Select Priority</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
                <button onClick={addOrUpdateTask}>
                    {editTaskId ? "Update Task" : "Add Task"}
                </button>
            </div>
            <ul>
                {tasks.map((t) => (
                    <li key={t.docId}>
                        {t.task} ({t.priority})
                        <button onClick={() => handleEdit(t.docId)}>Edit</button>
                        <button onClick={() => handleDelete(t.docId)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Dashboard;
