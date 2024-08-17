import React from 'react'
import { BsClipboardData } from "react-icons/bs";
import { DiCodeigniter } from "react-icons/di";
import { GiCommercialAirplane } from "react-icons/gi";
import { FaMobileAlt } from "react-icons/fa";
import { BiRocket } from "react-icons/bi";

const homeConfig = {

    greeting:
        <h1 className="heading">
            Hi! I'm <strong className="main-name"> Abdul-Rahman Ibrahim</strong>
        </h1>,
    titles: [
        "An Engineering Student",
        "A Machine and Deep Learning Enthusiast",
        "A Software Engineer",
        "A Family person"
    ],
    about: {
        start: "I'm currently an engineering student and a part time worker in Beko." +
            "I work on optimizing AI models to analyze faults in washing machines" +
            "I'm excited by learning new things, contributing to the AI and data science community," +
            " and spreading the word of data!",
        exit: "I'm fluent at Python, SQL databases, BI tools, and more, " +
            "with a deep interest in computer vision."
    },
    workTimeline: [
        {
            id: "work-4",
            title: "Complexity Researcher",
            company: "Beko",
            description: "Working to build scalable ML solutions, LLM's, and RAG architectures.",
            date: "2023-Present",
            icon: <BiRocket />,
            tags: ["ml", "mlops", "python", "ace", "llm"]
        },
        {
            id: "work-3",
            title: "AI Intern",
            company: "Carex AI",
            description: "Build CNN models to make heart rate predictions from PPG signals ",
            date: "2024",
            icon: <DiCodeigniter />,
            tags: ["ml", "python", "AWS", "signal processing"]
        },
        {
            id: "work-2",
            title: "Software Developer",
            company: "Sentez Security and Software Services",
            description: "Developed a software for finger print tracking attendance machine " +
                "Worked with a team of 4 to process images from camera for user identification",
            date: "2023",
            icon: <FaMobileAlt />,
            tags: ["ml", "C#", "python", "FPGA"]
        },
        {
            id: "work-1",
            title: "International Students Recruitment Team",
            company: "Koc University",
            description: "Developed an automated email app to send email to a list of students given in an excel. " +
                "Handled the Team’s social media handle and boosted engagements by 15" +
                "Managed the marketing database and data management initiatives.",
            date: "2022",
            icon: <GiCommercialAirplane />,
            tags: ["marketting", "excel", "python", "backend"]
        },
        // {
        //     id: "work-0",
        //     title: "BI Analyst",
        //     company: "Onelink BPO",
        //     description: "Build interactive dashboards, ETLs and SQL queries to show the company KPIs.",
        //     date: "2016-2018",
        //     icon: <BsClipboardData/>,
        //     tags: ["python", "mssql", "pbi", "excel"]
        // }
    ]
}


export default homeConfig
