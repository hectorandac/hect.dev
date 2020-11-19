import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logoFile from "../images/logo.svg"
import Menu from "./menu"


const Logo = styled.img`
width: 42px;
height: 42px;
margin: 0;
`

const Container = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 1.45rem;
display: flex;
flex-direction: row;
justify-content: space-between;
justify-items: center;
align-items: center;
position: fixed;
width: 100%;
backdrop-filter: blur(5px);
background-color: rgba(9, 41, 52, 0.85);

`

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
      <link rel="preconnect" href="https://fonts.gstatic.com"/>
      <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&display=swap" rel="stylesheet"/>
      <Container>
        <Logo src={logoFile}/>
        <Menu />
      </Container>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
