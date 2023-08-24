import React from "react";
import { Link, useNavigate } from 'react-router-dom';
// import * as React from 'react';
import { Navigate } from 'react-router-dom';
import Page_3 from "./Page_3";


 
const Page_2 = () => {
    const navigate = useNavigate();

    console.log(Page_2)
    return (
            <div className="page_2">
                <h2>Web Page_2</h2>
                <h3>List of Images with Title from Cloudinary Uploads</h3>
                <p>
                <form id="f2" name="f2" style={{ textAlign: "center", backgroundColor: "lightblue", height: 585, width:1700}}><br></br>
                <label><b> A Man can do anything with Coding </b></label>
                <br></br><br></br>
                <label>
                <img src={"https://res.cloudinary.com/diad1fvnm/image/upload/v1692814932/Tech_t5ait9.webp"} height="200" width="390"/></label><br></br>
                <label>
                    <Link to="/Page_3"> Go To Video </Link></label>
                    <br></br><br></br>
                <label><b> We are living in the greate explored Technical World !! </b></label>
                <br></br><br></br>
                <img src={"https://res.cloudinary.com/diad1fvnm/image/upload/v1692815216/Tech_2_ipzeri.png"} height="200" width="390"/>
                <br></br>
                <label>
                    <Link to="/Page_3"> Go To Video </Link></label>
                </form>
                </p>
                </div>
                )
            }

export default Page_2; 
  