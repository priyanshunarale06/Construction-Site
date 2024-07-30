import React from "react";

export default function ServiceCard(props) {
    return (
        <>
            <div className="col-12 col-md-4 mb-4 p-5 p-md-3">
                <div className="card rounded-0 border-0 zoom">
                    <img className="card-img-top rounded-0" src={props.img} alt="" />
                    <div className="card-body">
                    <h5 className="card-title mt-4">{props.title}</h5>
                    <p className="card-text mt-2">Read More<button className="btn ms-2">+</button></p>
                    </div><hr ></hr>
                </div>
            </div>
        </>
    )
}