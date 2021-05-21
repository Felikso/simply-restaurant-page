import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

import { styles } from "../../utils"

export default class NavbarScrollLinks extends Component {
  state = {
    linksxxx: [
      {
        id: 0,
        path: "/",
        name: "Home",
      },
      {
        id: 1,
        path: "/about/",
        name: "about",
      },
      {
        id: 2,
        path: "/menu/",
        name: "menu",
      },
      {
        id: 3,
        path: "/contact/",
        name: "contact",
      },
    ],
  }
  render() {
    return (
        <LinkWrapper open={this.props.navbarOpen} items={ ['intro', 'first', 'second', 'cta'] } currentClassName="is-active" offset={-300}>
        {this.state.links.map(link => {
          return (
            <>
            
              <li key={link.id}>
                  <Scroll type="id" element={link.name}>
                      <a href="#" className="nav-link">start</a>
                  </Scroll>
              </li>
            
            </>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled()`
  transform: translate(0, 50%);
  li {
    list-style-type: none;
  }

  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${styles.colors.mainGrey};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    ${styles.transDefault};

    &:hover {
      background: ${styles.colors.mainGrey};
      color: ${styles.colors.mainYellow};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : 0)};
  overflow: hidden;
  ${styles.transObject({})};
  @media (min-width: 768px) {
    transform: translate(0, 0);
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`


/* const LinkWrapper = styled.ul`
  li {
    list-style-type: none;
  }

  .nav-link {
    display: block;
    text-decoration: none;
    padding: 0.5rem 1rem 0.5rem 1rem;
    color: ${({ theme }) => theme.colors.primaryColor};
    font-weight: 700;
    text-transform: capitalize;
    cursor: pointer;
    tranistion: ${({ theme }) => theme.transitions.transDefault};

    &:hover {
      background: ${({ theme }) => theme.colors.primaryColor};
      color: ${({ theme }) => theme.colors.secondaryColor};
      padding: 0.5rem 1rem 0.5rem 1.3rem;
    }
  }
  height: ${props => (props.open ? "152px" : 0)};
  overflow: hidden;
  tranistion: ${({ theme }) => theme.transitions.transDefault};
  @media (min-width: 768px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${({ theme }) => theme.colors.primaryColor};
      padding: 0.5rem 1rem;
    }
  }
`
 */