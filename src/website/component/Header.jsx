import React from "react";
import "../style.css"
import { NavLink } from "react-router-dom";

export default function Header() {
    return (
                    <>
                        <header className="menu">
                            <div className="container d-none d-md-block">
                                <div className="row">
                                    <div className="col-5">
                                        <ul>
                                            <li className="mt-2 text-white d-inline-block">9356615691</li>
                                            <li className="mt-2 text-white d-inline-block ms-4">construction@gmail.com</li>
                                        </ul>
                                    </div>
                                    <div className="col-4">
                                        <p className="mt-2 text-white">Monday-Saturday</p>
                                    </div>
                                    <div className="col-3">
                                        <ul>
                                            <li className="d-inline-block ms-4 mt-2 text-white"><i className="fa-brands fa-twitter"></i></li>
                                            <li className="d-inline-block ms-4 mt-2 text-white"><i className="fa-brands fa-facebook-f"></i></li>
                                            <li className="d-inline-block ms-4 mt-2 text-white"><i className="fa-brands fa-linkedin-in"></i></li>
                                            <li className="d-inline-block ms-4 mt-2 text-white"><i className="fa-brands fa-google-plus-g"></i></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="container-fluid border-top border-secondary m-0 p-0 d-none d-md-block"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-4 col-md-3">
                                        <img src="logo.png" alt="" className="w-100 mt-md-4 mb-md-4 d-none d-md-block" />
                                        <img src="loder-logo.png" alt="" className="p-2 d-md-none d-block" />
                                    </div>
                                    <div className="col-8 col-md-7">
                                        <nav className="navbar navbar-expand-lg justify-content-end">
                                            <button className="navbar-toggler navbtn mt-2" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                                <span className="navbar-toggler-icon"></span>
                                            </button>
                                            <div className="collapse navbar-collapse d-md-flex justify-content-md-center" id="navbarSupportedContent">
                                                <ul className="navbar-nav me-auto mt-4 mb-2 mb-lg-0 navul">
                                                    <li className="nav-item">
                                                        <NavLink to="/" className="nav-link ms-3 ms-md-5 text-white navli">Home</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/about" className="nav-link ms-3 text-white navli">About</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/projects" className="nav-link ms-3 text-white navli">Projects</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/services" className="nav-link ms-3 text-white navli">Services</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/blog" className="nav-link ms-3 text-white navli">Blog</NavLink>
                                                    </li>
                                                    <li className="nav-item">
                                                        <NavLink to="/contact" className="nav-link ms-3 text-white navli">Contact</NavLink>
                                                    </li>
                                                </ul>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="col-2 d-none d-md-block">
                                        <button className="btn btn-warning text-white mt-4 p-3 w-100 bg">Contact now</button>
                                    </div>
                                </div>
                            </div>
                        </header>
                    </>
                )
}