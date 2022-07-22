import React from 'react'
import Navbar from './Navbar'
import { Link } from "react-router-dom";
export default function Footer() {
    return (
        <div>
            <div class="relative-bottom">
                {/* <!-- Footer --> */}
                <footer style={{ backgroundColor: "#212020" }}>

                    {/* <!-- Footer Links --> */}
                    {/* <div className="container"> */}

                    {/* <!-- Grid row --> */}
                    <div style={{ display: "flex" }}>

                        {/* <!-- Grid column --> */}
                        <div className="col-md-3 ">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Very long link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Very long link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Very long link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Very long link 4</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <hr className="clearfix w-100 d-md-none" /> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 ">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <hr className="clearfix w-100 d-md-none" /> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 ">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}

                        {/* <hr className="clearfix w-100 d-md-none" /> */}

                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 ">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
                                </li>
                            </ul>

                        </div>
                        {/* <!-- Grid column --> */}


                        {/* <!-- Grid column --> */}
                        <div className="col-md-2 ">

                            {/* <!-- Links --> */}
                            <h5 className="font-weight-bold text-uppercase mt-3 mb-4">Links</h5>

                            <ul className="list-unstyled">
                                <li>
                                    <a href="#!">Link 1</a>
                                </li>
                                <li>
                                    <a href="#!">Link 2</a>
                                </li>
                                <li>
                                    <a href="#!">Link 3</a>
                                </li>
                                <li>
                                    <a href="#!">Link 4</a>
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

                <div style={{ color: "white", backgroundColor: "#181818", padding: "1rem" }} >

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
            </div>
        </div>


    )
}
