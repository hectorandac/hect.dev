import React, { useMemo } from 'react';
import styled from 'styled-components';
import {
  SiJava,
  SiRails,
  SiDocker,
  SiAmazonaws,
  SiKubernetes, SiDotNet, SiSpring, SiReact, SiTensorflow, SiGooglecloud, SiFlask, SiGithub,
} from 'react-icons/si';
import { IconContext } from 'react-icons';
import {
  DiJavascript1, DiPython, DiRuby, DiVisualstudio,
} from 'react-icons/di';
import Image from '../image';

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;

  @media only screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

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
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: #DCF1F990;
  width: 50%;

  @media only screen and (max-width: 600px) {
    width: 100%;
  }
`;

const CodeList = styled.div`
  display: flex;
  flex-direction: row;
  justify-items: start;
  flex-wrap: wrap;
`;

const Code = styled.div`
  width: 50%;
  font-size: 16px;
`;

export default function AboutMe() {
  const experienceYears = new Date().getFullYear() - 2018;

  const goldIconContextValue = useMemo(() => ({
    color: '#FFC247',
    size: '16px',
  }), []);

  const silverIconContextValue = useMemo(() => ({
    color: '#DCF1F990',
    size: '16px',
  }), []);

  return (
    <Container>
      <TextContainer>
        <p>
          I&apos;m a dedicated software engineer with over
          {' '}
          {experienceYears}
          {' '}
          years of experience in
          backend and frontend development. I&apos;ve graduated from
          {' '}
          <a href="https://www.intec.edu.do/">INTEC University</a>
          {' '}
          in the Dominican Republic
          {' '}
          <span role="img" aria-label="DR" style={{ color: 'white' }}>🇩🇴</span>
          {' '}
          and also studied at
          {' '}
          <a href="https://eng.sejong.ac.kr/index.do">Sejong University</a>
          {' '}
          in South Korea
          {' '}
          <span role="img" aria-label="KO" style={{ color: 'white' }}>🇰🇷</span>
          . I am currently finishing my Master&apos;s Degree in Computer Science at
          {' '}
          <a href="https://www.knu.ac.kr">Kyungpook National University</a>
          {' '}
          with a focus on Artificial Intelligence, expected to graduate in August 2024.
        </p>

        <p>These are some of the technologies I&apos;ve been working with:</p>
        <CodeList>
          <IconContext.Provider value={goldIconContextValue}>
            <Code>
              <DiRuby />
              {' '}
              Ruby
            </Code>
            <Code>
              <SiJava />
              {' '}
              Java
            </Code>
            <Code>
              <DiJavascript1 />
              {' '}
              JavaScript
            </Code>
            <Code>
              <DiPython />
              {' '}
              Python
            </Code>
            <Code>
              <DiVisualstudio />
              {' '}
              C#
            </Code>
          </IconContext.Provider>
          <IconContext.Provider value={silverIconContextValue}>
            <Code>
              <SiRails />
              {' '}
              Rails
            </Code>
            <Code>
              <SiDotNet />
              {' '}
              .Net Core
            </Code>
            <Code>
              <SiSpring />
              {' '}
              Spring
            </Code>
            <Code>
              <SiReact />
              {' '}
              React
            </Code>
            <Code>
              <SiTensorflow />
              {' '}
              TensorFlow
            </Code>
            <Code>
              <SiGooglecloud />
              {' '}
              GCS
            </Code>
            <Code>
              <SiFlask />
              {' '}
              Flask
            </Code>
            <Code>
              <SiDocker />
              {' '}
              Docker
            </Code>
            <Code>
              <SiKubernetes />
              {' '}
              Kubernetes
            </Code>
            <Code>
              <SiGithub />
              {' '}
              Github
            </Code>
            <Code>
              <SiAmazonaws />
              {' '}
              Amazon Web Services
            </Code>
          </IconContext.Provider>
        </CodeList>
      </TextContainer>
      <ImageContainer>
        <Image />
      </ImageContainer>
    </Container>
  );
}
