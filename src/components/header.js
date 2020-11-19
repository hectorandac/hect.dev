import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import logoFile from "../images/logo.svg"
import Menu from "./menu"


const Logo = styled.img`
width: 42px;
`

const Container = styled.div`
margin: 0 auto;
max-width: 960px;
padding: 1.45rem;
display: flex;
flex-direction: row;
justify-content: space-between;
`

const Header = ({ siteTitle }) => {
  return (
    <header
      style={{
        marginBottom: `1.45rem`,
      }}
    >
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
