import { BiGitRepoForked } from "react-icons/bi";
import { AiFillGithub, AiFillEye } from "react-icons/ai";
import { ImBook } from "react-icons/im";

import sklearnGenetic from "../images/sklearn_genetic_opt.png"
import graphEmbeddings from "../images/graph_embeddings.png"
import kafkaMl from "../images/kafkaml.png"
import portfolio from "../images/portfolio.png"

import React from 'react'

const projectConfig = [
    {
        id: "project-5",
        title: "3 Marbles Game",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/3-Marbles-Game",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/3-Marbles-Game/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/3-Marbles-Game/subscription",
                icon: <AiFillEye />,
            },
            {
                name: "docs",
                url: "https://github.com/Abdul-Rahman-Ibrahim/3-Marbles-Game",
                icon: <ImBook />,
            }
        ],
        image: sklearnGenetic,
        description: "A popular childhood game in Ghana",
        target: "_blank"
    },
    {
        id: "project-4",
        title: "KU Books AI",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/KUBOOKSAI",
                icon: <AiFillGithub />,
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/KUBOOKSAI/fork",
                icon: <BiGitRepoForked />,
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/KUBOOKSAI/subscription",
                icon: <AiFillEye />,
            },
            {
                name: "docs",
                url: "https://github.com/Abdul-Rahman-Ibrahim/KUBOOKSAI",
                icon: <ImBook />,
            }
        ],
        image: graphEmbeddings,
        description: "A book review and recommendation app",
        target: "_blank"
    },
    {
        id: "project-3",
        title: "Blood Pressure Estimation Model",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/BP-PROJECT",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/BP-PROJECT/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/BP-PROJECT/subscription",
                icon: <AiFillEye />
            }
        ],
        image: kafkaMl,
        description: "Project for real-time Blood pressure estimation using dataset from NHANES.",
        target: "_blank"
    },
    {
        id: "project-2",
        title: "Ping Pong Game with VHDL and FPGA",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Ping-Pong-Game-using-VHDL-and-FPGA",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Ping-Pong-Game-using-VHDL-and-FPGA/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Ping-Pong-Game-using-VHDL-and-FPGA/subscription",
                icon: <AiFillEye />
            },
            {
                name: "docs",
                url: "https://github.com/Abdul-Rahman-Ibrahim/Ping-Pong-Game-using-VHDL-and-FPGA",
                icon: <ImBook />,
            }
        ],
        image: "https://miro.medium.com/max/1400/1*UDnhOFK35IbAPx15wkMgVg.jpeg",
        description: "Ping Pong Game with VHDL and FPGA",
        target: "_blank"
    },
    {
        id: "project-1",
        title: "Portfolio Web",
        links: [
            {
                name: "repo",
                url: "https://github.com/Abdul-Rahman-Ibrahim/portfolio",
                icon: <AiFillGithub />
            },
            {
                name: "fork",
                url: "https://github.com/Abdul-Rahman-Ibrahim/portfolio/fork",
                icon: <BiGitRepoForked />
            },
            {
                name: "subscription",
                url: "https://github.com/Abdul-Rahman-Ibrahim/portfolio/subscription",
                icon: <AiFillEye />
            }
        ],
        image: portfolio,
        description: "Source code of my current portfolio web page.",
        target: "_blank"
    }
]

export default projectConfig
