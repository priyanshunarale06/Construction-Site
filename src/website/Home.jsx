import Header from "./component/Header";
import ServiceCard from "./component/ServiceCard";
import ProjectsCard from "./component/ProjectsCard";
import Teamcard from "./component/Teamcard";
import Latestcard from "./component/Latestcard";
import Footer from "./component/Footer";

export default function Home() {
    return (
        <>
            <Header />
            <>
                <section className="home">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <p>HAND CAR WASH AND DETAILING SERVICE</p>
                                <h1>ADVANCED</h1>
                                <h2>CONSTRUCTION</h2>
                                <h6>OUR SERVICES</h6>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="services">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mt-5 mb-4">OUR SERVICES</h1>
                            </div>
                            <ServiceCard img="servicess1.png" title="Engineering techniques & implementation" />
                            <ServiceCard img="servicess2.png" title="Engineering techniques & implementation" />
                            <ServiceCard img="servicess3.png" title="Engineering techniques & implementation" />
                        </div>
                    </div>
                </section>
                <section className="wwa">
                    <div className="container-fluid mb-5">
                        <div className="row">
                            <div className="col-12 col-md-6">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="mt-5 mb-4">WHO WE ARE</h1>
                                    </div>
                                    <div className="col-12">
                                        <h4>Mollit anim laborum duis au dolor in voluptcate velit ess cillum dolore eu lore dsu quality mollit anim laborumuis au dolor in voluptate velit cillu.</h4>
                                    </div>
                                    <div className="col-12">
                                        <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.</p>
                                    </div>
                                    <div className="col-5 col-md-3 ms-3 mb-5">
                                        <button className="btn btn-warning text-white mt-4 p-3 w-100 bg">Read More</button>
                                    </div>
                                </div>
                            </div>
                            <div className="col-12 col-md-6">
                                <img src="img1.png" alt="" className="w-100 " />
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ourprojects">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mt-4 mb-4">OUR PROJECTS</h1>
                            </div>
                            <div className="col-6"></div>
                            <div className="col-12 col-md-6">
                                <ul>
                                    <li className="d-inline-block ms-4">Show All</li>
                                    <li className="d-inline-block ms-4">Intorior</li>
                                    <li className="d-inline-block ms-4">Recent</li>
                                    <li className="d-inline-block ms-4">Big Building</li>
                                    <li className="d-inline-block ms-4">Park</li>
                                </ul>
                            </div>
                            <ProjectsCard img="project1.png" title="Floride Chemicals Factory" />
                            <ProjectsCard img="project2.png" title="Floride Chemicals Factory" />
                            <ProjectsCard img="project3.png" title="Floride Chemicals Factory" />
                            <ProjectsCard img="project4.png" title="Floride Chemicals Factory" />
                            <ProjectsCard img="project5.png" title="Floride Chemicals Factory" />
                            <ProjectsCard img="project6.png" title="Floride Chemicals Factory" />
                        </div>
                    </div>
                </section>
                <section className="talk mt-2 mt-md-5 ">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h2>LETS CHAT</h2>
                                <h1>Lats talk with us</h1>
                            </div>
                            <div className="col-12 col-md-8 mt-3 mt-md-5 text-white">
                                <p>Mollit anim laborum.Dvcuis aute iruxvfg dhjkolohr in re voluptate velit esscillumlore eu quife nrulla parihatur. Excghcepteur sfwsignjnt occa cupidatat non aute iruxvfg dhjinulpadeserunt mollitemnth incididbnt ut;o5tu layjobore mofllit anim.</p>
                            </div>
                            <div className="col-4 mt-2 mt-md-3">
                            </div>
                            <div className="col-12">
                                <button className="btn bg-white rounded-0 p-2 mt-4 mt-md-5">READ MORE</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="">
                    <div className="container orangepart">
                        <div className="row">
                            <div className="col-1 mt-5"></div>
                            <div className="col-3 col-md-1 mt-5">
                                <h1 className="ms-5 ms-md-3">34</h1>
                            </div>
                            <div className="col-6 col-md-1 mt-5 ms-4 ms-md-0">
                                <p className="text-white">MACHINARY</p>
                                <h2>TOOLS</h2>
                            </div>
                            <div className="col-1 mt-5"></div>
                            <div className="col-1 mt-5"></div>
                            <div className="col-3 col-md-1 mt-5">
                                <h1 className="ms-5 ms-md-3">08</h1>
                            </div>
                            <div className="col-6 col-md-1 mt-5 ms-4 ms-md-0">
                                <p className="text-white">MACHINARY</p>
                                <h2>TOOLS</h2>
                            </div>
                            <div className="col-1 mt-5"></div>
                            <div className="col-1 mt-5"></div>
                            <div className="col-3 col-md-1 mt-5">
                                <h1 className="ms-5 ms-md-3">76</h1>
                            </div>
                            <div className="col-6 col-md-1 mt-5 ms-4 ms-md-0">
                                <p className="text-white">MACHINARY</p>
                                <h2>TOOLS</h2>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ourteam">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mt-4 mb-4">OUR TEAM</h1>
                            </div>
                            <Teamcard img="team1.png" title="Ethan Welch" />
                            <Teamcard img="team2.png" title="Welch Welch" />
                            <Teamcard img="team3.png" title="Ethan Ethan" />
                        </div>
                    </div>
                </section>
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
                                            <img src="coursel.png" width={"100%"} alt="" height={"250px"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item" data-bs-interval="2000">
                                    <div style={{ height: "400px" }}>
                                        <div className="carousel-caption d-block">
                                            <img src="coursel.png" width={"100%"} alt="" height={"250px"} />
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div style={{ height: "400px" }}>
                                        <div className="carousel-caption d-block">
                                            <img src="coursel.png" alt="" width={"100%"} height={"250px"} />
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
                <section className="ourteam">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <h1 className="mt-4 mb-4">LATEST NEWS</h1>
                            </div>
                            <Latestcard img="news1.png" title="Footprints in Time is perfect House in Kurashiki" />
                            <Latestcard img="news2.png" title="Footprints in Time is perfect House in Kurashiki" />
                        </div>
                    </div>
                </section>
            </>
            <Footer />
        </>
    )
}