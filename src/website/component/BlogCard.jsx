import React from "react";

export default function BlogCard(props) {
    return (
        <>
            <div className="col-12">
                <div class="card border-0 p-2 mb-4 shadow">
                    <img class="card-img-top" src={props.img} alt="" />
                    <div class="card-body">
                        <h3 class="card-title mt-3 p-2">{props.title}</h3>
                        <p class="card-text mt-3 p-2">That dominion stars lights dominion divide years for fourth have don't stars is that he earth it first without heaven in place seed it second morning saying.</p>
                        <p><i class="fa-solid fa-user"></i> Travel, Lifestyle | <i class="fa-regular fa-comment"></i> 03 Comments</p>
                    </div>
                </div>
            </div>
        </>
    )
}