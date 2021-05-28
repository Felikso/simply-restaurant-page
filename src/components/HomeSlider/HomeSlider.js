import React, { useEffect } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import {  GatsbyImage } from 'gatsby-plugin-image'
import styled from 'styled-components'
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';

import { BgImage, convertToBgImage, getImage } from 'gbimage-bridge';



export default function HomeSlider({images}) {

/* 	const data = useStaticQuery(graphql`
	query {
		homeSlider: allFile(filter: {relativeDirectory: {eq: "homeSlider"}, extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
			edges {
			   node {
				  	childImageSharp {
					gatsbyImageData
				  }
				}
			  }
			}
	}

  `) */

  const { data } = useStaticQuery(
    graphql`
query {
  data:  allFile(filter: {relativeDirectory: {eq: "homeSlider"}, extension: {regex: "/(jpg)|(png)|(jpeg)/"}}) {
	edges {
	   node {
		   name
			childImageSharp {
			gatsbyImageData
		  }
		}
	  }
	}
}
`
);
		console.log(data)
		const sliderData = data.edges
/* 		const img = getImage(data); */
/* 		const img = getImage(placeholderImage);
		const bgImage = convertToBgImage(backgroundFluidImageStack); */
		

    return (
    <>
 <Slider autoplay={3000}>
{/* {	 
		 sliderData.map(({node}, index) => {
			 console.log(node)
			 return(
			 <GatsbyImage 
			 css={`
			 position: absolute;`}
			 image={node.childImageSharp.gatsbyImageData}/>
		 )})
	 } */}

{	 
		 sliderData.map(({node}, index) => {
			 console.log(node)
			 return(
				 <div>
			 <BgImage 
			 image={node.childImageSharp.gatsbyImageData}
			 css={`
			 height: 100%;
			 `}>
				 <SliderSection>
					 <h2>Lwowskie Smaki</h2>
					 <h6>{node.name}</h6>
				 </SliderSection>
			 </BgImage>
			 </div>
		 )})
	 }
	 
{/* 	{content.map((item, index) => (
		<div
			key={index}
			style={{ background: `url('${item.image}') no-repeat center center` }}
		>
			<div className="center">
				<h1>{item.title}</h1>
				<p>{item.description}</p>
				<button>{item.button}</button>
			</div>
		</div>
	))} */}
</Slider>            

     </>
    )
}

const SliderSection = styled.section`
	height: 100%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	h2{
		color: white;
		font-size: 3rem;
	}

	h6{
		color: silver;
		font-size: 2rem;
	}
`


