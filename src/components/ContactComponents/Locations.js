import React from "react"

import styled from "styled-components"

import { StaticQuery, graphql, useStaticQuery } from "gatsby"

import LocationCard from "./LocationCard"
/* 
const GET_LOCATIONS = graphql`
  {
    getLocations: allFile(filter: {relativeDirectory: {eq: "locations"}}) {
      edges {
        node {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
` */

const Locations = () => {

    const { getLocations } = useStaticQuery(
    graphql`
      query {
        getLocations:  allFile(filter: {relativeDirectory: {eq: "locations"}, extension: {eq: "jpeg"}}) {
          edges {
            node {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
    }
`
);

const Locations = getLocations.edges
console.log(Locations)
console.log('Locations')


/* function checkNull(item) {
  return item != null;
}
const Data = Locations.filter(checkNull);
console.log(Locations)
console.log('Locations') */
let locationInfo = [
  {
    address: "1234 9th Ave, SF",
    phone: "(415) 123-4567",
    hours: {
      Mon_Fri: "10am - 11pm",
      Sat_Sun: "9am - 1am",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit voluptate magni quas impedit rerum itaque, obcaecati libero facilis eaque laboriosam iste veniam nulla necessitatibus",
  },
  {
    address: "4321 12 St, SF",
    phone: "(415) 321-7654",
    hours: {
      Mon_Fri: "10am - 11pm",
      Sat_Sun: "9am - 1am",
    },
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit voluptate magni quas impedit rerum itaque, obcaecati libero facilis eaque laboriosam iste veniam nulla necessitatibus",
  },
]
  return (
    <LocationsWrapper>
      <div>
{
          
          Locations.map((item, index ) => {

            console.log(item)
            console.log(item.node.childImageSharp.gatsbyImageData)
            console.log('item')
            return (
              <LocationCard
                img={item.node.childImageSharp.gatsbyImageData}
                locationInfo={locationInfo[index]}
              />
            )
          })

}
      </div>

{/*       <StaticQuery
        query={GET_LOCATIONS}
        render={data => {
          let locations = data.getLocations.edges
          let locationInfo = [
            {
              address: "1234 9th Ave, SF",
              phone: "(415) 123-4567",
              hours: {
                Mon_Fri: "10am - 11pm",
                Sat_Sun: "9am - 1am",
              },
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit voluptate magni quas impedit rerum itaque, obcaecati libero facilis eaque laboriosam iste veniam nulla necessitatibus",
            },
            {
              address: "4321 12 St, SF",
              phone: "(415) 321-7654",
              hours: {
                Mon_Fri: "10am - 11pm",
                Sat_Sun: "9am - 1am",
              },
              description:
                "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid odit voluptate magni quas impedit rerum itaque, obcaecati libero facilis eaque laboriosam iste veniam nulla necessitatibus",
            },
          ]

          return locations.map((item, index ) => {
            console.log(item)
            console.log(item.node.childImageSharp)
            console.log('item')
            return (
              <LocationCard
                img={item.node.childImageSharp}
                locationInfo={locationInfo[index]}
              />
            )
          })
        }}
      /> */}
    </LocationsWrapper>
  )
}

const LocationsWrapper = styled.div`
  display: grid;
  grid-template-columns: auto;
  grid-row-gap: 2rem;
  max-width: 950px;
  margin: 2rem auto;
  @media (min-width: 776px) {
    /* below is fractions, so its 2 columns */
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
  }
`

export default Locations
