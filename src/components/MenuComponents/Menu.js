import React, { Component } from "react"

import { StaticQuery, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { Section, Title } from "../../utils"

import MenuItemsContainer from "./MenuItemsContainer"

/* const data = useStaticQuery(
  graphql`
      query {
            allWpDish {
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
) */




const GET_MENU = graphql`
  {
    menuItems: allWpDish {
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

console.log(GET_MENU)
/* const GET_MENU = graphql`
  {
    menuItems: allContentfulMenuItem {
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
          categoryList
        }
      }
    }
  }
`
 */
export default class Menu extends Component {
  render() {
    return (
      <Section>
        <Title title="menu" />
        <StaticQuery
          query={GET_MENU}
          render={data => {
            const menuItems = data.menuItems.nodes
            console.log(menuItems)
            console.log('menuItems')
            return <MenuItemsContainer menuItems={menuItems} />
          }}
        />
      </Section>
    )
  }
}

const MenuItemWrapper = styled.div``
