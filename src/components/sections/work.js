import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import styled from 'styled-components';
import { RiGitRepositoryFill } from 'react-icons/ri';
import { BiRightArrow } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';
import { IconContext } from "react-icons";

const { Octokit } = require("@octokit/rest");

const ProjectContainer = styled(motion.div)`
position: relative;
padding: 8px;
border-radius: 8px;
max-width: 300px;
min-height: 100px;
width: 30%;
background-color: #0C3745;
margin: 8px;
transition: .5s;
color: #DCF1F990;
@media only screen and (max-width: 768px) {
    width: calc(50% - 16px);
}
@media only screen and (max-width: 600px) {
    width: calc(100% - 16px);
}
:hover {
    transform: translateY(-8px);
}

`

const Projects = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: flex-start;
flex-wrap: wrap;
@media only screen and (max-width: 600px) {
    justify-content: space-between;
    justify-content: center;
}
`

const RepoDir = styled.div`
margin-left: 32px;
font-size: 14px;
background-color: rgba(255,255,255,0.2);
padding: 4px;
border-radius: 4px;
line-height: 16px;
display: inline;
`

const Text = styled.p`
margin-bottom: 48px;
`

const ButtonArray = styled.div`
position: absolute;
width: 100%;
bottom: 0;
left: 0;
right: 0;
padding: 12px;
display: flex;
justify-content: flex-end;
`

const AccentText = styled.div`
margin-top: 4px;
margin-bottom: 4px;
color: #FFC247;
`

export default function Work() {
    const [repos, setRepos] = useState([])
    const [count, setCount] = useState(6)
    useEffect(() => {

        async function fetchData() {
            const octokit = new Octokit({ auth: process.env.PRIVATE_KEY });

            const reposData = [
                ['pierpontglobal', 'pierpontglobal-api'],
                ['pierpontglobal', 'pierpontglobal-frontend'],
                ['hectorandac', 'bitpharma-api'],
                ['hectorandac', 'hect.dev'],
                ['hectorandac', 'Intec-Scraping']
            ];

            const repoRawData = []

            for (const data in reposData) {
                if (reposData.hasOwnProperty(data)) {
                    const element = reposData[data];
                    
                    const a = await octokit.repos.get({
                        owner: element[0],
                        repo: element[1]
                    })
                    repoRawData.push(a.data)
                }
            }

            setRepos(repoRawData);
            console.log(repoRawData);
        }
        fetchData();
    }, [])


    return <Projects>
        { repos.slice(0, count).map((repo, index) => <ProjectContainer key={index}>
            <RiGitRepositoryFill color="#FFC247" size="24px" style={{position: "absolute", marginTop: '2px'}}/> <RepoDir>{repo.name}</RepoDir>
            <br/>
            <AccentText><BiRightArrow size="12px"/> {repo.language}</AccentText>
            <Text>{repo.description}</Text>
            <ButtonArray>
                <IconContext.Provider value={{ color: "#DCF1F9", size: "24px", className: "global-icon-style" }}>
                    <FaGithub onClick={() => {window.open(repo.html_url)}}/>
                </IconContext.Provider>
            </ButtonArray>
        </ProjectContainer>) }
    </Projects>

}