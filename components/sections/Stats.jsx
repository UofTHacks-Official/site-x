import {Header} from '@components/atoms';
import React from 'react';
import {styled, css} from "~stitches";

const Wrapper = styled('section', css({
  maxWidth: "100%",
  marginBottom: "10rem",
}));

const Container = styled('div', css({
  display: "flex",
  justifyContent: "space-between",
  '@bp800': {
    flexDirection: "column",
    alignItems: "center",
    gap: "1rem",
  }
}))


const StatContainer = styled('div', css({
  padding: "1rem 2rem",
  textDecoration: "none",
  backgroundColor: "#171717",
  transition: "all 0.3s ease 0s",
  borderRadius: "20px",
  margin: 0,
  '@bp800': {
    width: "fit-content",
  }
}));

const StatBorder = styled('div', css({
padding: "1px",
margin: "0",
border: "1px solid transparent",
borderRadius: "20px",
  backgroundImage: "linear-gradient(91.6deg, #DF7D7D 6.77%, #B487EE 57.81%, #5EA7D5 88.54%);",
    backgroundOrigin: "border-box",
    backgroundClip: "padding-box, border-box",
    overflow: "hidden",
    '@bp800': {
      width: "fit-content",
    }
}));

const Top = styled('p', css({
  margin: 0,
  fontSize: "clamp(40px,3.5vw,3.5vw)",
  color: "$primary-text",
}))

const Bottom = styled('p', css({
  margin: 0,
  fontSize: "clamp(1rem,2vw,2vw)",
  color: "$primary-text",
}))

const Stat = (props) => {
  return(
    <StatBorder>
      <StatContainer>
        {props.children}
      </StatContainer>
    </StatBorder>
  )
}

const Stats = (props) => {

  return (
    <Wrapper>
      <Header>Last Year's Stats</Header>
      <Container>
        <Stat>
          <Top>600+</Top>
          <Bottom>Hackers</Bottom>
        </Stat>
        <Stat>
          <Top>$10k+</Top>
          <Bottom>In prizes</Bottom>
        </Stat>
        <Stat>
          <Top>20+</Top>
          <Bottom>Workshops</Bottom>
        </Stat>
        <Stat>
          <Top>70+</Top>
          <Bottom>Projects</Bottom>
        </Stat>
      </Container>
    </Wrapper>
  )
};
export default Stats;