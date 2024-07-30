import React from "react";

export default function Footer(){
    return(
        <>
            <section>
                <div className="container-fluid" style={{ backgroundColor: "#070a11" }}>
                    <div className="row p-0">
                        <div className="col-12 p-0">
                            <img src="load.png" alt="" className="w-100"></img>
                        </div>
                    </div>
                    <div className="container pb-5">
                        <div className="row">
                            <div className="col-12 col-md-4">
                                <img src="logo2_footer.png" alt="" className="mt-5" />
                                <h6 className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore.</h6>
                            </div>
                            <div className="col-12 col-md-2">
                                <h3 className="text-white mt-5">Quick Links</h3>
                                <ul style={{ listStyleType: "none" }}>
                                    <li className="text-secondary mt-2" style={{ marginLeft: "-30px" }}>About</li>
                                    <li className="text-secondary mt-2" style={{ marginLeft: "-30px" }}>Services</li>
                                    <li className="text-secondary mt-2" style={{ marginLeft: "-30px" }}>Projects</li>
                                    <li className="text-secondary mt-2" style={{ marginLeft: "-30px" }}>Contact Us</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-3 ms-md-2">
                                <h3 className="text-white mt-5">Contact</h3>
                                <ul style={{ listStyleType: "none" }}>
                                    <li className="text-secondary mt-2" style={{ marginLeft: "-30px" }}>198 West 21th Street, Suite 721 New York,NY 10010</li>
                                    <li className="text-secondary mt-2" style={{ marginLeft: "-30px" }}>Phone: +95 (0) 123 456 789</li>
                                    <li className="text-secondary mt-2" style={{ marginLeft: "-30px" }}>Cell: +95 (0) 123 456 789</li>
                                </ul>
                            </div>
                            <div className="col-12 col-md-2 ms-md-5">
                                <div className="row mt-5">
                                    <div className="col-10 p-0">
                                        <input placeholder="Email Address" type="text" className="w-100 p-2 border-0" style={{ backgroundColor: "#1e2a3a" }} />
                                    </div>
                                    <div className="col-2 p-0">
                                        <button className="btn text-white">Sign</button>
                                    </div>
                                    <div className="col-12 mt-3">
                                        <img src="map-footer.png" alt="" style={{ height: "170px", width: "300px" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}