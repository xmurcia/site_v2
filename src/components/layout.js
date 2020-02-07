import React from "react"
import { Link } from "gatsby"
import  { IoIosHeart } from 'react-icons/io';
import { rhythm, scale } from "../utils/typography"
import { createGlobalStyle } from "styled-components"
import { Anchor } from '../components/styled';

const GlobalStyle = createGlobalStyle`
  a {
    box-shadow: unset;
    text-decoration: none !important;
  }
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
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
      )
    }
    return (
      <>
        <GlobalStyle />
        <div
          style={{
            marginLeft: `auto`,
            marginRight: `auto`,
            maxWidth: rhythm(24),
            padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          }}
        >
          <header>{header}</header>
          <main>{children}</main>
          <footer>
            © {new Date().getFullYear()}, Powered by <Anchor href="https://www.gatsbyjs.org">Gatsby</Anchor>, <Anchor href="https://www.reactjs.org">React</Anchor> and <Anchor href="https://www.netlify.com">Netlify</Anchor>, built with <IoIosHeart color="red"/> by Xavi Murcia
            {` `}
          </footer>
        </div>
      </>
    )
  }
}

export default Layout
