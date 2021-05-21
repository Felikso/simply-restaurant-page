import React, { Component } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Scrollspy from 'react-scrollspy'
import Scroll from './Scroll'

import { styles } from "../../utils"

export default class NavbarLinks extends Component {
  state = {
    links: [
      {
        id: 0,
        path: "/",
        name: "start",
        scrollId: "start-section",
      },
      {
        id: 1,
        path: "/oferta/",
        name: "oferta",
        scrollId: "our-offer-section",
      },
      {
        id: 2,
        path: "/o-nas/",
        name: "o nas",
        scrollId: "about-us-section",
      },
      {
        id: 3,
        path: "/kontakt/",
        name: "kontakt",
        scrollId: "contact-us-section",
      },
    ],
  }
  render() {
    return (
      <LinkWrapper 
      open={this.props.navbarOpen} items={ ['start-section', 'our-offer-section', 'about-us-section', 'contact-us-section'] } 
      currentClassName="is-active" 
      offset={-300}>
        {this.state.links.map(link => {
          return (
            <li key={link.id}>
            <Scroll type="id" element={link.scrollId}>
                <a href="#" className="nav-link">{link.name}</a>
            </Scroll>
        </li>
          )
        })}
      </LinkWrapper>
    )
  }
}

const LinkWrapper = styled(Scrollspy)`
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
  @media (min-width: 769px) {
    height: auto;
    display: flex;
    margin: 0 auto;
    .nav-link:hover {
      background: ${styles.colors.mainWhite};
      padding: 0.5rem 1rem;
    }
  }
`
