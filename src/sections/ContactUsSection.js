import React from 'react'
import styled from 'styled-components'

export default function ContactUsSection({id}) {
    return (
        <section id={id}>
            <ContactUsHeader>
                <h2>Kontakt</h2>
            </ContactUsHeader>
            <ContactUsBox>
                
            </ContactUsBox>
            
        </section>
    )
}

const ContactUsHeader = styled.div`
    h2 {
        color: blue !important;

    }
`

const ContactUsBox = styled.div`
    width: 100%;
    height: 100vh;
    background: red;
`
