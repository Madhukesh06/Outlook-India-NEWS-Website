import React from 'react'
import '../App.css'
export default function Navbar() {
    return (
        <>
            <div className="container mb-4">
                <img src="https://www.outlookindia.com/images/home_new_v4/logo_outlook.svg" alt="Outlook logo" />
            </div>

            <nav className="navbar navbar-expand-lg navbar sticky-top bb-3 ">

                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="container">
                        <div className="fs-5" id="navbarTogglerDemo01">
                            <a className="navbar-brand fs-6" href="#">HOME</a>
                            <a className="navbar-brand fs-6" href="#">OUTLOOK</a>
                            <a className="navbar-brand fs-6" href="#">BUISNESS</a>
                            <a className="navbar-brand fs-6" href="#">MONEY</a>
                            <a className="navbar-brand fs-6" href="#">CRYPTO CORNER</a>
                            <a className="navbar-brand fs-6" href="#">TRAVEL</a>
                            <a className="navbar-brand fs-6" href="#">SPORTS</a>
                            <a className="navbar-brand fs-6" href="#">VIDEOS</a>
                            <a className="navbar-brand fs-6" href="#">ENTERTAINMENT</a>
                            <a className="navbar-brand fs-6" href="#">PHOTO</a>
                            <a className="navbar-brand fs-6" href="#">MAGAZINE</a>
                            <a className="navbar-brand fs-6" href="#">HINDI</a>
                            <a className="navbar-brand fs-6" href="#">OTHERS</a>
                            <a className="navbar-brand fs-6" href="#">AGRITECH</a>
                            <a href="#"><img src="https://www.outlookindia.com/images/home_new_v4/search_in_nav.svg" alt="" /></a>
                        </div>
                    </div>
                </div>
            </nav>
            {/* <hr style={{ height: "2px", width: "100 %", borderWidth: "100", color: "#d2051e" }} /> */}


        </>
    )
}
