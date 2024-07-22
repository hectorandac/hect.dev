import React from 'react';
import styled from 'styled-components';
import logoFile from '../images/logo.svg';
import Menu from './menu';

const Logo = styled.img`
width: 42px;
height: 42px;
margin: 0;
`;

const Container = styled.div`
margin: 0 auto;
padding: 1.45rem;
display: flex;
flex-direction: row;
justify-content: space-between;
justify-items: center;
align-items: center;
width: 100%;
backdrop-filter: blur(5px);
background-color: rgba(9, 41, 52, 0.85);
left: 0;
right: 0;
`;

const HeaderContainer = styled.div`
width: 100%;
position: fixed;
z-index: 10;
box-shadow: 0px 1px 26px 0px rgba(0, 0, 0, 0.20);
`;

function Header() {
  return (
    <header>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Inconsolata:wght@300;400&display=swap" rel="stylesheet" />
      <HeaderContainer>
        <Container>
          <Logo src={logoFile} />
          <Menu />
        </Container>
      </HeaderContainer>
    </header>
  );
}

export default Header;
