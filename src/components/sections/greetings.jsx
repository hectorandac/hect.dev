import React from 'react';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import { motion } from 'framer-motion';
import { Link } from 'gatsby';

const Title = styled(motion.h1)`
font-weight: 600;
font-size: 96px;
color: #DCF1F9;
margin-bottom: 12px;
@media only screen and (max-width: 600px) {
    font-size: 40px;
}
`;

const SubTitle = styled(motion.h2)`
color: #DCF1F970;
font-weight: 600;
font-size: 72px;
@media only screen and (max-width: 600px) {
    font-size: 32px;
}
`;

const AccentText = styled(motion.p)`
color: #FFC247;
margin-bottom: 16px;
font-size: 24px;
`;

const Paragraph = styled(motion.p)`
color: #DCF1F990;
font-size: 16px;
max-width: 520px;
`;

const Button = styled(motion.button)`
border-radius: 8px;
color: #FFC247;
border: solid 1px #FFC247;
padding: 10px;
outline: none;
text-decoration: none;
background-color: transparent;
cursor: pointer;
transition: .5s;
:hover {
    background-color: #FFC24720;
}
`;

export default function Greetings() {
  const isDesktopOrLaptop = useMediaQuery({ query: '(min-width: 600px)' });

  const variants = {
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: (i * 0.3) + 2,
      },
    }),
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <>
      <AccentText custom={0} initial="hidden" animate="visible" variants={variants}>Hi there, I am</AccentText>
      <Title custom={1} initial="hidden" animate="visible" variants={variants} desktop={isDesktopOrLaptop}>Hector Acosta.</Title>
      <SubTitle custom={2} initial="hidden" animate="visible" variants={variants} desktop={isDesktopOrLaptop}>Full-Stack Developer.</SubTitle>
      <Paragraph custom={3} initial="hidden" animate="visible" variants={variants}>
        I&apos;m a software engineer residing in South Korea
        {' '}
        <span role="img" aria-label="South Korea" style={{ color: 'white' }}>🇰🇷</span>
        .
        For the past
        {' '}
        {(new Date()).getFullYear() - 2018}
        {' '}
        years, I&apos;ve been creating all sorts of applications,
        ranging from complex backend solutions to beautifully designed websites
        and advanced AI systems.
      </Paragraph>
      <Link href="#contact">
        <Button custom={4} initial="hidden" animate="visible" variants={variants}>
          CONTACT ME!
        </Button>
      </Link>
    </>
  );
}
