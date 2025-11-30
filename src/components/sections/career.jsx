import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useMediaQuery } from 'react-responsive';
import aicuLogo from '../../images/aicu.jpeg';
import betterupLogo from '../../images/betterup.png';
import kaleyraLogo from '../../images/kaleyra.jpeg';
import pierpontLogo from '../../images/pierpont.jpeg';

const formatDuration = (startDate, endDate = new Date()) => {
  const start = new Date(startDate.getFullYear(), startDate.getMonth(), 1);
  const end = new Date(endDate.getFullYear(), endDate.getMonth(), 1);
  let totalMonths = (
    (end.getFullYear() - start.getFullYear()) * 12
    + (end.getMonth() - start.getMonth())
  );
  if (totalMonths < 0) totalMonths = 0;
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;
  const parts = [];
  if (years > 0) {
    parts.push(`${years} ${years === 1 ? 'year' : 'years'}`);
  }
  if (months > 0) {
    parts.push(`${months} ${months === 1 ? 'month' : 'months'}`);
  }
  return parts.length ? parts.join(' ') : 'Less than 1 month';
};

const AICU_START_DATE = new Date(2024, 10, 1);

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
  width: 56px;
  height: 56px;
  border-radius: 50%;
  position: absolute;
  margin: 0 auto;
  top: 0;
  left: 0;
  right: 0;
  background-color: #fff;
  display: flex;
  justify-content: center;
  justify-items: center;
  align-content: center;
  align-items: center;
  box-shadow: 0 0 12px rgba(0, 0, 0, 0.25);
  overflow: hidden;

  @media only screen and (max-width: 600px) {
    right: auto;
    left: -18px;
    margin: auto;
  }
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  margin: 0;
  display: block;
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

const DurationText = styled.p`
  color: #bfdae3;
  margin: 0;
  font-size: 0.85rem;
`;

function Event({
  phoneView, title, description, logo, date, duration, left, positions,
}) {
  return (
    <EventContainer left={left}>
      <EventIcon>
        <LogoImage src={logo} alt={`${title} logo`} />
      </EventIcon>
      <EventContent left={left}>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
        {phoneView && (
          <>
            <DateText>{date}</DateText>
            <DurationText>{duration}</DurationText>
            <AccentText>{positions}</AccentText>
          </>
        )}
      </EventContent>
      {!phoneView && (
        <EventDate left={left}>
          <DateText>{date}</DateText>
          <DurationText>{duration}</DurationText>
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
  logo: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  left: PropTypes.bool.isRequired,
  positions: PropTypes.string.isRequired,
};

export default function Career() {
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 600px)' });
  const [aicuDuration, setAicuDuration] = useState(() => formatDuration(AICU_START_DATE));

  useEffect(() => {
    setAicuDuration(formatDuration(AICU_START_DATE));
  }, []);

  return (
    <>
      <Event
        phoneView={isTabletOrMobile}
        title="AICU.life"
        description="I lead the AICU Gait Scanner, designing computer vision models and delivering fully optimized edge inference builds. That means owning everything from training to shipping Android and iOS native experiences with Core ML OCR stacks and CUDA/C++ accelerators so clinicians get real-time gait analytics in the field. I also bridge the on-device stack with our Python and Ruby on Rails services for regulatory-ready rollouts."
        logo={aicuLogo}
        date="Nov 2024 - Present"
        duration={aicuDuration}
        left={false}
        positions="Machine Learning Researcher"
      />
      <Event
        phoneView={isTabletOrMobile}
        title="BetterUp"
        description="At BetterUp, a top-tier US coaching platform, I worked as a Ruby on Rails and JavaScript software engineer part-time contractor. I played a significant role in internal integration tools connecting with third-party platforms like Microsoft Teams, Slack, and other lesser-known platforms. I also helped create their alternative payment platform known as 'Microsites' which handled thousands of transactions for their partners."
        logo={betterupLogo}
        date="Sep 2021 - May 2025"
        duration="3 years 8 months"
        left
        positions="Software Developer Contractor"
      />
      <Event
        phoneView={isTabletOrMobile}
        title="Kaleyra (formerly mGage)"
        description="At Kaleyra, a global campaign messaging solution provider, I worked as a Full Stack Software Developer using Java, Ruby on Rails, Golang, and PHP. Initially, at mGage, I designed a multimedia transcoding system and developed high-throughput messaging applications. After mGage was acquired by Kaleyra, I continued my tenure remotely, maintaining scalable applications and refining the microservices architecture by transitioning PHP monoliths to multithreaded Golang applications."
        logo={kaleyraLogo}
        date="Sep 2019 - Sep 2022"
        duration="3 years"
        left={false}
        positions="Software Engineer Specialist"
      />
      <Event
        phoneView={isTabletOrMobile}
        title="Pierpont Global, Inc"
        description="Pierpont Global, a startup company I helped create, served as an online car auctioning platform. I worked as a Full Stack Software Developer and lead developer of this venture. Primarily using Ruby on Rails, JavaScript, and Java, my main responsibility was to manage and work with a small team of 4 developers towards the creation of the whole ecosystem of this startup. Unfortunately, the project did not continue after 1 year. I still own the source code."
        logo={pierpontLogo}
        date="Nov 2018 - Nov 2019"
        duration="1 year"
        left
        positions="Lead Software Developer"
      />
    </>
  );
}
