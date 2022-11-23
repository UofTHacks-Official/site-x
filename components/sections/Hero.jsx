import { styled, css } from "~stitches";
import Image from 'next/image';
import Link from 'next/link';
import { Subtitle, DisplayText, Body} from "@components/atoms";
import applyButton from '../../public/img/apply_now.svg'

const Wrapper = styled('div', {
  display: "flex",
  paddingTop: "25vh",
  flexDirection: "column",
  minHeight: "100vh",
  width: "100%",
})
const CursorActive = styled('div', {
  cursor: "pointer"
})

export const Hero = (props) => {
  return(
    <Wrapper>
      <Subtitle>
        January 20-22, 2023&nbsp;&nbsp;|
        <span
          style={{'color': '#DF7D7D'}}
        >
        &nbsp;&nbsp;Toronto, ON.
        </span>
      </Subtitle>
      <DisplayText>UofTHacks X</DisplayText>
      <Link href='http://my.uofthacks.com/register'>
        <CursorActive>
        <Image src={applyButton}
        alt='apply now button'
        ></Image>
        </CursorActive>
      </Link>
      <Body><a href='mailto:sponsors@uofthacks.com' style={{color: "#ffff", "textDecoration": "underline"}}>Interested in sponsoring?</a></Body>
    </Wrapper>
  )
}