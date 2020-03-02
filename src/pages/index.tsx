import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import { graphql } from 'gatsby';
import Image from 'gatsby-image';
import { rhythm } from '../utils/typography';

import styled from 'styled-components';

const Container = styled.div`
  margin: 3rem auto;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const UserWrapper = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto 12px auto;
  &:last-child {
    margin-bottom: 0;
  }
`;

const Avatar = styled.img`
  flex: 0 0 96px;
  width: 96px;
  height: 96px;
  margin: 0;
`;

const Description = styled.div`
  flex: 1;
  margin-left: 18px;
  padding: 12px;
`;

const Username = styled.h2`
  margin: 0 0 12px 0;
  padding: 0;
`;

const Excerpt = styled.p`
  margin: 0;
`;

const User = (props: any) => (
  <UserWrapper>
    <Avatar src={props.avatar} alt='' />
    <Description>
      <Username>{props.username}</Username>
      <Excerpt>{props.excerpt}</Excerpt>
    </Description>
  </UserWrapper>
)

type LandingWallProps = {
  backgroundImage: string;
};

const LandingWall = styled('div') <LandingWallProps>`
  background-image: url(${props => props.backgroundImage});
  background-position: center center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  height: 100vh;
  width: 100vw;
`;

const LandingWallGreeting = styled.h1`
  color: white;
  position: absolute;
  top: 50%;
  left: 50%;
  padding: 20px;
  transform: translate(-50%, -50%);

  &:before {
    content: '';
    width: 80%;
    position: absolute;
    top: 0;
    left: 0;
    background-color: seagreen;
    right: 0;
    bottom: 0;
    z-index: -1;

  }
`;

export const Home: React.FC<{}> = (props: any) => {

  // const siteTitle = props.data.site.siteMetadata.title;

  return (
    <Layout location={props.location} noHeader>
      <SEO title='Home' />
      <LandingWall backgroundImage={props.data.allContentfulAsset.edges[0].node.fixed.src}>
        {/* <Image
          fixed={ props.data.allContentfulAsset.edges[0].node.fixed }
          alt={'author'}
          style={{
            height: `100vh`,
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            width: `100vw`
          }}
          imgStyle={{

          }}>
        </Image> */}
        <LandingWallGreeting>Test Greeting</LandingWallGreeting>
      </LandingWall>
      {/* <Container>
        <h1>About Styled Components</h1>
        <p>Styled Components is cool</p>
        <User
          username='Jane Doe'
          avatar='https://s3.amazonaws.com/uifaces/faces/twitter/adellecharles/128.jpg'
          excerpt='I'm Jane Doe. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
        <User
          username='Bob Smith'
          avatar='https://s3.amazonaws.com/uifaces/faces/twitter/vladarbatov/128.jpg'
          excerpt='I'm Bob smith, a vertically aligned type of guy. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'
        />
      </Container> */}
    </Layout>
  )
};

export const pageQuery = graphql`
query BlogIndexQuery {
  site {
    siteMetadata {
      title
    }
  }
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
}
`
