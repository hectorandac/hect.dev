import React from 'react';
import { RiCarFill, RiMessage3Fill, RiTruckFill } from 'react-icons/ri';
import { GiHoneypot } from 'react-icons/gi'
import styled from 'styled-components';
import { IconContext } from "react-icons";
import { useMediaQuery } from 'react-responsive'

const EventContainer = styled.div`
width: 100%;
min-height: 100px;
position: relative;
display: flex;
justify-content: ${props => props.left ? 'flex-start' : 'flex-end'};

@media only screen and (max-width: 600px) {
    justify-content: flex-end;
}

::before {
    content: ' ';
    position: absolute;
    margin: 0 auto;
    left: 0;
    right: 0;
    height: 100%;
    background: #0C3745;
    width: 4px;
    @media only screen and (max-width: 600px) {
        right: auto;
    }
}
`

const EventIcon = styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
position: absolute;
margin: 0 auto;
top: 0;
left: 0;
right: 0;
background-color: #FFC247;
display: flex;
justify-content: center;
justify-items: center;
align-content: center;
align-items: center;
@media only screen and (max-width: 600px) {
    right: auto;
    left: -18px;
    margin: auto;
}
`

const EventContent = styled.div`
width: calc(50% - 48px );
min-height: 100px;
border-radius: 8px;
padding: 16px;
background: #0C3745;
margin: 8px;
position: relative;
top: -8px;
margin-bottom: 32px;

@media only screen and (max-width: 600px) {
    width: calc(100% - 36px );
    margin: 8px 0 8px 8px;
    margin-bottom: 32px;
}

::after {
    content: ' ';
    position: absolute;
    top: 12px;
    left: ${props => props.left ? '100%' : '-14px'};
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-left: ${props => props.left ? '7px solid #0C3745' : '7px solid transparent' };
    border-right: ${props => props.left ? 'auto' : '7px solid #0C3745' };
    @media only screen and (max-width: 600px) {
        border-left: 7px solid transparent;
        border-right: 7px solid #0C3745;
        left: -14px;
    }
}
`

const EventDate = styled.div`
width: 200px;
min-height: 100px;
border-radius: 8px;
padding: 16px;
margin: 0 auto;
left: ${props => props.left ? '272px' : 0};
right: ${props => props.left ? 0 : '272px'};
text-align: ${props => props.left ? 'left' : 'right'};
position: absolute;
top: -8px;
`

const Title = styled.h5`
color: #DCF1F9;
`

const Paragraph = styled.p`
color: #DCF1F990;
`

const DateText = styled.h6`
color: #DCF1F9;
margin-bottom: 4px;
`

const AccentText = styled.p`
color: #FFC247;
margin-bottom: 0;
`

function event(phoneView, title, description, icon, date, left, positions) {

    return <EventContainer left={left}>
        <IconContext.Provider value={{ color: "#0C3745", size: "24px"}}>
            <EventIcon>{icon}</EventIcon>
            <EventContent left={left}>
                <Title>{ title }</Title>
                <Paragraph>{ description }</Paragraph>
                {phoneView && <DateText>{date}</DateText>}
                {phoneView && <AccentText>{positions}</AccentText>}
            </EventContent>
            {!phoneView && <EventDate left={left}>
                <DateText>{date}</DateText>
                <AccentText>{positions}</AccentText>
            </EventDate>}
        </IconContext.Provider>
    </EventContainer>
}

export default function Career() {
    const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' })
    return <>
        {event(isTabletOrMobile, "mGage", "I’m in charge of the maintenance and development of multiple micro-services written in Ruby on Rails and Java with Spring. These are related to the processing of images, audios, and videos. These services belong to a project whose purpose is the broadcasting of ads through different mobile messaging protocols.", <RiMessage3Fill />, "Sept. 2019", true, "Ruby Developer")}
        {event(isTabletOrMobile, "PierpontGlobal", "I was in charge of the creation of their primary application known as PierpontGlobal; the main purpose of this one is to serve as a platform for car dealers in the Dominican Republic to participate in the United States cars auction. In this project, my primary responsibilities were to develop the back-end.", <RiCarFill />, "Oct. 2018", false, "Chief Technology Officer")}
        {event(isTabletOrMobile, "PierpontLogistics", "I participated in the creation of PierpontLogistics. Its purpose was to manage car transportations throughout America. I served as the project manager and participated in the development of the back-end and part of the front-end", <RiTruckFill />, "Oct. 2018", true, "Chief Technology Officer")}
        {event(isTabletOrMobile, "3ZMedia", "During this project, I was in charge of the back-end, and front-end development of the application called HoneyBits, based on iOS, The purpose of this application was to serve as a store for honey-based products.", <GiHoneypot />, "Jun. 2017", false, "Java | Swift Developer")}
    </>
}