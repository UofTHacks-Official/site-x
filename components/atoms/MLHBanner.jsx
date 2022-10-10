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

const Wrapper = styled('svg', css({
  width: "100%",
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundImage: "url('https://s3.amazonaws.com/logged-assets/trust-badge/2023/mlh-trust-badge-2023-blue.svg')",
}))


export const MLHBanner = (props) => {
  return (
    <MLH 
      id="mlh-trust-badge" 
      href="https://mlh.io/na?utm_source=na-hackathon&utm_medium=TrustBadge&utm_campaign=2023-season&utm_content=blue" 
      target="_blank"
    >
      <Wrapper />
    </MLH>
  )
}