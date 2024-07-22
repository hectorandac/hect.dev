import React, { useMemo } from 'react';
import { IconContext } from 'react-icons';
import styled from 'styled-components';
import { IoIosCall, IoIosMail, IoLogoWhatsapp } from 'react-icons/io';

const Text = styled.p`
color: #DCF1F990;
text-align: center;
width: 100%;
max-width: 550px;
`;

const Container = styled.div`
display: flex;
align-items: center;
width: 100%;
flex-direction: column;
min-height: 300px;
`;

const IconsContainer = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
`;

const AccentText = styled.div`
margin-bottom: 24px;
color: #FFC247;
`;

export default function Contact() {
  const iconContextValue = useMemo(() => ({
    color: '#FFC247',
    size: '32px',
    className: 'global-icon-style-contact',
  }), []);

  return (
    <Container>
      <Text>
        If you&apos;d like to have a chat feel free to contact me!
        I&apos;ll be available to answer any questions you might have about me.
      </Text>
      <AccentText>hector.acosta.pozo@gmail.com</AccentText>
      <IconsContainer>
        <IconContext.Provider value={iconContextValue}>
          <a aria-label="Email Hector Acosta" href="mailto:hector.acosta.pozo@gmail.com"><IoIosMail /></a>
          <a aria-label="WhatsApp Hector Acosta" href="https://api.whatsapp.com/send/?phone=18299570268&text=Hey+Hector%21+how+is+it+going%3F+%F0%9F%91%8B" target="_blank" rel="noreferrer"><IoLogoWhatsapp /></a>
          <a aria-label="Phone number Hector Acosta" href="tel:18299570268"><IoIosCall /></a>
        </IconContext.Provider>
      </IconsContainer>
    </Container>
  );
}
