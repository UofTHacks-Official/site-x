import { styled } from "~stitches";

const image = {
  starWithLights: "url('/img/bg/StarsWithLights.svg')",
  starsOnly: "url('/img/bg/StarsOnly.svg')",
  lightsOnly: "url('/img/bg/LightsOnly.svg')",
}

const vectors = {
  stroke1: "url('/img/bg/art/stroke1.svg')",
}

const Wrapper = styled("div", {
  minWidth: '100%',
  minHeight: '100%',
  background: '#0D0D0D',
  backgroundRepeat: "repeat",
  margin: "0",
  backgroundSize: "cover",
  variants: {
    bg: {
      main: {
        backgroundImage: image.starWithLights
      },
      starsOnly: {
        backgroundImage: image.starsOnly,
      }
    },
  },
  defaultVariants: {
    bg: "main"
  }
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
    <Wrapper>
      <ArtWrapper></ArtWrapper>
      {props.padded ? <Padding>{props.children}</Padding> : props.children}
    </Wrapper>
  )
}

export const StarsBackground = (props) => {
  return (
      <Wrapper bg="starsOnly">
        {props.padded ? <Padding>{props.children}</Padding> : props.children}
      </Wrapper>
  )
}