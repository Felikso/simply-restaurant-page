import React, { useState } from 'react'
import NavbarLinks from './NavbarLinks'
import NavbarHeader from './NavbarHeader'
import { MainButton } from '../buttons/MainButton'
import styled from 'styled-components'

const Nav = (props) => {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleNavbar = () => {
        setNavbarOpen(!navbarOpen)
      }

return(


    
    <NavBox id="nav" className={props.sticky ? 'alt' : ''}>
        <NavbarHeader handleNavbar={handleNavbar} navbarOpen={navbarOpen} />


        <NavbarLinks navbarOpen={navbarOpen}/>
        
                <NavButton 
                    uniqueLetterSpacing="3px" 
                    uniqueBorderStyle="dotted"
                    primary="false" 
                    round="true" 
                    to="/zamowienie">
                    zamów
                </NavButton>
    </NavBox>
)
}
export default Nav

const NavButton = styled(MainButton)`
    @media (max-width: 768px){
        display: none;
    }
`

const NavBox = styled.nav`
    position: relative;
    &.alt{
        position: fixed;
        width: 100vw;
        background: ${({ theme }) => theme.nav.scrollBg};
        top: 0;
        z-index: 100;
    }
@media (min-width: 769px) {


    width: 100%;
    height: 10vh;
    background: ${({ theme }) => theme.nav.defaultBg};
    display: flex;
    justify-content: space-around;
    align-items: center;

    ul {
        margin: 0;
        padding: 0;
        list-style: none;

        li {
            transition-duration: 500ms;
            transition-property: margin-right;
            display: inline-block;
            margin: 0 0.35em;
            padding: 0;
            vertical-align: middle;


             a {
                /*@include vendor('transition', (
                    'font-size #{_duration(transition)} ease'
                )); */
                text-decoration: none;
                color: black;
                color: ${({theme}) => theme.fontColor.fontPrimary};
                display: inline-block;
                height: 2.25em;
                line-height: 2.25em;
                padding: 0 1.25em;
                border: 0;
                /* border-radius: _size(border-radius); */
                box-shadow: inset 0 0 0 1px transparent;

                &:hover {
                    /* background-color: _palette(invert, border-bg); */
                }

                // &.active {
                // 	background-color: _palette(invert, bg);
                // 	box-shadow: none;
                // }
            }
            &.is-active {
                a {
                    /* background-color: _palette(invert, bg); */
                    box-shadow: none;
                }
            }
        }
    }

    &.alt {
        position: fixed;
        top: 0;
        padding: 0.5em 1em;
/*         background-color: transparentize(red, 0.05); */
        border-top-left-radius: 0;
        border-top-right-radius: 0;
        z-index: 100;

        ul {
            li {
                margin: 0 0.175em;

                a {
                    font-size: 0.9em;
                }
            }
        }
    }

}
`
