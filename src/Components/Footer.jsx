import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
import '../App.css'
export default function Footer() {

    return (
        <div>
            <div className="relative-bottom"  >
                {/* <!-- Footer --> */}
                <footer style={{ backgroundColor: "#212020" }}>

                    {/* <!-- Footer Links --> */}
                    {/* <div className="container"> */}

                    {/* <!-- Grid row --> */}
                    <div style={{ display: "flex" }}>

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 ">

                            {/* <!-- Links --> */}
                            <p className="font-weight-bold text-uppercase mt-3 mb-4" style={{ color: "white" }}>Main Stories</p>

                            <ul className="list-unstyled"  >
                                <li >
                                    <Link to="#!">Magazine</Link>
                                </li>
                                <li>
                                    <Link to="#!">NATIONAL</Link>
                                </li>
                                <li>
                                    <Link to="#!">INTERNATIONAL</Link>
                                </li>
                                <li>
                                    <Link to="#!">BUSINESS</Link>
                                </li>
                                <li>
                                    <Link to="#!">OPINIONS</Link>
                                </li>
                                <li>
                                    <Link to="#!">BOOK REVIEWS</Link>
                                </li>
                                <li>
                                    <Link to="#!">THE NEWS</Link>
                                </li>
                                <li>
                                    <Link to="#!">SPORTS</Link>
                                </li>
                                <li>
                                    <Link to="#!">ART & ENTERTAINMENT</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <hr className="clearfix w-100 d-md-none" /> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 ">

                            {/* <!-- Links --> */}
                            <p className="font-weight-bold text-uppercase mt-3 mb-4" style={{ color: "white" }}>Traveller</p>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#!">TRAVELOGUES</Link>
                                </li>
                                <li>
                                    <Link to="#!">WEEKEND BREAKS</Link>
                                </li>
                                <li>
                                    <Link to="#!">HOLIDAYS WITH OT</Link>
                                </li>
                                <li>
                                    <Link to="#!">PHOTO FEATURES</Link>
                                </li>
                                <li>
                                    <Link to="#!">HOTELS</Link>
                                </li>
                                <li>
                                    <Link to="#!">GUIDEBOOKS</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <hr className="clearfix w-100 d-md-none" /> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 ">

                            {/* <!-- Links --> */}
                            <p className="font-weight-bold text-uppercase mt-3 mb-4" style={{ color: "white" }}>Money
                            </p>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#!">Mutual Funds</Link>
                                </li>
                                <li>
                                    <Link to="#!">Insurance</Link>
                                </li>
                                <li>
                                    <Link to="#!">Equity</Link>
                                </li>
                                <li>
                                    <Link to="#!">Fixed Assets</Link>
                                </li>
                                <li>
                                    <Link to="#!">Banking</Link>
                                </li>
                                <li>
                                    <Link to="#!">ASK</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <hr className="clearfix w-100 d-md-none" /> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 ">

                            {/* <!-- Links --> */}
                            <p className="font-weight-bold text-uppercase mt-3 mb-4" style={{ color: "white" }}>Business</p>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#!">THE BIG STORY</Link>
                                </li>
                                <li>
                                    <Link to="#!">SPECIALS</Link>
                                </li>
                                <li>
                                    <Link to="#!">PERSPECTIVE</Link>
                                </li>
                                <li>
                                    <Link to="#!">PIXSTORY</Link>
                                </li>
                                <li>
                                    <Link to="#!">ENTERPRISE</Link>
                                </li>
                                <li>
                                    <Link to="#!">STRATEGY</Link>
                                </li>
                                <li>
                                    <Link to="#!">MARKETS</Link>
                                </li>
                                <li>
                                    <Link to="#!">C'EST LA VIE</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}


                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 ">

                            {/* <!-- Links --> */}
                            <p className="font-weight-bold text-uppercase mt-3 mb-4" style={{ color: "white" }}>Social Media</p>

                            <ul className="list-unstyled">
                                <li>
                                    <Link to="#!">Facebook</Link>
                                </li>
                                <li>
                                    <Link to="#!">Twitter</Link>
                                </li>
                                <li>
                                    <Link to="#!">Instagram</Link>
                                </li>
                                <li>
                                    <Link to="#!">Youtube</Link>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}



                    </div>
                    {/* <!-- Grid row --> */}

                    {/* </div> */}
                    {/* <!-- Footer Links --> */}

                </footer>
                {/* <!-- Footer --> */}

                <div style={{ color: "white", backgroundColor: "#181818", padding: "1rem", marginBottom: "-1rem" }} >

                    <Link to="#" className="navbar-brand fs-6 mx-4"  >
                        About Us
                    </Link>
                    <Link to="#" className="navbar-brand fs-6  mx-4" >
                        Contact Us
                    </Link>
                    <Link to="#" className="navbar-brand fs-6  mx-4" >
                        Subscribe
                    </Link>
                    <Link to="#" className="navbar-brand fs-6  mx-4" >
                        Copyright & Disclaimer
                    </Link>
                    <Link to="#" className="navbar-brand fs-6  mx-4" >
                        Osm Awards
                    </Link>
                    <Link to="#" className="navbar-brand fs-6  mx-4" >
                        Compliance
                    </Link>
                    <Link to="#" className="navbar-brand fs-6  mx-4" >
                        Poshan
                    </Link>

                </div>
            </div >
        </div >


    )
}
