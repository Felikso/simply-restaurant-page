import React from "react"
import { graphql, useStaticQuery } from 'gatsby'
import Layout from '../components/Layout/layout'
import SEO from "../components/seo"
import { PageHeader, Banner } from "../utils"
import OfferGalleryLightBox from "../components/OfferGalleryLightBox"

const GalleryPage = () => {

    const photos = useStaticQuery(
        graphql`
          query {
            productsGallery: 
            allFile(filter: {relativeDirectory: {eq: "productsGallery"}}) {
                edges {
                   node {
                    name
                      childImageSharp {
                        thumb: gatsbyImageData(
                          width: 270
                          height: 270
                          placeholder: BLURRED
                        )
                        full: gatsbyImageData(layout: FULL_WIDTH)
                      }
                    }
                  }
                }
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
      )
      
      
      const images = photos.productsGallery.edges.map(({ node }) => ({
      ...node.childImageSharp,
      caption: `Lwowskie Smaki - ${node.name}`,
      
      }))

      const bgImage = photos.placeholderImage.childImageSharp.gatsbyImageData
      console.log(bgImage)
      console.log('bgImage')
    return(
            <Layout>
                <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />


                <PageHeader bgImage={bgImage}>
                <Banner title="galeria" subtitle="poznaj nas lepiej" />
                </PageHeader>
                <OfferGalleryLightBox images={images}/>
            </Layout>
)
}

export default GalleryPage
