import { Link } from 'gatsby'
import React, {useState, useRef} from "react"

import { useStaticQuery, graphql, StaticQuery } from 'gatsby'

/* import { useHasBeenVisible } from '../hooks/useVisibility'; */
import { useHasBeenPartlyVisible } from '../hooks/useVisibility';

import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';

import styled from "styled-components"

import Layout from '../components/Layout/layout'
import SEO from "../components/seo"

import { HomeHeader, HomeBanner, BannerButton } from "../utils"

/* import StyledHero from "../utils/StyledHero"

import bgImage from "../images/bcg/homeBg.jpg"
import image from "../images/bcg/homeBg.jpg" */

import QuickInfo from "../components/HomepageComponents/QuickInfo"
/* import Gallery from "../components/HomepageComponents/Gallery" */
import Menu from "../components/HomepageComponents/Menu"
import FullWidthSection from '../components/FullWidthSection';

import Footer from "../components/Footer/Footer"


import Helmet from 'react-helmet'
import { Waypoint } from 'react-waypoint'


import Nav from '../components/ScrollNav/Nav'
import Navbar from '../components/globals/navbar/Navbar'

//sections
import AboutUsSection from '../sections/AboutUsSection'
import ContactUsSection from '../sections/ContactUsSection'
import OurOfferSection from '../sections/OurOfferSection'
import HomeSlider from '../components/HomeSlider/HomeSlider';





const BG_IMAGE = graphql`
  {
    placeholderImage: file(relativePath: { eq: "bcg/homeBg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
            width: 1200, 
            quality: 60, 
            webpOptions: {quality: 75})
        }
      }


}
`

/* const { placeholderImage, placeholderVideo, placeholderVideoSmall } = useStaticQuery(
  graphql`
    query {
        placeholderImage: file(relativePath: {eq: "homeBg.jpg"}) {
          childImageSharp {
          gatsbyImageData(
              width: 1200, 
              quality: 60, 
              webpOptions: {quality: 75})
          }
}


}
`
);
const imgg = getImage(placeholderImage);


const bgImagee = convertToBgImage(imgg); */

function Index (props) {
  const halfPage = useRef();
  const hasScrolled = useHasBeenPartlyVisible(halfPage, 0.1);
  const [stickyNav, setStickyNav] = useState(false)
  console.log(BG_IMAGE)
  console.log('BG_IMAGE')
/*   constructor(props) {
    super(props)
    this.state = {
      stickyNav: false,
    }
  } */

  const handleWaypointEnter = () => {
    setStickyNav(false)
  }

/*   _handleWaypointEnter = () => {
    this.setState(() => ({ stickyNav: false }))
  }
 */

  const handleWaypointLeave = () => {
    setStickyNav(true)
  }

/*   _handleWaypointLeave = () => {
    this.setState(() => ({ stickyNav: true }))
  }
 */
  
  

    return (
      <Layout>
        <Helmet title="Gatsby Starter - Stellar" />

        <SEO title="Lwowskie Smaki" keywords={[`gatsby`, `application`, `react`]} />

      <StaticQuery 
          query={BG_IMAGE}>
        {({ placeholderImage }) => {
            const img = getImage(placeholderImage);
            const backgroundFluidImageStack = [
              `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`,
              img,
            ].reverse();
            const bgImage = convertToBgImage(backgroundFluidImageStack);

          return(
            <HomeHeader
                    bgImage={bgImage}
                    headerBg="rgba(0,0,0,0.5)"
                    afterOpacity="0.3 !important"
                    HeroHeight="90vh"
                    HeroWidthMedia="65vh"
                    HeroHeightMedia="90vh"
                    >
                  <HomeBanner
                    title="lwowskie smaki"
                    subtitle1={{ address: "ul. Dawida Wrocław", phone: "+48 000-000-000" }}
                    motto={{excerption1: "szybko, smacznie, świeżo", excerption2: "serdecznie zapraszamy"}}
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
            
          )

        }}
      </StaticQuery>

        <Waypoint
          onEnter={handleWaypointEnter}
          onLeave={handleWaypointLeave}
        ></Waypoint>
        <Nav sticky={stickyNav} /* ref={halfPage} */ />
        <HomeSlider />

        <QuickInfo />
        <AboutUsSection id="about-us-section" />
        <ContactUsSection id="contact-us-section" />
        <OurOfferSection id="our-offer-section" />
        <Menu />

{/*         {hasScrolled ? (
        <>
        <AboutUsSection id="about-us-section" />
        <ContactUsSection id="contact-us-section" />
        <OurOfferSection id="our-offer-section" />
        <Menu />
        </>
      ) : (
        <FullWidthSection height='2286px' minHeight='3448px' />
      )} */}

      </Layout>
    )

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




