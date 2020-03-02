/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import Image from 'gatsby-image';
import { useStaticQuery, graphql } from 'gatsby';
import { rhythm } from '../utils/typography';

const Bio: React.FC<{}> = () => {

  const data = useStaticQuery(graphql`
  query UserPicture {
    allContentfulAsset(filter: {title: {eq: "Sparkler"}}) {
      edges {
        node {
          title
          fixed(width: 100) {
            ...GatsbyContentfulFixed
          }
        }
      }
    }
  }`)

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
      }}
    >
      <Image
        fixed={data.allContentfulAsset.edges[0].node.fixed}
        alt={'author'}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{'author'}</strong> who lives and works in San
        Francisco building useful things.
        {` `}
        <a href={`https://twitter.com`}>
          You should follow him on Twitter
        </a>
      </p>
    </div>
  )
};

export default Bio;
