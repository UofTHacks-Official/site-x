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
  background: image.starsOnly,
  zIndex: "-1"
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
  backgroundImage: vectors.stroke1,
})

const TopLeftGlow = styled("div", {
  position: 'fixed',
  top: '-95vh',
  left: '-450px',
  height: '1200px',
  width: '1200px',
  background: 'radial-gradient(circle, rgba(180,135,238,1) 0%, rgba(180,135,238,1) 50%, rgba(180,135,238,0) 65%)',
  opacity: '0.06',
})

const TopRightGlow = styled("div", {
  position: 'fixed',
  top: '-55vh',
  left: '60vw',
  right: '0px',
  bottom: '0px',
  height: '1200px',
  width: '1200px',
  background: 'radial-gradient(circle, rgba(94,167,213,1) 0%, rgba(94,167,213,1) 50%, rgba(0,212,255,0) 65%)',
  opacity: '0.06',
});

const BottomLeftGlow = styled("div", {
  position: 'fixed',
  top: '60vh',
  left: '-450px',
  right: '0px',
  bottom: '0px',
  height: '1200px',
  width: '1200px',
  background: 'radial-gradient(circle, rgba(235,156,92,1) 0%, rgba(235,156,92,1) 50%, rgba(235,156,92,0) 65%)',
  opacity: '0.06',
});

const BottomRightGlow = styled("div", {
  position: 'fixed',
  top: '60vh',
  left: '50vw',
  right: '0px',
  bottom: '0px',
  height: '1200px',
  width: '1200px',
  background: 'radial-gradient(circle, rgba(223,125,125,1) 0%, rgba(223,125,125,1) 50%, rgba(223,125,125,0) 65%)',
  opacity: '0.06',
});

/**
 * 
 * Background with Stars and Lights vectors
 * 
 */
export const MainBackground = (props) => {
  return (
    <StarsWrapper>
      <Wrapper>
        <TopLeftGlow />
        <TopRightGlow />
        <BottomLeftGlow />
        <BottomRightGlow />
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