import React from "react"

import { StaticQuery, graphql, Link, useStaticQuery } from "gatsby"

import {
  Section,
  SectionButton,
  Title,
  Product,
  ProductList,
} from "../../utils"

import styled from "styled-components"

/* const PRODUCTS = graphql`
  {
    items: allContentfulFeaturedItems {
      edges {
        node {
          name
          price
          ingredients
          image {
            fixed(height: 150, width: 150) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
        }
      }
    }
  }
` */

const PRODUCTSWP = graphql`
  {
    items: allWpDish {
      nodes {
        featuredImage { 
          node {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
        dishes {
          category
          desc
          fieldGroupName
          name
          price
          quantity
        }
      }
    }
  }
`



export default function Menu() {
/*   const PRODUCTS = useStaticQuery(
    graphql`
        query {
          allWpDish {
            edges {
              node {
                id
                featuredImage {
                  node {
                    localFile {
                      childImageSharp {
                        gatsbyImageData
                      }
                    }
                  }
                }
                dishes {
                  quantity
                  price
                  name
                  fieldGroupName
                  desc
                  category
                }
              }
            }
          }
        }
    `
  ) */
  
  return (
    <Section>
      <Title title="featured items" subtitle="popular bites" />
      <ProductList>
        <div>
{/*           {PRODUCTS.allWpDish.edges.map((item, i) => {

            return(
              <p>{item.node.id}</p>
            )
          })} */}
        </div>
        <StaticQuery
          query={PRODUCTSWP}
          render={data => {
            const products = data.items.nodes

            return products.map(item => {
              return (
                <Product 
                  key={item.id} 
                  img={item.featuredImage.node.localFile.childImageSharp.gatsbyImageData} 
                  product={item.dishes} 
                />
              )
            })
          }}
        />
      </ProductList>
      <Link to="/menu" style={{ textDecoration: "none" }}>
        <SectionButton style={{ margin: "2rem auto" }}>full menu</SectionButton>
      </Link>
    </Section>
  )
}

// const ProductList = styled.div`
//   margin: 3rem 0;
//   display: grid;
//   grid-template-columns: 100%;
//   grid-row-gap: 3rem;

//   @media (min-width: 576px) {
//     grid-template-columns: 95%;
//   }

//   @media (min-width: 776px) {
//     grid-template-columns: 80%;
//     justify-content: center;
//   }

//   @media (min-width: 992px) {
//     /* 1fr 1fr -- working with fractions, so this means it would be 2 coloumns */
//     grid-template-columns: 1fr 1fr;
//     grid-gap: 2rem;
//   }
// `
