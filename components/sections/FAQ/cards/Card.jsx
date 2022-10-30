import React from "react";
import {styled, css} from "~stitches";

const Wrapper = styled('section', css({
    display: "block",
    margin: "1rem",
    padding: "1.5rem",
    textAlign: "left",
    color: "#000000",
    textDecoration: "none",
    border: "2px solid #eaeaea",
    borderRadius: "10px",
    minHeight: "350px",
    maxWidth: "70%",
    width: "25rem",
    transition: "all 0.3s ease 0s",
    "&:hover": {
      transform: "scale(1.05)",
    }
}));

const Title = styled('div', css({
    fontFamily: "Filson Pro",
    fontWeight: "bold",
    color: "#000000",
    margin: "0 0 1rem 0",
    fontSize: "1.3rem"
}));

const Paragraph = styled('div', css({
    fontFamily: "Filson Pro",
    fontWeight: "normal",
    color: "#FFFFFF",
    margin: "0",
    fontSize: "1,1rem",
    lineHeight: "1.5",
}))


const Card = (props) => {
  return (
    <Wrapper>
      <Title>{props.title}</Title>
      <Paragraph>{props.paragraph}</Paragraph>
    </Wrapper>
  );
};

export default Card;
