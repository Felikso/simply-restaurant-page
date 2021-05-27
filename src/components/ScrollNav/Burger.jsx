import React, { useState } from 'react';
import styled from 'styled-components';


const Burger = ({handleNavbar, navbarOpen}) => {
  return (
    <>
      <StyledBurger navbarOpen={navbarOpen}
                onClick={() => {
                  handleNavbar()
                }}>
        <div />
        <div />
        <div />
      </StyledBurger>
    </>
  )
}

export default Burger

const StyledBurger = styled.div`
  width: 2rem;
  height: 2rem;
  z-index: 20;
  display: none;

  @media (max-width: 768px) {
    display: flex;
    margin-right: 20px;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background-color: ${({ theme, navbarOpen }) => navbarOpen ? theme.nav.burgerOpen : theme.nav.burgerClose};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ navbarOpen }) => navbarOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      transform: ${({ navbarOpen }) => navbarOpen ? 'translateX(100%)' : 'translateX(0)'};
      opacity: ${({ navbarOpen }) => navbarOpen ? 0 : 1};
    }

    &:nth-child(3) {
      transform: ${({ navbarOpen }) => navbarOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;