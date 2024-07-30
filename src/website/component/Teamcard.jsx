import React from "react";

export default function Teamcard(props){
    return(
        <>
            <div className="col-12 col-md-4 mb-md-4 mb-1 p-4">
                <div className="card rounded-0 border-0"style={{ "width": "18rem;" }}>
                    <img className="card-img-top rounded-0" src={props.img} alt=""  />
                    <div className="card-body">
                    <p className="card-text" style={{color:"#ff5f13",fontSize:"10px"}}>UX Designer</p>
                    <h5 className="card-title"><b>{props.title}</b></h5>
                    </div>
                </div>
            </div>
        </>
    )
}