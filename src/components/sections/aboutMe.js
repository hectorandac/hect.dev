import React from 'react'
import styled from 'styled-components'
import { SiJava, SiRails, SiDocker, SiAmazonaws, SiKubernetes, SiDotNet, SiSpring, SiReact, SiTensorflow, SiGooglecloud, SiFlask, SiGithub } from 'react-icons/si'
import { IconContext } from "react-icons";
import Image from '../image';
import { DiJavascript1, DiPython, DiRuby, DiVisualstudio } from 'react-icons/di'

const Container = styled.div`
width: 100%;
display: flex;
flex-direction: row;

@media only screen and (max-width: 600px) {
    flex-direction: column;
}
`

const ImageContainer = styled.div`
display: flex;
width: 50%;
height: 100%;
min-height: 300px;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;

@media only screen and (max-width: 600px) {
    width: 100%;
}
`

const TextContainer = styled.div`
display: flex;
flex-direction: column;
color: #DCF1F990;
width: 50%;

@media only screen and (max-width: 600px) {
    width: 100%;
}
`

const CodeList = styled.div`
display: flex;
flex-direction: row;
justify-items: start;
flex-wrap: wrap;
`

const Code = styled.div`
width: 50%;
font-size: 16px;
`

export default function AboutMe() {

    return <Container>
        <TextContainer>
            <p>I'm a software engineer at the Dominican Republic <span role="img" aria-label="DR" style={{color: 'white'}}>🇩🇴</span>, graduated from <a href="https://www.intec.edu.do/">INTEC University</a>. I also studied for a semester in <a href="https://eng.sejong.ac.kr/index.do">Sejong University</a> at Korea <span role="img" aria-label="KO" style={{color: 'white'}}>🇰🇷</span>.</p>
            {/* <p>I've been programming and managing small teams for the creation of amazing software projects for about {(new Date()).getFullYear() - 2014} years, with perfomance and scalability in mind.</p> */}
            <p>At the moment I'm working with <a href="https://mgage.com/">mGage</a>, a global organization with multiple interesting projects that goes from mobile messaging to payments solutions</p>
            <p>These are some of the technologies I've been working with:</p>
            <CodeList>
                <IconContext.Provider value={{ color: "#FFC247", size: "16px"}}>
                    <Code><DiRuby /> Ruby</Code>
                    <Code><SiJava /> Java</Code>
                    <Code><DiJavascript1 /> JavaScript</Code>
                    <Code><DiPython /> Python</Code>
                    <Code><DiVisualstudio /> C#</Code>
                </IconContext.Provider>
                <IconContext.Provider value={{ color: "#DCF1F990", size: "16px"}}>
                    <Code><SiRails /> Rails</Code>
                    <Code><SiDotNet /> .Net Core</Code>
                    <Code><SiSpring /> Spring</Code>
                    <Code><SiReact /> React</Code>
                    <Code><SiTensorflow /> TensorFlow</Code>
                    <Code><SiGooglecloud /> GCS</Code>
                    <Code><SiFlask /> Flask</Code>
                    <Code><SiDocker/> Docker</Code>
                    <Code><SiKubernetes /> Kubernetes</Code>
                    <Code><SiGithub /> Github</Code>
                    <Code><SiAmazonaws/> Amazon Web Services</Code>
                </IconContext.Provider>
            </CodeList>
        </TextContainer>
        <ImageContainer>
            <Image />
        </ImageContainer>
    </Container>
}