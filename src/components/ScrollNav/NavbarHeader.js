import React, { Component } from "react"

import { Link } from "gatsby"
import logo from "../../images/logo.svg"

import styled from "styled-components"

import { styles } from "../../utils"

import Burger from './Burger'

export default class NavbarHeader extends Component {
  render() {
    const { handleNavbar, navbarOpen } = this.props
    return (
      <HeaderWrapper>
        <Link to="/">
{/*           <img src={logo} alt="Eatery Logo" /> */}<p>X</p>
        </Link>
        <Burger handleNavbar={handleNavbar} navbarOpen={navbarOpen} />
      </HeaderWrapper>
    )
  }
}

const HeaderWrapper = styled.div`
  padding: 0.4rem 1rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .toggle-icon {
    font-size: 1.75rem;
    color: ${styles.colors.mainYellow};
    cursor: pointer;
  }

  @media (min-width: 768px) {
    .toggle-icon {
      display: none;
    }
  }
`
