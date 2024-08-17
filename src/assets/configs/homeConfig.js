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
        "Engineering Student",
        "Machine & Deep Learning Engineer",
        "Software Engineer"
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
            description: "Develop mathematical" +
                "models to calculate the common parts ratio (CPR) for various products, " +
                "design CNN models to detect faults in home appliances, automate product and" +
                "sales configurations, and perform monthly CPR calculations. Provide" +
                "insights on products to be phased out based on their complexity analysis.",
            date: "2023-Present",
            icon: <BiRocket />,
            tags: ["ml", "mlops", "python", "ace", "cnn", "teamcenter"]
        },
        {
            id: "work-3",
            title: "AI Intern",
            company: "Carex AI",
            description: "Implemented cutting-edge CNN models to estimate" +
                "heart rate from PPG signals, automated model selection and hyperparameter tuning" +
                "for vital signs estimation, and applied signal processing techniques including FFTs" +
                "and 1D/2D CNNs. Developed models to clean noise and motion artifacts from PPG" +
                "and ECG signals and gained experience in using AWS for building AI models.",
            date: "2024-Present",
            icon: <DiCodeigniter />,
            tags: ["ml", "python", "AWS", "signal processing"]
        },
        {
            id: "work-2",
            title: "Software Developer Intern",
            company: "Sentez Security and Software Services",
            description: "Developed a software for finger print tracking attendance machine and " +
                "worked with a team of 4 to process images from camera for user identification",
            date: "2023",
            icon: <FaMobileAlt />,
            tags: ["C#", "python", "FPGA"]
        },
        {
            id: "work-1",
            title: "International Students Recruitment Team",
            company: "Koc University",
            description: "Developed an automated email application to send messages" +
                "to a list of students from an Excel file. Managed the team's social media handle, " +
                "increasing engagement by 15%, and oversaw the marketing database " +
                "and data management initiatives.",
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
