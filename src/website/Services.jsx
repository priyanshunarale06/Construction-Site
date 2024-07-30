import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import ServiceCard from "./component/ServiceCard";
import PageTitleImg from "./component/PageTitleImg";

export default function Services() {
    return (
        <>
            <Header />
            <PageTitleImg title="SERVICES" info="HOME / SERVICES" />
            <section className="services">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="mt-5 mb-4">OUR SERVICES</h1>
                        </div>
                        <ServiceCard img="servicess1.png" title="Engineering techniques & implementation" />
                        <ServiceCard img="servicess2.png" title="Engineering techniques & implementation" />
                        <ServiceCard img="servicess3.png" title="Engineering techniques & implementation" />
                        <ServiceCard img="servicess4.png" title="Engineering techniques & implementation" />
                        <ServiceCard img="servicess5.png" title="Engineering techniques & implementation" />
                        <ServiceCard img="servicess6.png" title="Engineering techniques & implementation" />
                    </div>
                </div>
            </section>
            <Footer />
        </>
    )
}