import { styled, css } from "~stitches";

import { Footer } from "@components/molecules";

export const Layout = (props) => {

  return (
    <>
      {props.children}
      <Footer />
    </>
  );
}