import { AiFillGithub } from "react-icons/ai";
import { FaXTwitter } from "react-icons/fa6";
import { BsMedium } from "react-icons/bs";
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
            icon: <FaXTwitter size={50} />
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
