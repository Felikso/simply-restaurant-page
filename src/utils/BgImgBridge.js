import React from 'react'
import styled from 'styled-components'
/* import { graphql, useStaticQuery } from 'gatsby';
import { getImage } from 'gatsby-plugin-image';
import { BgImage, convertToBgImage } from 'gbimage-bridge'; */

import BackgroundImage from 'gatsby-background-image'

const BgImgBridge = ({ bgImage, afterOpacity, bgHeight }) => {
/*   const { placeholderImage } = useStaticQuery(
          graphql`
            query {
                placeholderImage: file(relativePath: {eq: "email-1.jpg"}) {
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
  const image = getImage(placeholderImage);

  const bgImage = convertToBgImage(image); */

  console.log(bgHeight)
  console.log(afterOpacity)
  console.log(bgImage)

  return (
          <StyledBackgroundImg 
          Tag='div'
          {...bgImage}
          css={`
          height: ${bgHeight ? bgHeight : "100%"};;
          &::after{
            opacity: ${afterOpacity};
          }
          `}
          preserveStackingContext
          >
          </StyledBackgroundImg>
  );
}

export default BgImgBridge;


const StyledBackgroundImg = styled(BackgroundImage)`
    width: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background: var(--hero-styled-bg);
      background-size: cover;
  width: 100%;
  padding: 5rem calc((100vw - 1300px) /2);
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute !important;
/*   z-index: -1; */

`