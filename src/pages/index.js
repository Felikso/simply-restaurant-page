import { Link } from 'gatsby'
import React from "react"

import styled from "styled-components"

import Layout from '../components/Layout/layout'
import SEO from "../components/seo"
import { HomeHeader, HomeBanner, BannerButton } from "../utils"

import image from "../images/bcg/homeBcg.jpeg"


import QuickInfo from "../components/HomepageComponents/QuickInfo"
import Gallery from "../components/HomepageComponents/Gallery"
import Menu from "../components/HomepageComponents/Menu"


import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'


import Nav from '../components/ScrollNav/Nav'
import Navbar from '../components/globals/navbar/Navbar'

//sections
import AboutUsSection from '../sections/AboutUsSection'
import ContactUsSection from '../sections/ContactUsSection'
import OurOfferSection from '../sections/OurOfferSection'

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  }

  _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }

  _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }

  render() {
    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <HomeHeader image={image}>
      <HomeBanner
        title="eatery"
        subtitle1={{ address: "1234 9th Ave, SF", phone: "(415) 123-4567" }}
        subtitle2={{ address: "5678 18th St, SF", phone: "(415) 555-9247" }}
      >
        <BannerButtonWrapper>
          <Link to="/menu" style={{ textDecoration: "none" }}>
            <BannerButton style={{ margin: "1.7rem 0.8rem" }}>
              menu
            </BannerButton>
          </Link>
          <Link to="/contact" style={{ textDecoration: "none" }}>
            <BannerButton style={{ margin: "1.7rem 0.8rem" }}>
              contact
            </BannerButton>
          </Link>
        </BannerButtonWrapper>
      </HomeBanner>
    </HomeHeader>

        <Waypoint
          onEnter={this._handleWaypointEnter}
          onLeave={this._handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={this.state.stickyNav} />

        <QuickInfo />
        <AboutUsSection id="about-us-section" />
        <ContactUsSection id="contact-us-section" />
        <OurOfferSection id="our-offer-section" />
        <Menu />
      </Layout>
    )
  }
}

export default Index


const BannerButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`

const ButtonWrapper = styled.button`
  background: blue;
  color: white;
`




