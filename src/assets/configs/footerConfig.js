import { AiFillGithub } from "react-icons/ai";
// import { FaTwitter } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { BsMedium } from "react-icons/bs";
// import xlogo from "../images/xlogo.png";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/Abdul-Rahman-Ibrahim",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50} />
        },
        {
            id: "footer-1",
            url: "https://x.com/AbdulRa62015444",
            className: "social-icon",
            target: "_blank",
            //icon: < img src={xlogo} alt="X" size={2} />
            // icon: <FaTwitter size={50} />
            icon: <BsTwitterX size={50} />
        },
        {
            id: "footer-2",
            url: "https://medium.com/@abdulrahmanibrahim.ish",
            className: "social-icon",
            target: "_blank",
            icon: <BsMedium size={50} />
        }
    ]
}

export default footerConfig
