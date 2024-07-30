import React from "react";
import Teamcard from "./Teamcard";

export default function OurTeam(){
    return(
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
    )
}