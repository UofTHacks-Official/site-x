import { styled, css } from "~stitches";
import { Link } from "@components/atoms";


const Wrapper = styled("navbar", css({
    position: "absolute",
    width: "100%",
    boxSizing: "border-box",
    height: "80px",
    background: "rgba(13, 13, 13, 0.9)",
    zIndex:"10000",
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
  }))


export const Navbar = (props) => {
  return(
    <Wrapper>
      <Links>
        <Link href="">Mentor</Link>
        <Link href="">Volunteer</Link>
        <Link href="">About</Link>
        <Link href="">Sponsors</Link>
        <Link href="">FAQ</Link>
      </Links>
    </Wrapper>
  );
};