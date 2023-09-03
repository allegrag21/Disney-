import React from 'react'
import styled from 'styled-components'


function Login() {
    return (
        <Container>
            <CTA>
                <CTALogoOne src="/images/cta-logo-one.svg" />
                <SignUp>GET ALL THREE</SignUp>
                <Pricedescription>
                        <span className="medium"> Starting at</span>
                        <span className="h5"> $12.99</span>
                        <span className="medium">/month</span>
                </Pricedescription>
                <Description>
                All of these and more now streaming on Disney+, Hulu, and ESPN+ with the Disney Bundle.
                </Description>
                <CTALogoTwo src="/images/cta-logo-two.png" />
            </CTA>
        </Container>
    )
}

export default Login


const Container = styled.div`
    position: relative;
    height: calc(100vh - 70px);
    display: flex;
    align-items: top;
    justify-content: center;
    


    &:before {
        background-position: top;
        background-size: cover;
        background-repeat: no-repeat;
        background-image: url("/images/login-background.jpg");      
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        opacity: 0.7;
        z-index: -1;
    }

`

const CTA = styled.div`
    max-width: 650px;
    padding: 80px 40px;
    width: 90%;
    display: flex;
    flex-direction: column;
    margin-top: 100px;
    align-items: center;
`

const CTALogoOne = styled.img`
`

const SignUp = styled.a`
    width: 100%;
    background-color: #0063e5;
    font-weight: bold;
    padding: 17px 0;
    color: #f9f9f9;
    border-radius: 4px;
    text-align: center;
    font-size: 18px;
    cursor: pointer;
    transition: all 250ms;
    letter-spacing: 1.5px;
    margin-top: 8px;
    margin-bottom: 12px;

    &:hover {
        background: #0483ee;
    }

`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;

`
const Pricedescription = styled.p`
font-family: Avenir, sans-serif
font-size: 16px
font-style: normal
font-variant-caps: normal
font-variant-east-asian: normal
font-variant-ligatures: normal
font-variant-numeric: normal
font-weight: 400

`

const CTALogoTwo = styled.img`
    width: 90%;
`