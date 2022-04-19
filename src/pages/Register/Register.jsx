import React from 'react';
import "./Register.css";
import { useState } from "react";
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

export default function Register() {
    const [file,setFile] = useState(null);
    const [name, setname] = useState("");
    const [username, setusername] = useState("");
    const [fbid, setfbid] = useState("#");
    const [instaid, setinstaid] = useState("#");
    const [twitterid, settwitterid] = useState("#");
    const [youtubeid, setyoutubeid] = useState("#");
    const [password, setpassword] = useState("");
    const navigate= useNavigate();


    const handleSubmit = async (e)=>{
        e.preventDefault();

        try{
            var fd = new FormData();
            fd.append("name",name);
            fd.append("username",username);
            fd.append("fbid",fbid);
            fd.append("instaid",instaid);
            fd.append("twitterid",twitterid);
            fd.append("youtubeid",youtubeid);
            fd.append("password",password);
            fd.append("profilepic",file);
            const res = await axios.post("http://localhost:5000/api/auth/register",fd);
            alert(res.data.status + " Redirecting to Login Page");
            setTimeout(()=>{
                navigate("/login");
            },2000)
        }catch(err){
            console.log(err);
        }
    }


  return (

    <div className="out-contain">
        <div className="card-cont">
            <div className="heading-cont">
                <span className='heading-text'>Register</span>
                <span><i className="fa fa-pencil-square icon"></i></span>
            </div>
            {file?<img className='img-prof' src={URL.createObjectURL(file)} alt="No Internet"/>: <img className='img-prof' src="https://pokemonrevolution.net/forum/uploads/monthly_2018_04/download.png.b1d9c82499e47c0f8a2911f602c46d26.png" alt="No Internet"/>}
            <form onSubmit={handleSubmit} className='writeForm'>
                <div className="form-group">
                    <label className="back-img-label alignment" htmlFor="file-input">
                        <i className="fa fa-plus-circle" />
                        <span>Profile Pic<span style={{color: "red"}}>*</span></span>
                    </label>
                    <input type="file" id='file-input' style={{display:"none"}} onChange={(e)=> setFile(e.target.files[0])} required/>
                </div>
                <div className="form-group">
                    <label className="title-label" htmlFor="name">
                        <span>Name<span style={{color: "red"}}>*</span></span>
                    </label>
                    <input type="text" id='name' className='title-area' placeholder="Write Your Name Here...." required onChange={(e)=> setname(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="title-label" htmlFor="username">
                        <span>Username<span style={{color: "red"}}>*</span></span>
                    </label>
                    <input type="text" id='username' className='title-area' placeholder="Write the Username Here...." onChange={(e)=> setusername(e.target.value)} required/>
                </div>
                <div className="form-group">
                    <label className="title-label" htmlFor="fbid">
                        <span>Facebook Profile Link</span>
                    </label>
                    <input type="text" id='fbid' className='title-area' placeholder="Your Facebook Profile Link...." onChange={(e)=> setfbid(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="title-label" htmlFor="instaid">
                        <span>Instagram Profile Link</span>
                    </label>
                    <input type="text" id='instaid' className='title-area' placeholder="Your Instagram Profile Link...." onChange={(e)=> setinstaid(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="title-label" htmlFor="twitterid">
                        <span>Twitter Profile Link</span>
                    </label>
                    <input type="text" id='twitterid' className='title-area' placeholder="Your Twitter Profile Link...." onChange={(e)=> settwitterid(e.target.value)} />
                </div>
                <div className="form-group">
                    <label className="title-label" htmlFor="youtubeid">
                        <span>Youtube Channel</span>
                    </label>
                    <input type="text" id='youtubeid' className='title-area' placeholder="Your Youtube Channel Link...." onChange={(e)=> setyoutubeid(e.target.value)}/>
                </div>
                <div className="form-group">
                    <label className="title-label" htmlFor="password">
                        <span>Password<span style={{color: "red"}}>*</span></span>
                    </label>
                    <input type="password" id='password' className='title-area' placeholder="Write your Password here....." required onChange={(e)=> setpassword(e.target.value)}/>
                </div>

                <div className="button-div">
                <button className='writeSubmitButton' type='submit'>Register<i className="fa fa-paper-plane"></i></button>
                </div>

            </form>
        </div>
    </div>
  )
}
