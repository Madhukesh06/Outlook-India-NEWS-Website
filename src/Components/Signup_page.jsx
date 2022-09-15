import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
export default function Login() {
    const [name, setName] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    let navigate = useNavigate();

    let handleSubmit = async (event) => {
        event.preventDefault();
        await fetch("https://postdata-rest-api.herokuapp.com/post", {
            method: "POST",
            body: JSON.stringify({
                name: name,
                email: email,
                pass: password,
            }),
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        });
        alert("Sign-Up Successfull");
        navigate("/signin");
    };

    console.log(name)

    return (
        <>
            <Navbar />

            <h1
                style={{
                    color: "#050505",
                    fontSize: "2rem",
                    marginTop: "5rem",
                    marginBottom: "2rem",
                    fontWeight: "bold",
                }}
            >
                SIGN UP TO OUTLOOK
            </h1>
            <div
                className="container"
                style={{
                    width: "40rem",
                    // border: "1px solid red",
                    padding: "1rem",
                }}
            >
                <form >
                    <div className="mb-4">
                        <input
                            type="name"
                            onChange={(event) => setName(event.target.value)}
                            value={name}
                            style={{ padding: "1rem" }}
                            className="form-control"
                            id="exampleInputEmail"
                            aria-describedby="emailHelp"
                            placeholder="Enter Name"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            onChange={(e) => setEmail(e.target.value)}
                            value={email}
                            style={{ padding: "1rem" }}
                            type="email"
                            className="form-control"
                            id="exampleInputEmail1"
                            aria-describedby="emailHelp"
                            placeholder="Email address"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            style={{ padding: "1rem" }}
                            type="password"
                            className="form-control"
                            id="exampleInputPassword1"
                            placeholder="Password"
                        />
                    </div>
                    <button
                        onClick={handleSubmit}
                        type="submit"
                        className="btn btn-dark"
                        style={{
                            width: "38rem",
                            margin: "auto",
                            padding: "1rem",
                            fontSize: "1.2rem",
                        }}
                    >
                        SIGNUP
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}
