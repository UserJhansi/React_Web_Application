import React, { useState } from "react";
 
const Page_1 = () => {
    const [image, setImage] = useState("")
    const [video, setVideo] = useState("")

    const submitImage = ()=>{
        const data = new FormData()
        data.append("file", image)
        data.append("upload_preset", "kdagxnir")
        data.append("cloud_name", "diad1fvnm")

        fetch("https://console.cloudinary.com/console/c-452f35f2e2652e23f57365fe71d932/media_library/search?=", ({
            method:"post", 
            body:data
        })
         .then((res)=>res.json())
         .then((data)=>{
            console.log(data);
         }).catch((err)=>{
            console.log(err);
         })
       
        )
    }
    const submitVideo = ()=>{
        const data = new FormData()
        data.append("file", video)
        data.append("upload_preset", "avvhille")
        data.append("cloud_name", "diad1fvnm")

        fetch("https://res.cloudinary.com/diad1fvnm/video/upload/v1692810421/Digitalization_People_technology_and_services_gbi71n.mp4", ({
            method:"post", 
            body:data
        })
         .then((res)=>res.json())
         .then((data)=>{
            console.log(data);
         }).catch((err)=>{
            console.log(err);
         })
       
        )
    }
    const submitImageVideo = ()=>{
        const data = new FormData()
        data.append("file", image)
        data.append("file", video)
        data.append("upload_preset", "avvhille")
        data.append("cloud_name", "diad1fvnm")

        fetch("https://console.cloudinary.com/console/c-452f35f2e2652e23f57365fe71d932/media_library/search?=", ({
            method:"post", 
            body:data
        })
         .then((res)=>res.json())
         .then((data)=>{
            console.log(data);
         }).catch((err)=>{
            console.log(err);
         })
       
        )
    }
    const submitForm = ()=>{
        const data = new FormData()
        data.append("file", image)
        data.append("file", video)
        data.append("upload_preset", "avvhille")
        data.append("cloud_name", "diad1fvnm")

        fetch("https://console.cloudinary.com/console/c-452f35f2e2652e23f57365fe71d932/media_library/search?=", ({
            method:"post", 
            body:data
        })
         .then((res)=>res.json())
         .then((data)=>{
            console.log(data);
         }).catch((err)=>{
            console.log(err);
         })
       
        )
    }

    return (
        <div>
            <h2>Web Page_1</h2>
            <p>
            <form id="f1" name="f1" style={{backgroundColor: "pink", height: 590, fontSize: 19, fontFamily: "Times New Roman"}}>
                <br></br><br></br>
            Enter Title:   <input type="text" name="t1" id="t1"  maxLength={50} placeholder=" Max 50 characters " />
            <br></br><br></br><br></br>
            Enter Discription: 
                <label> <textarea rows={5} cols={50} maxLength={200} placeholder="Enter Discription that don't exceed 200 characters" /> </label>
                <br></br><br></br>
                <br></br><br></br>
                <label> Upload Thumbnail  <input type="file" onChange={(e)=>{console.log(e)}} style={{fontSize: 15}} accept=".jpg, .png" /></label> 
                <button onClick={submitImage} style={{fontSize: 16}}> Upload Image </button>
                <br></br><br></br>
                <br></br><br></br>
                <label> Upload Video  <input type="file" onChange={(e)=>{console.log(e)}}  style={{fontSize: 16}}accept=".mpg, .avi, .mp4" /></label>
                <button onClick={submitVideo} style={{fontSize: 16}}> Upload Video </button>
                <br></br><br></br>
                <br></br><br></br>
                <label>
                <button onClick={submitImageVideo} style={{fontSize: 16}}> Upload Image and Video to cloudinary </button></label>
            
            </form>
            </p>
        </div>
    );
};
 
export default Page_1;