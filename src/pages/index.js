import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Section from "../components/section"
import styled from "styled-components"
import Greetings from "../components/sections/greetings"

const SectionTitle = styled.h2`
color: #DCF1F9;
::before {
  content: '${props => props.position}';
  color: #FFC247;
  margin-right: 12px;
  font-family: Inconsolata,-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Oxygen,Ubuntu,Cantarell,'Open Sans','Helvetica Neue',sans-serif;
  font-weight: 400;
}
`

const GreetingsSection = styled.div`
width: 100%;
max-width: 1000px;
padding: 24px;
color: white;
display: flex;
flex-direction: column;
justify-content: center;
justify-items: center;
align-content: center;
align-items: flex-start;
margin-top: 94px !important;
min-height: calc(100vh - 94px);
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <GreetingsSection>
      <Greetings />
    </GreetingsSection>
    <Section>
      <SectionTitle position='01.'>A little about me 🙆🏾‍♂️</SectionTitle>
    </Section>
    <Section>
      <SectionTitle position='02.'>Were I've been 🏢</SectionTitle>
    </Section>
    <Section>
      <SectionTitle position='03.'>What I've done 🧑🏾‍💻</SectionTitle>
    </Section>
    <Section>
      <SectionTitle position='04.'>Get in touch! 👋🏾</SectionTitle>
    </Section>
  </Layout>
)

export default IndexPage
