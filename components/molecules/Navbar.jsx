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
    border:'1px solid',
    borderColor:'rgba(223, 125, 125, 1)'
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
  left: '180px',
  top: '0px',
}));

export const Navbar = (props) => {
  return(
    <Wrapper>
      <LogoDiv>
        <Image src={Logo} alt='official logo'></Image>
      </LogoDiv>
      <Links>
        <Link href="">Mentor</Link>
        <Link href="">Volunteer</Link>
        <Link href="#About">About</Link>
        <Link href="#Sponsors">Sponsors</Link>
        <Link href="#FAQ">FAQ</Link>
      </Links>
    </Wrapper>
  );
};