import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import PageTitleImg from "./component/PageTitleImg";

export default function Contact() {
    return (
        <>
            <Header />
            <PageTitleImg title="CONTACT" info="HOME / Contact" />
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-4">
                        <h2>Get in Touch</h2>
                    </div>
                    <div className="col-12 col-md-8">
                        <div className="row">
                            <div className="col-12 mt-4">
                                <textarea className="w-100" placeholder="Enter Your Message" rows={8}></textarea>
                            </div>
                            <div className="col-12 col-md-6  mt-4">
                                <input className="w-100 p-2" type="text" placeholder="Enter Your Email" />
                            </div>
                            <div className="col-12 col-md-6  mt-4">
                                <input className="w-100 p-2" type="text" placeholder="Enter Your Email" />
                            </div>
                            <div className="col-12  mt-4">
                                <input className="w-100 p-2" type="text" placeholder="Enter Subject" />
                            </div>
                            <div className="col-12  mt-4">
                                <button className="btn border-warning text-warning p-3 rounded-0 ps-4 pe-4 mb-4">S E N D</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-10 col-md-4">
                        <div className="row">
                            <div className="col-2 mt-4"></div>
                            <div className="col-2 mt-4 ">
                                <i class="fa-solid fa-house fs-2"></i>
                            </div>
                            <div className="col-8 mt-4 ">
                                <h6>Buttonwood, California.Rosemead, CA 91770</h6>
                            </div>
                            <div className="col-2 mt-4 "></div>
                            <div className="col-2 mt-4 ">
                            <i class="fa-solid fa-mobile-screen fs-2"></i>
                            </div>
                            <div className="col-8 mt-4 ">
                                <h6>+1 253 565 2365 <br/>Mon to Fri 9am to 6pm</h6>
                            </div>
                            <div className="col-2 mt-4 "></div>
                            <div className="col-2 mt-4 ">
                                <i class="fa-regular fa-envelope fs-2"></i>
                            </div>
                            <div className="col-8 mt-4 ">
                                <h6>support@colorlib.com Send us your query anytime!</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}