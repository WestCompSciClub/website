import { Helmet } from "react-helmet";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import { useState } from "react";
import "../css/login.css";

const validUsername = /^[A-Za-z0-9_.]*$/;

export default function Login() {
    const [input, setInput] = useState({
        username: "",
        password: "",
    });

    const handleSubmit = (e) => {
        let error = document.querySelector(".error");

        e.preventDefault();
        if (!validUsername.test(input.username)) {
            error.classList.add("show");
            return;
        } else {
            error.classList.remove("show");
        }
        console.log(input.username)
    }

    const handleInput = (e) => {
        var { name, value } = e.target;
        setInput((prev) => ({
            ...prev,
            [name]: value,
        }));
    }

    return (
        <div className="app">
            <Helmet>
                <title>WHS Comp Sci Club - Login</title>
            </Helmet>

            <div className="page">
                <Navbar />
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="item">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            placeholder="Letters, numbers, underscores, and periods allowed"
                            onChange={handleInput}
                            required={true}
                            maxLength={32}
                            minLength={4}
                        />
                        <div className="error">Invalid username. Only letters, numbers, underscores, and periods.</div>
                    </div>

                    <div className="item">
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            onChange={handleInput}
                            required={true}
                            maxLength={64}
                            minLength={8}
                        />
                    </div>

                    <button className="success">Submit</button>
                </form>
            </div>
            <Footer />
        </div>
    );
}