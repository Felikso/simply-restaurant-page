import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
/* import '../assets/scss/main.scss' */

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/GlobalStyle";
import { theme } from "../style/theme.js";

import ScrollBtn from '../../interactions/ScrollBtn'
import MainNav from '../MainNav/MainNav'
import Footer from '../Footer/Footer'


const Layout = ({ children }) => {
  if (typeof window !== `undefined`){
    window.onbeforeunload = function () {
        window.scrollTo(0, 0);
      }
}

    const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          description
          author
          street
          city
          motto
        }
      }
    }
    `)

/*     console.log(data) */
    const siteData = data.site.siteMetadata


  return (
    <React.Fragment>
      <ThemeProvider theme={theme}> 
      <GlobalStyle />
      <MainNav />
      <ScrollBtn showBelow={250} />
      <div className={`body`}>
        <div id="wrapper">

          {children}
          <Footer siteData={siteData} />
        </div>
      </div>
      </ThemeProvider>
    </React.Fragment>
  )
}

/* Layout.propTypes = {
  children: PropTypes.node.isRequired,
} */

export default Layout

/* class Template extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: 'is-loading'
    }
  }

  

  componentDidMount () {
    this.timeoutId = setTimeout(() => {
        this.setState({loading: ''});
    }, 100);
  }

  componentWillUnmount () {
    if (this.timeoutId) {
        clearTimeout(this.timeoutId);
    }
  }

  render() {
    const { children} = this.props
    if (typeof window !== `undefined`){
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
          }
    }


    return (
      <ThemeProvider theme={theme}> 
      <GlobalStyle />
      <div className={`body ${this.state.loading}`}>
        <div id="wrapper">

          {children}
          <Footer />
        </div>
      </div>
      </ThemeProvider>
    )
  }
}

export default Template
 */