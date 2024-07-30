import React from "react";

export default function Latestcard(props) {
    return (
        <>
            <div className="col-12 col-md-6 mb-4 p-4 lc">
                <div className="card rounded-0 border-0"style={{ "width": "18rem;" }}>
                    <img className="card-img-top rounded-0" src={props.img} alt="" />
                    <div className="card-body">
                    <p className="card-text ms-2">| Properties</p>
                    <h3 className="card-title ms-2">{props.title}</h3>
                    <button className="btn">Read More..</button>
                    </div>
                </div>
            </div>
        </>
    )
}