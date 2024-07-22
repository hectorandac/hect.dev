/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

function SEO({
  description, lang, meta, title,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  );

  const siteMetadata = site ? site.siteMetadata : {};

  const metaDescription = description || siteMetadata.description || "Explore the journey of Hector Acosta, a dedicated software engineer with over 5 years of experience in crafting innovative backend systems and stunning front-end designs. Dive into the world of AI research, scalable application development, and cutting-edge technologies. From Dominican Republic to South Korea and currently in pursuit of a Master’s degree in Computer Science at Kyungpook National University, Hector's expertise spans across Java, Ruby on Rails, Golang, and more. Discover projects, research, and insights on Hector’s professional portfolio.";
  const defaultTitle = siteMetadata.title || 'Hector Acosta Professional Portfolio';
  const author = siteMetadata.author || 'Hector A. Acosta';

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: 'description',
          content: metaDescription,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: metaDescription,
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          name: 'og:image',
          content: 'https://raw.githubusercontent.com/hectorandac/hect.dev/main/src/images/hector-acosta-small.jpg',
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:creator',
          content: author,
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
}

SEO.defaultProps = {
  lang: 'en',
  meta: [],
  description: '',
};

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      content: PropTypes.string,
      property: PropTypes.string,
    }),
  ),
  title: PropTypes.string.isRequired,
};

export default SEO;
