import React from "react"

import Layout from '../components/Layout/layout'
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"

import menuImage from "../images/bcg/menuBcg.jpeg"

import Menu from "../components/MenuComponents/Menu"
import OfferGalleryLightBox from "../components/OfferGalleryLightBox"

const GalleryPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <PageHeader image={menuImage}>
      <Banner title="galeria" subtitle="poznaj nas lepiej" />
    </PageHeader>
    <OfferGalleryLightBox />
  </Layout>
)

export default GalleryPage
