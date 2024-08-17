import {
    SiPython,
    SiJavascript,
    SiCss3,
    SiHtml5,
    SiCplusplus,
    SiArdour,
    SiGnubash
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt, FaAWs, FaRegFileExcel, FaRegFilePowerpoint } from "react-icons/fa";
import { IoHardwareChipOutline } from "react-icons/io5";
// import { TbMathMaxMin } from "react-icons/tb";

import React from "react";

const skillsConfig = {
    mainSkills: [
        {
            id: "skills-0",
            className: "skill-icon",
            icon: <SiPython size={50} />,
            text: "Python"
        },
        {
            id: "skills-1",
            className: "skill-icon",
            icon: <GrMysql size={50} />,
            text: "MATLAB"
        },
        {
            id: "skills-2",
            className: "skill-icon",
            icon: <SiCplusplus size={50} />,
            text: "C/C++"
        },
        {
            id: "skills-3",
            className: "skill-icon",
            icon: <FaAWs size={50} />,
            text: "AWS"
        },
        {
            id: "skills-4",
            className: "skill-icon",
            icon: <FaGitAlt size={50} />,
            text: "Git"
        }
    ],
    complementarySkills: [
        {
            id: "skills-6",
            className: "skill-icon",
            icon: <SiJavascript size={50} />,
            text: "JavaScript"
        },
        {
            id: "skills-7",
            className: "skill-icon",
            icon: <SiGnubash size={50} />,
            text: "Bash"
        },
        {
            id: "skills-8",
            className: "skill-icon",
            icon: <FaRegFileExcel size={50} />,
            text: "Excel"
        },
        {
            id: "skills-9",
            className: "skill-icon",
            icon: <FaRegFilePowerpoint size={50} />,
            text: "PowerPoint"
        },
        {
            id: "skills-10",
            className: "skill-icon",
            icon: <IoHardwareChipOutline size={50} />,
            text: "FPGA"
        },
        {
            id: "skills-11",
            className: "skill-icon",
            icon: <IoHardwareChipOutline size={50} />,
            text: "VHDL"
        },
        {
            id: "skills-12",
            className: "skill-icon",
            icon: <SiCss3 size={50} />,
            text: "CSS 3"
        },
        {
            id: "skills-13",
            className: "skill-icon",
            icon: <SiHtml5 size={50} />,
            text: "HTML 5"
        },
        {
            id: "skills-14",
            className: "skill-icon",
            icon: <SiArdour size={50} />,
            text: "Arduino"
        }
        // ,
        // {
        //     id: "skills-14",
        //     className: "skill-icon",
        //     icon: <SiApachekafka size={50}/>,
        //     text: "Kafka"
        // }
        // ,
        // {
        //     id: "skills-15",
        //     className: "skill-icon",
        //     icon: <SiPowerbi size={50}/>,
        //     text: "Power BI"
        // }
    ]
}

export default skillsConfig
