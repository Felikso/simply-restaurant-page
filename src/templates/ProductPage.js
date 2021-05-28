import React from "react"
import { graphql } from "gatsby"
import { getImage } from 'gatsby-plugin-image';
import {  GatsbyImage } from 'gatsby-plugin-image'
import { CustomedHeader } from "../utils"
import Gallery from '@browniebroke/gatsby-image-gallery'
import Layout from "../components/Layout/layout"
import GalleryLightBox from "../components/GalleryLightBox/GalleryLightBox"
import styled from 'styled-components'

import { Section, Title, LinkButton, MenuButton } from "../utils"





export const query = graphql`
  query($slug: String!) {
    dataMenuJson(slug: { eq: $slug }) {
      quantity
      price
      name
      desc
      slug
      category
      gallery {
        name
        size
        image {
          childImageSharp {
            thumb: gatsbyImageData(
              width: 340
              height: 340
              placeholder: BLURRED
            )
            full: gatsbyImageData(layout: FULL_WIDTH)
          
        }
        }
      }
      image {
        childImageSharp {
          gatsbyImageData(
            width: 1200, 
            quality: 60, 
            webpOptions: {quality: 75})
        }
      }
    }
  }
`

const ProductPage = ({ data, key }) => {
  const productData = data.dataMenuJson

  const images = productData.gallery.map((item) => {
    console.log(item)
    return({
      ...item.image.childImageSharp,
      caption: `Kopalnia Gnejsu`,
      underCaptionName: item.name,
      underCaptionSize: item.size,
      fontColorName: 'green',
  
  })
  } )
  const backgroundImage = getImage(productData.image.childImageSharp.gatsbyImageData);
  return (
    <Layout>
          <CustomedHeader
                        bgImage={backgroundImage}
                        headerBg="rgba(0,0,0,0.5)"
                        afterOpacity="0.3 !important"
                        HeroHeight="55vh"
                        HeroWidthMedia="65vh"
                        HeroHeightMedia="55vh"
                        backgroundImage={backgroundImage}
                        >
          </CustomedHeader>
          <Section>
            <Title title={productData.name}/>

            <LinkButton to="/menu">
            powrót do menu
            </LinkButton>

            <ItemDesc>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla pellentesque ultricies ipsum, id tincidunt ex volutpat non. Mauris dapibus tristique volutpat. Maecenas efficitur ut ligula cursus malesuada. Morbi finibus sagittis urna vel sollicitudin. Maecenas eu tellus vulputate, sagittis libero eget, volutpat nisi. Cras consequat dignissim augue, sit amet imperdiet odio dapibus ac. Integer vel lacinia turpis. Sed vitae velit sollicitudin, mattis quam et, condimentum augue. Mauris a risus luctus, semper est tincidunt, varius justo. Aenean ex libero, malesuada commodo libero eu, lobortis venenatis nisl.
            </ItemDesc>

          </Section>

        <section>
          <GalleryLightBox 
          images={images}
           />
        </section>
    </Layout>
  )
}

export default ProductPage

const ItemDesc = styled.section`
  color: green;
`

