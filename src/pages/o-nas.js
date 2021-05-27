import React from "react"
import { graphql, StaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image';
import { convertToBgImage } from 'gbimage-bridge';
import styled from "styled-components"

import Layout from '../components/Layout/layout'
import SEO from "../components/seo"
import { styles, PageHeader, Banner, Title, Section } from "../utils"

import aboutImage from "../images/bcg/aboutBcg.jpeg"

import AboutText from "../components/AboutComponents/AboutText"
/* import AboutGallery from "../components/AboutComponents/AboutGallery" */
import AwardSection from "../components/AboutComponents/AwardSection"

const BG_IMAGE_ABOUT = graphql`
  {
    placeholderImage: file(relativePath: { eq: "bcg/aboutBg.jpg" }) {
      childImageSharp {
        gatsbyImageData(
            width: 1200, 
            quality: 60, 
            webpOptions: {quality: 75})
        }
      }


}
`

const AboutPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <StaticQuery 
          query={BG_IMAGE_ABOUT}>
        {({ placeholderImage }) => {
            const img = getImage(placeholderImage);
            const backgroundFluidImageStack = [
              `linear-gradient(rgba(220, 15, 15, 0.73), rgba(4, 243, 67, 0.73))`,
              img,
            ].reverse();
            const bgImage = convertToBgImage(backgroundFluidImageStack);

          return(
            <PageHeader 
            bgImage={bgImage}
            headerBg="rgba(0,0,0,0.5)"
            afterOpacity="0.9 !important"
            HeroHeight="60vh"
            HeroWidthMedia="60vh"
            HeroHeightMedia="60vh"
            bgHeight="60vh"
            >
            <Banner title="about" subtitle="Learn more" />
          </PageHeader>
            
          )

        }}
      </StaticQuery>

    <Section />
    <Title title="a neighborhood favorite" subtitle="get to know us" />
    <AwardSection />
    <AboutText />
{/*     <AboutGallery /> */}
  </Layout>
)

export default AboutPage
