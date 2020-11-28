import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import styled from "styled-components"
import Greetings from "../components/sections/greetings"
import AboutMe from "../components/sections/aboutMe"
import Career from "../components/sections/career"
import Work from "../components/sections/work"

const SectionTitle = styled.h2`
color: #DCF1F9;
width: 100%;
::before {
  content: '${props => props.position}';
  color: #FFC247;
  margin-right: 12px;
  font-family: Inconsolata,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  font-weight: 400;

  @media only screen and (max-width: 600px) {
    margin-right: 4px;
  }
}

@media only screen and (max-width: 600px) {
  font-size: 24px;
}
`

const GreetingsSection = styled.div`
width: 100%;
max-width: 1000px;
padding: 48px 16px;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-content: center;
align-items: flex-start;
margin-top: 94px !important;
min-height: calc(100vh - 94px);
@media only screen and (max-width: 600px) {
  min-height: 80vh;
}
`

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <GreetingsSection>
        <Greetings />
      </GreetingsSection>
      <Section id="about">
        <SectionTitle position='01.'>About me <span role="img" aria-label="Person">🙆🏾‍♂️</span></SectionTitle>
        <AboutMe/>
      </Section>
      <Section id="experience">
        <SectionTitle position='02.'>Where I've been <span role="img" aria-label="Building">🏢</span></SectionTitle>
        <Career />
      </Section>
      <Section id="work">
        <SectionTitle position='03.'>What I've done <span role="img" aria-label="PC">🧑🏾‍💻</span></SectionTitle>
        <Work />
      </Section>
      <Section id="contact">
        <SectionTitle position='04.'>Get in touch! <span role="img" aria-label="Hand">👋🏾</span></SectionTitle>
      </Section>
    </Layout>
  )
}

export default IndexPage
