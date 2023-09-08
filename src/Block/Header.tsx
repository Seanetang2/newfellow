import React, {useState} from 'react'
import styled from "styled-components"
import Globalbutto from '../comonents/Button'
import {FiMenu} from "react-icons/fi"

const Header = () => {

    const [show, setShow] = useState(false)

    const Toggle = () => {
        setShow(!show);
    }
  return (
    <Container>
          <Wrapper>
              <Wrap>
                  <Holder>
                  <svg
                width="76"
                height="40"
                viewBox="0 0 76 65"
                fill="none" xmlns="http://www.w3.org/2000/svg"><path
                          d="M37.5274 0L75.0548 65H0L37.5274 0Z" fill="#ffffff" /></svg>
                  
                  <h1>Vercel</h1>
            </Holder>

              <NavHolder>
                  <Navs>Features</Navs>
                  <Navs>Docs</Navs>
                  <Navs>Templates</Navs>
                  <Navs>Integrations</Navs>
                  <Navs>Customers</Navs>
                  <Navs>Enterprise</Navs>
                  <Navs>Pricing</Navs>
              </NavHolder>
              </Wrap>

              <ButtonHolder>
                  <Navs>Contact</Navs>
                  <Globalbutto
                      text="Login"
                      bcc="gray"
                      color="white" />
                 <Globalbutto text="Sign iUp" bcc="#fff" color="#000"/>
              </ButtonHolder>
              <Icon onClick={Toggle}>
                <FiMenu />
              </Icon>

              {show ? (
                <Card>
              </Card>
              ): null}
        </Wrapper>
    </Container>
  )
}

export default Header
const Card = styled.div`
width: 100%;
height: 300px;
background-color: red;
position: absolute;
top: 80px;
right: 0;
`
const Icon = styled.div`
display: flex;
align-items: center;
color: #fff;
font-size: 30px;
cursor: pointer;

@media screen and (max-width: 768px) {
      display: flex;
}
display: none;
`
const ButtonHolder = styled.div`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const Wrap = styled.div`
    display: flex;
    align-items: center;
`
const Navs = styled.div`
    color: gray;
    margin-right: 35px;
    transition: all ease-in-out 350ms;
    cursor: pointer;
    &:hover{
        color: #fff;
    }
`
const NavHolder = styled.div`
    display: flex;
    align-items: center;
    margin-left: 20px;

    @media screen and (max-width: 768px) {
        display: none;
    }
`
const Holder = styled.div`
    display: flex;
    align-items: center;
    h1{
        color: #fff;
        margin-right: 15px;
        font-size: 20px;
    }
`
const Wrapper = styled.div`
    width: 95%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    position: relative;
`

const Container = styled.div`
    width: 100%;
    height: 80px;
    display: flex;
    background-color: #000;
    justify-content: center;
`