import { styled, css } from "~stitches";
import { Link } from "@components/atoms";
import Logo from '@assets/OfficialLogoBG.svg';
import Image from 'next/image';
import { BrowserView, MobileView } from 'react-device-detect';
import { Squash as Hamburger } from 'hamburger-react';

const Wrapper = styled("navbar", css({
  position: "fixed",
  width: "100%",
  boxSizing: "border-box",
  height: "80px",
  background: "rgb(13, 13, 13)",
  zIndex: "10",
  borderBottom: '1px solid',
  borderImageSource: "linear-gradient(91.6deg, #DF7D7D 6.77%, #B487EE 57.81%, #5EA7D5 88.54%)",
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

const LinksMobile = styled("div", ({
  position: "absolute",
  alignItems: "center",
  justifyContent: "center",
  flexDirection: "column",
  width: "100%",
  display: "none",
  gap: "10px",
  top: "60px",
}));

const LogoDiv = styled("div", ({
  position: 'absolute',
  maxWidth: '80px',
  maxHeight: '80px',
  minWidth: '60px',
  minHeight: '60px',
  width: "20%",
  left: '10%',
  top: '0px',
}));

const HamburgerWrapper = styled("div", ({
  position: 'absolute',
  right: '124px',
  top: '15px',
}));

export const Navbar = (props) => {
  function changeNavBar(toggled) {
    if (toggled) {
      document.getElementById("navbar").style.height = '250px';
      document.getElementById("mobile-links").style.display = 'flex';
    } else {
      document.getElementById("navbar").style.height = '80px';
      document.getElementById("mobile-links").style.display = 'none';
    }
  }

  return (
    <Wrapper id="navbar">
      <LogoDiv>
        <Image src={Logo} alt='official logo'></Image>
      </LogoDiv>
      <BrowserView>
        <Links id="links">
          <Link href="https://forms.gle/2AjFu2TzLVFSoDPo7">Mentor</Link>
          <Link href="https://forms.gle/cXhzrzDgrGD83arR8">Volunteer</Link>
          <Link href="#About" target="_self">About</Link>
          <Link href="#Sponsors" target="_self">Sponsors</Link>
          <Link href="#FAQ" target="_self">FAQ</Link>
        </Links>
      </BrowserView>
      <MobileView>
        <HamburgerWrapper>
          <Hamburger rounded size={30} zIndex="10000" onToggle={toggled => { changeNavBar(toggled); }} />
        </HamburgerWrapper>
        <LinksMobile id='mobile-links'>
          <Link href="https://forms.gle/2AjFu2TzLVFSoDPo7">Mentor</Link>
          <Link href="https://forms.gle/cXhzrzDgrGD83arR8">Volunteer</Link>
          <Link href="#About" target="_self">About</Link>
          <Link href="#Sponsors" target="_self">Sponsors</Link>
          <Link href="#FAQ" target="_self">FAQ</Link>
        </LinksMobile>
      </MobileView>
    </Wrapper>
  );
};