import React from 'react'
// import { BsClipboardData } from "react-icons/bs";
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
        start: "I am currently an engineering student and work part-time, where I focus on optimizing AI models to analyze faults in Beko's various home appliance products and make calculations. I am passionate about learning new technologies, contributing to the AI and data science community, and sharing the power of data.",
        exit: "I am proficient in Python, MATLAB, C/C++, and more."
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
            title: "AI",
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
            company: "Security and Software Services",
            description: "Developed a software for finger print tracking attendance machine and " +
                "worked with a team of 4 to process images from camera for user identification",
            date: "2023",
            icon: <FaMobileAlt />,
            tags: ["C#", "python", "FPGA"]
        },
        {
            id: "work-1",
            title: "Undergraduate Research Assistant",
            company: "PAWS Lab",
            description: "Find correlations between each of ECG and SCG signals with body composition" +
                "features among 14 patients. Worked on developing framework for Seizure Prediction " +
                "using EEG signals.",
            date: "2022",
            icon: <GiCommercialAirplane />,
            tags: ["marketting", "excel", "python", "backend"]
        }
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
