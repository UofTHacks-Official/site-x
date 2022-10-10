import Image from "next/image";
import { styled, css } from "~stitches";

import { Body, Title } from "@components/atoms";

import AboutUsImg from "@assets/AboutUs.png";

const Wrapper = styled('section', {
  minHeight: "100vh",
  width: "100%",
})

const ContentWrapper = styled('div', css({
  display: 'flex',
  maxWidth: "1440px",
  flexFlow: "row wrap",
  gap: "5vw",
  '@bp1': {
    "& div": {
      "flexBasis": "100%",
    }
  }
}));

const ImageWrapper = styled('div', css({
  position: "relative",
  maxWidth: "562px",
  maxHeight: "309px",
  minWidth: "260px",
  height: "309px",
  flex: "1",
  overflow: "hidden",
  marginLeft: "auto",
  marginRight: "auto",
  transition: "0.2s all",
  "& img": {
    boxShadow: "0px 8px 24px 2px rgba(0, 0, 0, 0.25)",
    borderRadius: "10px",
  },
  "&:hover": {
    transform: "scale(1.05)",
    transition: "0.2s all",
  }
}));

const TextWrapper = styled('div', css({
  display: "flex",
  flexDirection: "column",
  minWidth: "260px",
  flex: "1"
}));

export const About = (props) => {
  return(
    <Wrapper>
      <Title>About Us</Title>
      <ContentWrapper>
        <TextWrapper>
          <Body>
          Canada's first student-run hackathon, UofTHacks, is back for its 10th consecutive year on January 20-22, 2023!
          </Body>
          <Body>
          To celebrate this milestone, we will be even bigger and better than ever before! Over 600 innovators, developers, designers, and entrepreneurs will participate in a 36-hour competition entirely in-person, where they will build unique and impactful projects.
          </Body>
          <Body>
          We strive to provide a space where hackers can discover their passions, and we want your support in helping these hackers shape the future!
          </Body>
        </TextWrapper>
        <ImageWrapper>
          <Image src={AboutUsImg} layout="fill" objectFit='contain' />
        </ImageWrapper>
      </ContentWrapper>
    </Wrapper>
  )
}