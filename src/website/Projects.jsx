import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ProjectsCard from "./component/ProjectsCard";
import PageTitleImg from "./component/PageTitleImg";

export default function Projects() {
    return (
        <>
            <Header />
            <PageTitleImg title="Projects" info="HOME / PROJECTS" />
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
            <Footer />
        </>
    )
}