import React from 'react'
import styled from 'styled-components'

export default function AboutUsSection({id}) {
    return (
        <section id={id}>
            <AboutUsHeader>
                <h2>O nas</h2>
            </AboutUsHeader>
            <AboutUsBox>
                
            </AboutUsBox>
            
        </section>
    )
}

const AboutUsHeader = styled.div`
    h2 {
        color: red !important;

    }
`

const AboutUsBox = styled.div`
    width: 100%;
    height: 100vh;
    background: red;
`
