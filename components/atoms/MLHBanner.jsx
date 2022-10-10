import React from 'react'
import { styled, css } from "~stitches";

const MLH = styled('a', css({
  display:"block",
  maxWidth:"100px",
  minWidth:"60px",
  position:"absolute",
  right:"25px",
  top:"0",
  width:"10%",
  zIndex:"10000"
}));


export const MLHBanner = (props) => {
  return (
    <MLH 
      id="mlh-trust-badge" 
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=blue" 
      target="_blank"
    >
      <img 
        src="https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-blue.svg" 
        alt="Major League Hacking 2023 Hackathon Season" 
        style={{width:"100%"}} 
      />
    </MLH>
  )
}