import React from "react"

import Layout from '../components/Layout/layout'
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"

import menuImage from "../images/bcg/menuBcg.jpeg"

import Menu from "../components/MenuComponents/Menu"


import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { CustomedHeader } from "../utils"

const MenuPage = () => {
  const { img } = useStaticQuery(
    graphql`
query {
  img:  file(relativePath: { eq: "bcg/menuBg.jpg" }) {
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
const backgroundImage = getImage(img);
  return(
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <CustomedHeader
                        bgImage={backgroundImage}
                        headerBg="rgba(0,0,0,0.5)"
                        afterOpacity="0.3 !important"
                        HeroHeight="55vh"
                        HeroWidthMedia="65vh"
                        HeroHeightMedia="55vh"
                        backgroundImage={backgroundImage}
                        >
    {/* <BgImg backgroundImage={backgroundImage}/> */}
    </CustomedHeader>
{/*     <PageHeader image={menuImage}>
      <Banner title="menu" subtitle="let's dig in" />
    </PageHeader> */}
    <Menu />
  </Layout>
)
}

export default MenuPage
