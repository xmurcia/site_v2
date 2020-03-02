import React from 'react';
import { Link } from 'gatsby';
import { IoIosHeart } from 'react-icons/io';
import { rhythm, scale } from '../utils/typography';
import { Anchor } from './sharedComponents';
import { GlobalStyle } from '../styles/GlobalStyles';

const Layout: React.FC<{}> = (props: any) => {
  const { location, title, children } = props
  //const rootPath = `${__PATH_PREFIX__}/`;
  let header;

  if (location.pathname === 'rootPath') {
    header = (
      <h1
        style={{
          ...scale(1.5),
          marginBottom: rhythm(1.5),
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    );
  }

  const layoutStyle = {
    marginLeft: `auto`,
    marginRight: `auto`,
    maxWidth: rhythm(24),
    padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
  }

  return (
    <>
      <GlobalStyle />
      <div style={props.noHeader ? {} : layoutStyle}>
        {props.noHeader || <header>{header}</header>}
        <main>{children}</main>
        <footer>
          © {new Date().getFullYear()}, Powered by{' '}
          <Anchor href='https://www.gatsbyjs.org'>Gatsby</Anchor>,{' '}
          <Anchor href='https://www.reactjs.org'>React</Anchor> and{' '}
          <Anchor href='https://www.netlify.com'>Netlify</Anchor>, built with{' '}
          <IoIosHeart color='red' /> by Xavi Murcia
            {` `}
        </footer>
      </div>
    </>
  )
}

export default Layout;
