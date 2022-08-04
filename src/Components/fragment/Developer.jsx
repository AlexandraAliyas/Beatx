import React from 'react';
import '../assets/scss/Developer.scss';
import {IconButton} from "@material-ui/core";
import AvatarImage from "../assets/img/avatar.jpg";
import {Facebook, Instagram, LinkedIn, Portrait, Twitter} from "@material-ui/icons";

const Developer = () => {
    return (
        <div className={"Developer"}>
            <h3 className={"Developer-head"}>A brief about our app</h3>
            <div className="Developer-profile">
                <div className="Developer-profileCard">
                    {/* <img src={AvatarImage} alt="Profile"/> */}
                    <div className={"Card-details"}>
                        <h3>Team 12</h3>
                    </div>
                </div>
                <div className="Developer-profileDetails">
                    <p>This application is made truly to help users have a better day with music</p>
                    <p>It allows the users to view and play their music as playlists.</p>
                    <p>The application also provides the feature of selecting what language music the user prefers to listen.</p>
                    {/* <div className="Card-btn">
                        <IconButton target={"_blank"}  href={"https://www.facebook.com/vishal.kld"} title={"vishal.kld"}>
                            <Facebook/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://twitter.com/Vishal_kld"}  title={"Vishal_kld"}>
                            <Twitter/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.linkedin.com/in/vishalsingh-/"}  title={"vishalsingh-"}>
                            <LinkedIn/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://www.instagram.com/vishalsingh023/"}  title={"vishalsingh023"}>
                            <Instagram/>
                        </IconButton>
                        <IconButton target={"_blank"} href={"https://vishal.thetechnician.in/"}  title={"Web Portfolio"}>
                            <Portrait/>
                        </IconButton>
                    </div> */}
                </div>

            </div>
        </div>
    );
}

export default Developer;