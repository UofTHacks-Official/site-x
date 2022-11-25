import { styled } from "~stitches";

const image = {
  starWithLights: "url('/img/bg/StarsWithLights.svg') no-repeat fixed",
  starsOnly: "url('/img/bg/StarsOnly.svg') #0D0D0D repeat",
  lightsOnly: "url('/img/bg/LightsOnly.svg') no-repeat fixed",
}

const vectors = {
  stroke1: "url('/img/bg/art/stroke1.svg')",
}

const Wrapper = styled("div", {
  minWidth: '100%',
  minHeight: '100%',
  margin: "0",
  variants: {
    bg: {
      main: {
        background: image.lightsOnly
      },
      starsOnly: {
        background: '#0D0D0D',
      }
    },
  },
  defaultVariants: {
    bg: "main"
  }
})

const StarsWrapper = styled("div", {
  background: image.starsOnly
})

const Padding = styled("main", {
  padding: "0 12.76vw",
})

const ArtWrapper = styled("div", {
  position: "absolute",
  top: "0",
  left: "0",
  right: "0",
  minHeight: "120%",
  height: "auto",
  width: "100%",
  pointerEvents: "none",
  backgroundSize: "cover",
  backgroundImage: vectors.stroke1
})

/**
 * 
 * Background with Stars and Lights vectors
 * 
 */
export const MainBackground = (props) => {
  return (
    <StarsWrapper>
      <Wrapper>
        <ArtWrapper></ArtWrapper>
        {props.padded ? <Padding>{props.children}</Padding> : props.children}
      </Wrapper>
    </StarsWrapper>
  )
}

export const StarsBackground = (props) => {
  return (
      <Wrapper bg="starsOnly">
        {props.padded ? <Padding>{props.children}</Padding> : props.children}
      </Wrapper>
  )
}