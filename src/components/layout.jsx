/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

import Header from './header';
import './layout.css';
import SocialBubble from './socialBubble';

const Container = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
`;

function Layout({ children }) {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <Container>
      <Header siteTitle={(data.site && data.site.siteMetadata && data.site.siteMetadata.title) || 'Title'} />
      <div
        style={{
          width: '100%',
          margin: '0 auto',
          maxWidth: 960,
          padding: '0 1.0875rem 1.45rem',
        }}
      >
        {children}
        <SocialBubble />
      </div>
    </Container>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
