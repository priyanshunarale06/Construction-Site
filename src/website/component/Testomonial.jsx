import React from "react";

export default function Testomonial() {
    return (
        <section className="talk mt-2 mt-md-5 testo">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>FEEDBACK</h2>
                        <h1>TESTIMONIAL</h1>
                    </div>
                </div>
            </div>
            <div className="container">
                <div id="carouselExampleDark" className="carousel carousel-dark slide">
                    <div className="carousel-inner">
                        <div className="carousel-item active" data-bs-interval="10000">
                            <div style={{ height: "400px" }}>
                                <div className="carousel-caption d-block">
                                    <img src="coursel.png" width={"100%"} height={"250px"} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item" data-bs-interval="2000">
                            <div style={{ height: "400px" }}>
                                <div className="carousel-caption d-block">
                                    <img src="coursel.png" width={"100%"} height={"250px"} alt="" />
                                </div>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <div style={{ height: "400px" }}>
                                <div className="carousel-caption d-block">
                                    <img src="coursel.png" width={"100%"} height={"250px"} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </section>
    )
}