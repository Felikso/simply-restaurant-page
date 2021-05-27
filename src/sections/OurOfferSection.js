import React from 'react'
import styled from 'styled-components'

export default function OurOfferSection({id}) {
    return (
        <section id={id}>
            <OurOfferHeader>
                <h2>Nasza oferta</h2>
            </OurOfferHeader>
            <OurOfferBox>
                
            </OurOfferBox>
            
        </section>
    )
}

const OurOfferHeader = styled.div`
    h2 {
        color: green !important;

    }
`

const OurOfferBox = styled.div`
    width: 100%;
    height: 100vh;
    background: red;
`
