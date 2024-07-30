import React from "react";
import "../style.css"

export default function ProjectsCard(props){
    return(
        <>
            <div className="col-12 col-md-4 procard mb-md-4 p-5 p-md-4">
            <div className="card rounded-0 border-0 cd" style={{ "width": "18rem;" }}>
                    <img className="card-img-top rounded-0" src={props.img} alt="" />
                    <div className="card-body">
                    <h5 className="card-title ct mb-0">{props.title}</h5>
                    <button className="btn rounded-0 bt">+</button>
                    </div>
                </div>
            </div>
        </>
    )
}