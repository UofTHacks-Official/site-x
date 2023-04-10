import { styled, css } from "~stitches";
import { Subtitle, DisplayText, Body, ApplyButton } from "@components/atoms";

const Wrapper = styled('div', {
  display: "flex",
  paddingTop: "25vh",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
  zIndex: "10",
})

export const Hero = (props) => {
  return(
    <Wrapper>
      <Subtitle>
        TBD&nbsp;&nbsp;|
        <span
          style={{'color': '#DF7D7D'}}
        >
        &nbsp;&nbsp;Toronto, ON.
        </span>
      </Subtitle>
      <DisplayText>UofTHacks 11</DisplayText>
      <Body size="large">Interested in joining the organizing team?<span style ={{fontSize: "1rem"}}></span></Body>
      <ApplyButton/>
      <Body><a href='mailto:sponsors@uofthacks.com' style={{color: "#ffff", "textDecoration": "underline"}}>Interested in sponsoring?</a></Body>
    </Wrapper>
  )
}