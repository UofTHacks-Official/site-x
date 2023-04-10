import React from 'react';

import { styled, css } from "~stitches";

const ButtonStyles = css({
  fontFamily: "$filsonPro",
  fontSize: "$regular",
  color: '$alternate-text',
  variants: {
    type: {
      main: {
        color: "pink"
      },
      cta: {
        color: "blue"
      }
    }
  }
})

const StyledButton = styled("button", ButtonStyles);

export const Button = (props) => {
  return (
    <StyledButton 
      arial-label={props.title}
      type={props.type}
    >{props.children || props.title}</StyledButton>
  );
}


export const ApplyButton = (props) => {

  const StyledApply = styled("a", css({
      display: 'flex',
      position: 'relative',
      color: props.color == null ? "$primary-text" : props.color,
      textDecoration: "none",
      fontFamily: "$poppins",
      fontSize: "16px",
      width: "216px",
      height: "46px",
      border: "2px solid transparent",
      backgroundImage: "linear-gradient(rgba(25, 23, 30, 0.9), rgba(25, 23, 30, 0.9)), radial-gradient(circle at top left, #B487EE,#5EA7D5)",
      backgroundOrigin: "border-box",
      backgroundClip: "padding-box, border-box",
      borderRadius: "15px",
      fontWeight: "600",
      cursor: 'pointer',
      transition: "color 0.2s ease-in",
      justifyContent: "center",
      alignItems: "center",
      zIndex: '1',

      '&:hover' : {
        color: props.color == null ? "$tertiary" : props.color,
        cursor: 'pointer',
        transition: "color 0.2s ease-out",
      },
  }));

  return (
    // <StyledApply href="https://apply.uofthacks.com/">Apply Now →</StyledApply>
    <StyledApply href="/apply">Apply Now →</StyledApply>
  );
};