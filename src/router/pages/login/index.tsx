import { Input, Label } from "@pega/cosmos-react-core";
import { useAtom } from "jotai";
import { ChangeEvent, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { persistedUsers, userAtom } from "../../../atom/user";

const LoginPage = () => {
    const [user, setUser] = useAtom(userAtom)
    const [users] = useAtom(persistedUsers)

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    if (user) {
        return <Navigate to="/dashboard" />
    }

    const handleLogin = () => {
        const currentUser = users.find(user => user.email === email)
        if (!currentUser) {
            setError("Invalid Email") 
            return
        }
        if (currentUser.password !== password) {
            setError("Invalid Password")
            return
        }
        setUser(currentUser)
    }

    return (
        <section className="w-full h-screen flex justify-center items-center bg-teal-900">
            <div className="card p-8 rounded-lg shadow-lg bg-gray-100 w-full" style={{ maxWidth: 320 }}>
                <h2 className="text-3xl text-center border-b border-b-slate-400 mb-4">Sign In</h2>
                <Label>Email</Label>
                <Input type="email" value={email} onChange={(evt: ChangeEvent<HTMLInputElement>) => setEmail(evt.target.value)} placeholder="Email..." className="mb-4" />
                <Label>Password</Label>
                <Input type="password" value={password} onChange={(evt: ChangeEvent<HTMLInputElement>) => setPassword(evt.target.value)} placeholder="Password..." className="mb-4" />
                {error && <p className="text-red-500 text-center my-2">{error}</p>}
                <button className="bg-emerald-500 rounded p-4 w-full text-gray-100" onClick={handleLogin}>Login</button>
                <p className="text-center my-4">Don't have an account <Link className="text-blue-500 underline" to="/register">Sign up here</Link></p>
                <p className="text-center">You can go back to the home by clicking <Link className="text-blue-500 underline" to="/home">here</Link></p>
            </div>
        </section>
    );
};

export default LoginPage;
