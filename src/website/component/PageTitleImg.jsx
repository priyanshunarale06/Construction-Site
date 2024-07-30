import React from "react";

export default function PageTitleImg(props){
    return(
        <>
            <div className="container-fluid pti">
                <div className="row">
                    <div className="col-12 p-0">
                        <img src="https://www.thepromolab.co.nz/wp-content/uploads/2020/09/hi-vis-clothing-feature-980x250.png" alt=""/>
                        <h1>{props.title}</h1>
                        <h2>{props.info}</h2>
                    </div>
                </div>
            </div>
        </>
    )
}