import React from 'react'
/* import '../assets/scss/main.scss' */

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../style/GlobalStyle";
import { theme } from "../style/theme.js";

import Footer from '../Footer/Footer'

class Template extends React.Component {
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
