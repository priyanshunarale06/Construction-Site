import React from "react";
import Header from "./component/Header";
import Footer from "./component/Footer";
import PageTitleImg from "./component/PageTitleImg";
import BlogCard from "./component/BlogCard";

export default function Blog() {
    return (
        <>
            <Header />
            <PageTitleImg title="BLOG" info="HOME / BLOG" />
            <div className="container mt-5 blog">
                <div className="row mt-5">
                    <div className="col-12 col-md-8">
                        <BlogCard img="blog1.png" title="Google inks pact for new 35-storey office" />
                        <BlogCard img="blog2.png" title="Google inks pact for new 35-storey office" />
                        <BlogCard img="blog3.png" title="Google inks pact for new 35-storey office" />
                        <BlogCard img="blog4.png" title="Google inks pact for new 35-storey office" />
                        <BlogCard img="blog5.png" title="Google inks pact for new 35-storey office" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-12 col-md-3">
                        <input type="text" className="w-100 p-2" />
                        <button className="btn border-warning text-warning w-100 p-3 rounded-0 mt-3">S E A R C H</button>
                        <ul className="shadow" style={{ listStyleType: "none" }}>
                            <li className="p-2 mt-4 fs-5 fw-bold">Category</li>
                            <hr className="mb-4"></hr>
                            <li className="p-1">Resaurant food</li>
                            <hr></hr>
                            <li className="p-1">Travel news</li>
                            <hr></hr>
                            <li className="p-1">Modern technology</li>
                            <hr></hr>
                            <li className="p-1">Product</li>
                            <hr></hr>
                            <li className="p-1">Inspiration</li>
                            <hr></hr>
                            <li className="p-1">Health Care</li>
                            <hr></hr>
                        </ul>
                        <ul className="shadow" style={{ listStyleType: "none" }}>
                            <li className="p-2 mt-4 fs-5 fw-bold">Recent Post</li>
                            <hr className="mb-4"></hr>
                            <li className="">
                                <img src="post_1.png" alt="" className="h-50 w-25"/>
                                <h6 className="listh6">From life was you fish...</h6>
                                <p className="listp">January 12, 2019</p>     
                            </li>
                            <hr></hr>
                            <li className="">
                                <img src="post_2.png" alt="" className="h-50 w-25"/>
                                <h6 className="listh6">From life was you fish...</h6>
                                <p className="listp">January 12, 2019</p>     
                            </li>
                            <hr></hr>
                            <li className="">
                                <img src="post_3.png" alt="" className="h-50 w-25"/>
                                <h6 className="listh6">From life was you fish...</h6>
                                <p className="listp">January 12, 2019</p>     
                            </li>
                            <hr></hr>
                            <li className="">
                                <img src="post_4.png" alt="" className="h-50 w-25"/>
                                <h6 className="listh6">From life was you fish...</h6>
                                <p className="listp">January 12, 2019</p>     
                            </li>
                            <hr></hr>
                        </ul>
                        <ul className="shadow" style={{ listStyleType: "none" }}>
                            <li className="p-2 mt-4 fs-5 fw-bold">NewsLetter</li>
                            <hr className="mb-4"></hr>
                        </ul>
                        <input type="text" placeholder="Enter Email" className="w-100 p-2" />
                        <button className="btn border-warning text-warning w-100 p-3 rounded-0 mt-3 mb-3">SUBSCRIBE</button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}