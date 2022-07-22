import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
export default function Signup() {
    let navigate = useNavigate();
    const [data, setData] = useState([]);
    const [email, setEmail] = useState([]);
    const [password, setPassword] = useState([]);

    let getData = async () => {
        let res = await fetch("https://jsonserver06.herokuapp.com/posts");
        let res_data = await res.json();
        setData(res_data);
    };
    useEffect(() => {
        getData();
    }, []);

    console.log(data);

    let handleSubmit = () => {
        data.map((e) => {
            if (email == e.email && password == e.pass) {
                navigate("/");
                alert("Signin successful");
            }
        });
    };

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
                SIGN IN TO OUTLOOK
            </h1>
            <div
                className="container"
                style={{
                    width: "40rem",
                    // border: "1px solid red",
                    padding: "1rem",
                }}
            >
                <form>
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
                    <div className="mb-3">
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
                        SIGNIN
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
}
