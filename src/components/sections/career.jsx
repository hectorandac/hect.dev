import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { RiCarFill, RiMessage3Fill } from 'react-icons/ri';
import styled from 'styled-components';
import { IconContext } from 'react-icons';
import { useMediaQuery } from 'react-responsive';

const EventContainer = styled.div`
  width: 100%;
  min-height: 100px;
  position: relative;
  display: flex;
  justify-content: ${(props) => (props.left ? 'flex-start' : 'flex-end')};

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
    background: #0c3745;
    width: 4px;

    @media only screen and (max-width: 600px) {
      right: auto;
    }
  }
`;

const EventIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  background-color: #ffc247;
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
`;

const EventContent = styled.div`
  width: calc(50% - 48px);
  min-height: 100px;
  border-radius: 8px;
  padding: 16px;
  background: #0c3745;
  margin: 8px;
  position: relative;
  top: -8px;
  margin-bottom: 32px;

  @media only screen and (max-width: 600px) {
    width: calc(100% - 36px);
    margin: 8px 0 8px 8px;
    margin-bottom: 32px;
  }

  ::after {
    content: ' ';
    position: absolute;
    top: 12px;
    left: ${(props) => (props.left ? '100%' : '-14px')};
    height: 0;
    width: 0;
    border: 7px solid transparent;
    border-left: ${(props) => (props.left ? '7px solid #0c3745' : '7px solid transparent')};
    border-right: ${(props) => (props.left ? 'auto' : '7px solid #0c3745')};

    @media only screen and (max-width: 600px) {
      border-left: 7px solid transparent;
      border-right: 7px solid #0c3745;
      left: -14px;
    }
  }
`;

const EventDate = styled.div`
  width: 200px;
  min-height: 100px;
  border-radius: 8px;
  padding: 16px;
  margin: 0 auto;
  left: ${(props) => (props.left ? '272px' : 0)};
  right: ${(props) => (props.left ? 0 : '272px')};
  text-align: ${(props) => (props.left ? 'left' : 'right')};
  position: absolute;
  top: -8px;
`;

const Title = styled.h5`
  color: #dcf1f9;
`;

const Paragraph = styled.p`
  color: #dcf1f990;
`;

const DateText = styled.h6`
  color: #dcf1f9;
  margin-bottom: 4px;
`;

const AccentText = styled.p`
  color: #ffc247;
  margin-bottom: 0;
`;

function Event({
  phoneView, title, description, icon, date, left, positions,
}) {
  return (
    <EventContainer left={left}>
      <EventIcon>{icon}</EventIcon>
      <EventContent left={left}>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        {phoneView && <DateText>{date}</DateText>}
        {phoneView && <AccentText>{positions}</AccentText>}
      </EventContent>
      {!phoneView && (
        <EventDate left={left}>
          <DateText>{date}</DateText>
          <AccentText>{positions}</AccentText>
        </EventDate>
      )}
    </EventContainer>
  );
}

Event.propTypes = {
  phoneView: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  icon: PropTypes.node.isRequired,
  date: PropTypes.string.isRequired,
  left: PropTypes.bool.isRequired,
  positions: PropTypes.string.isRequired,
};

export default function Career() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });

  const iconContextValue = useMemo(() => ({
    color: '#0C3745',
    size: '24px',
  }), []);

  return (
    <IconContext.Provider value={iconContextValue}>
      <Event
        phoneView={isTabletOrMobile}
        title="BetterUp"
        description="At BetterUp, a top-tier US coaching platform, I worked as a Ruby on Rails and JavaScript software engineer part-time contractor. I played a significant role in internal integration tools connecting with third-party platforms like Microsoft Teams, Slack, and other lesser-known platforms. I also helped create their alternative payment platform known as 'Microsites' which handled thousands of transactions for their partners."
        icon={<RiMessage3Fill />}
        date="Sep 2021 - Sep 2022"
        left
        positions="Software Developer Contractor"
      />
      <Event
        phoneView={isTabletOrMobile}
        title="Kaleyra (formerly mGage)"
        description="At Kaleyra, a global campaign messaging solution provider, I worked as a Full Stack Software Developer using Java, Ruby on Rails, Golang, and PHP. Initially, at mGage, I designed a multimedia transcoding system and developed high-throughput messaging applications. After mGage was acquired by Kaleyra, I continued my tenure remotely, maintaining scalable applications and refining the microservices architecture by transitioning PHP monoliths to multithreaded Golang applications."
        icon={<RiMessage3Fill />}
        date="Sep 2019 - Sep 2022"
        left={false}
        positions="Software Engineer Specialist"
      />
      <Event
        phoneView={isTabletOrMobile}
        title="Pierpont Global, Inc"
        description="Pierpont Global, a startup company I helped create, served as an online car auctioning platform. I worked as a Full Stack Software Developer and lead developer of this venture. Primarily using Ruby on Rails, JavaScript, and Java, my main responsibility was to manage and work with a small team of 4 developers towards the creation of the whole ecosystem of this startup. Unfortunately, the project did not continue after 1 year. I still own the source code."
        icon={<RiCarFill />}
        date="Nov 2018 - Nov 2019"
        left
        positions="Lead Software Developer"
      />
    </IconContext.Provider>
  );
}
