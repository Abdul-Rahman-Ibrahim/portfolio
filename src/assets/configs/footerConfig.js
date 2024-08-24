import { AiFillGithub } from "react-icons/ai";
//import { FaLinkedinIn } from "react-icons/fa";
import { BsMedium, BsTwitterX } from "react-icons/bs";
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
