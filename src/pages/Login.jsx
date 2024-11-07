import React, { useState } from "react"
import { useLoaderData, useNavigate, Form, redirect, useActionData, useNavigation } from "react-router-dom"
import { loginUser } from "../api"

async function fakeLoginUser(creds) {
    await sleep(1000)
    if (creds.email === "b@b.com" && creds.password === "p123") {
        localStorage.setItem("loggedin", true)
        return {
            email: creds.email,
            token: "1234567890abcdef"
        }
    }
    throw new Error("Couldn't log the user in")
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

export function loader({ request }) {
    const url = new URL(request.url).searchParams.get("message")
    return url
}

export async function action({ request }) {
    const formData = await request.formData()
    const email = formData.get("email")
    const password = formData.get("password")
    try {
        const user = await fakeLoginUser({ email, password })
        return redirect("/protected")
    } catch (err) {
        return err.message
    }
}

export default function Login() {
    const navigation = useNavigation()
    
    const error = useActionData()
    // const [loginFormData, setLoginFormData] = useState({ email: "", password: "" })
    // const [status, setStatus] = useState("idle")
    // const [error, setError] = useState()
    // const navigate = useNavigate()
    const message = useLoaderData()

    /*
    function handleSubmit(e) {
        e.preventDefault()
        setStatus("submitting")
        setError(null)
        loginUser(loginFormData)
            .then(data => navigate("/host"))
            .catch(err => setError(err))
            .finally(() => setStatus("idle"))
    }
    

    function handleChange(e) {
        const { name, value } = e.target
        setLoginFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }
    */

    return (
        <div className="login-container">
            <h1>Sign in to your account</h1>
            {/* Warning goes here. Give it a classname="red" */}
            {message && <h2 className="red">{message}</h2>}
            {error && <h3 className="red">{error}</h3>}
            {/* <form onSubmit={handleSubmit} className="login-form"> */}
            <Form className="login-form" method="POST" replace>
                <input
                    name="email"
                    // onChange={handleChange}
                    type="email"
                    placeholder="Email address"
                    // value={loginFormData.email}
                />
                <input
                    name="password"
                    // onChange={handleChange}
                    type="password"
                    placeholder="Password"
                    // value={loginFormData.password}
                />
                <button disabled={navigation.state === "submitting"}>
                    {navigation.state === "submitting" ? "Logging in..." : "Log in"}
                </button>
            </Form>
        </div>
    )

}