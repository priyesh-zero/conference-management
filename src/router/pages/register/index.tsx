import { Input, Label } from "@pega/cosmos-react-core";
import { useAtom } from "jotai";
import { ChangeEvent, useState } from "react";
import { Navigate } from "react-router-dom";
import { v4 } from "uuid";
import { persistedUsers, userAtom } from "../../../atom/user";

const RegisterPage = () => {
    const [user, setUser] = useAtom(userAtom)
    const [users, setUsers] = useAtom(persistedUsers)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    if (user) {
        return <Navigate to="/dashboard" />
    }

    const handleRegister = () => {
        const currentUser = users.find(user => user.email === email)
        if (currentUser) {
            setError("Email already exists") 
            return
        }
        const user = {
            id: v4(),
            name,
            email,
            password,
            isStaff: false,
            events: [],
        }
        setUsers([...users, user])
        setUser(user)
    }

    return (
        <section className="w-full h-screen flex justify-center items-center bg-teal-900">
            <div className="card p-8 rounded-lg shadow-lg bg-gray-100 w-full" style={{ maxWidth: 320 }}>
                <h2 className="text-3xl text-center border-b border-b-slate-400 mb-4">Sign Up</h2>
                <Label>Name</Label>
                <Input type="text" value={name} onChange={(evt: ChangeEvent<HTMLInputElement>) => setName(evt.target.value)} placeholder="Name..." className="mb-4" />
                <Label>Email</Label>
                <Input type="email" value={email} onChange={(evt: ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)} placeholder="Email..." className="mb-4" />
                <Label>Password</Label>
                <Input type="password" value={password} onChange={(evt: ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)} placeholder="Password..." className="mb-4" />
                {error && <p className="text-red-500 text-center my-2">{error}</p>}
                <button className="bg-emerald-500 rounded p-4 w-full text-gray-100" onClick={handleRegister}>Register</button>
            </div>
        </section>
    );
};

export default RegisterPage;
