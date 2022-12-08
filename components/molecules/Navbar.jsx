import { styled, css } from "~stitches";
import { Link } from "@components/atoms";
import Logo from '@assets/OfficialLogoBG.svg';
import Image from 'next/image';


const Wrapper = styled("navbar", css({
    position: "absolute",
    width: "100%",
    boxSizing: "border-box",
    height: "80px",
    background: "rgba(13, 13, 13, 0.9)",
    zIndex:"10000",
    borderBottom:'1px solid',
    borderImageSource:"linear-gradient(91.6deg, #DF7D7D 6.77%, #B487EE 57.81%, #5EA7D5 88.54%)",
    borderImageSlice: 1,
}));

const Links = styled("div", css({
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    gap: "30px",
    padding: "0px",
    gap: "41px",
    flexDirection: "row",
    position: "absolute",
    height: "24px",
    right: "245px",
    top: "28px",
}));

const LogoDiv = styled("div", ({
  position: 'absolute',
  width: '80px',
  height: '80px',
  left: '10%',
  top: '0px',
}));

export const Navbar = (props) => {
  return(
    <Wrapper>
      <LogoDiv>
        <Image src={Logo} alt='official logo'></Image>
      </LogoDiv>
      <Links>
        <Link href="https://forms.gle/2AjFu2TzLVFSoDPo7">Mentor</Link>
        {/* <Link href="">Volunteer</Link> */}
        <a href="#About">About</a>
        <a href="#Sponsors">Sponsors</a>
        <a href="#FAQ">FAQ</a>
      </Links>
    </Wrapper>
  );
};