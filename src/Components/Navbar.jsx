import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
export default function Navbar() {
    return (
        <>
            <div className="container mb-4">
                <Link to="/"> <img
                    src="https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg"
                    alt="Outlook logo"
                /></Link>
                <br />
                <div style={{ marginTop: "1rem" }}>
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "500",
                        }}
                        to="/signin"
                    >

                        SIGNIN
                    </Link>{" "}
                    {"|"}
                    <Link
                        style={{
                            textDecoration: "none",
                            color: "black",
                            fontWeight: "500",
                        }}
                        to="/signup"
                    >
                        {" "}
                        SIGNUP{" "}
                    </Link>
                </div>
            </div>

            <nav
                className="navbar navbar-expand-lg navbar sticky-top bb-3 "
                style={{ backgroundColor: "white" }}
            >

                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarTogglerDemo01"
                        aria-controls="navbarTogglerDemo01"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container">
                        <div style={{ color: "#4F4D4D", fontWeight: "500" }} id="navbarTogglerDemo01">

                            <Link to="/" className="navbar-brand fs-6"  >
                                HOME
                            </Link>
                            <Link to="/outlook" className="navbar-brand fs-6" >
                                OUTLOOK
                            </Link>
                            <Link to="/business" className="navbar-brand fs-6" >
                                BUISNESS
                            </Link>
                            <Link to="/money" className="navbar-brand fs-6" >
                                MONEY
                            </Link>
                            <Link to="/bitcoin" className="navbar-brand fs-6" >
                                CRYPTO CORNER
                            </Link>
                            <Link to="/travel" className="navbar-brand fs-6" >
                                TRAVEL
                            </Link>
                            <Link to="/sports" className="navbar-brand fs-6" >
                                SPORTS
                            </Link>
                            <Link to="/videos" className="navbar-brand fs-6" >
                                VIDEOS
                            </Link>
                            <Link to="/entertainment" className="navbar-brand fs-6" >
                                ENTERTAINMENT
                            </Link>
                            <Link to="/photo" className="navbar-brand fs-6" >
                                PHOTO
                            </Link>
                            <Link to="/magazine" className="navbar-brand fs-6" >
                                MAGAZINE
                            </Link>
                            <Link to="/hindi" className="navbar-brand fs-6" >
                                HINDI
                            </Link>
                            <Link to="/others" className="navbar-brand fs-6" >
                                OTHERS
                            </Link>
                            <Link to="/agritech" className="navbar-brand fs-6" >
                                AGRITECH
                            </Link>
                            <Link to="#" >
                                <img
                                    src="https://www.outlookindia.com/images/home_new_v4/search_in_nav.svg"
                                    alt=""
                                />
                            </Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <hr style={{ height: "2px", width: "100 %", borderWidth: "100", color: "#d2051e" }} /> */}
        </>
    );
}
