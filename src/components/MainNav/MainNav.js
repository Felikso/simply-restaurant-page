import React, { useState } from 'react'
import { Link } from 'gatsby'

import { FiFacebook } from "@react-icons/all-files/fi/FiFacebook";
import { FiInstagram } from "@react-icons/all-files/fi/FiInstagram";
import { FiPhoneCall } from "@react-icons/all-files/fi/FiPhoneCall";
import { RiMessengerLine } from "@react-icons/all-files/ri/RiMessengerLine";
import { FaWhatsapp } from "@react-icons/all-files/fa/FaWhatsapp";

import { MainButton } from '../buttons/MainButton'
import styled from 'styled-components'

const MainNav = (props) => {

      const navIcons = [
    {icon: (<FiFacebook />), title: "skontaktuj się przez facebook;a", link: "#"},
    {icon: (<FiInstagram />), title: "skontaktuj się przez instagrama", link: "#"},
    {icon: (<FiPhoneCall />), title: "skontaktuj się przez telefon", link: "#"},
    {icon: (<RiMessengerLine />), title: "skontaktuj się przez Messenger'a", link: "#"},
    {icon: (<FaWhatsapp />), title: "skontaktuj się przez Whatsapp'a", link: "#"},
]

    const links =  [
        {
          id: 0,
          path: "/",
          name: "start",
        },
        {
          id: 1,
          path: "/oferta/",
          name: "oferta",
        },
        {
          id: 2,
          path: "/o-nas/",
          name: "o nas",
        },
        {
          id: 3,
          path: "/kontakt/",
          name: "kontakt",
        },
      ]


return(


    
    <MainNavBox>

        <MainNavSocialBox>
        {
            navIcons.map((item, i) => (
                <MainNavIcon title={item.title} href={item.link}>
                    {item.icon}
                </MainNavIcon>
            ))
        }
        </MainNavSocialBox>

        <MainNavLinkBox>
        {
            links.map((item, i) => (
                <MainNavLink key={item.i} to={item.path}>
                    {item.name}
                </MainNavLink>
            ))
        }
        </MainNavLinkBox>

    </MainNavBox>
)
}
export default MainNav

const MainNavLinkBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
`

const MainNavSocialBox = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
`

const MainNavIcon = styled.a`
color: ${({ theme }) => theme.nav.defaultBg};
color: #fff;
text-transform: uppercase;
text-decoration: none;
letter-spacing: 0.15em;

display: inline-block;
padding: 15px 20px;
position: relative;

&::after{
    background: none repeat scroll 0 0 transparent;
    bottom: 0;
    content: "";
    display: block;
    height: 2px;
    left: 50%;
    position: absolute;
    background: #fff;
    transition: width 0.3s ease 0s, left 0.3s ease 0s;
    width: 0;
}

&:hover::after{
    width: 100%; 
    left: 0; 
}
`

const MainNavLink = styled(Link)`
    color: ${({ theme }) => theme.nav.defaultBg};
    color: #fff;
    text-transform: uppercase;
    text-decoration: none;
    letter-spacing: 0.15em;
    
    display: inline-block;
    padding: 15px 20px;
    position: relative;

    &::after{
        background: none repeat scroll 0 0 transparent;
        bottom: 0;
        content: "";
        display: block;
        height: 2px;
        left: 50%;
        position: absolute;
        background: #fff;
        transition: width 0.3s ease 0s, left 0.3s ease 0s;
        width: 0;
    }

    &:hover::after{
        width: 100%; 
        left: 0; 
    }
`


const MainNavBox = styled.nav`
    position: absolute;
    top: 0;
    left: 0;
    z-index: 99;
    width: 100%;
    height: 10vh;
    background: ${({ theme }) => theme.colors.mainNavBg};
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: ${({ theme }) => theme.device.m}) {
        flex-direction: column;
      }

`
