import React from "react";
import Header from "./component/Header";
import PageTitleImg from "./component/PageTitleImg";
import Footer from "./component/Footer";
import WhoWeAre from './component/WhoWeAre';
import Testomonial from './component/Testomonial';
import OurTeam from './component/OurTeam';

export default function About(){
    return(
        <>
            <Header/>
            <PageTitleImg title="ABOUT US" info="HOME / PRODUCT"/>
            <WhoWeAre/>
            <Testomonial/>
            <OurTeam/>
            <Footer/>
        </>
    )
}