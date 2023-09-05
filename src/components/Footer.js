import React from 'react'
import styled from 'styled-components'

function Footer() {
  return (
    <div>
        <Description>
        <CTALogoOne src="/images/logo.1a56f51c764022ee769c91d894d44326.svg " />
        <div>PrivacyPolicy Subscriber Agreement Your US State Privacy Rights</div><div>Do not sell or share my personal information Children's Online Privacy Policy</div>
        <div> © Disney. All Rights Reserved.</div>
         </Description>
    </div>
  )
}

export default Footer


    const CTALogoOne = styled.img`
        height:55px;
        align: center;
`

const Description = styled.p`
    font-size: 11px;
    letter-spacing: 1.5px;
    text-align: center;
    line-height: 1.5;
    word-spacing: 1rem;

`