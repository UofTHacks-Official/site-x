import { styled } from "../../stitches.config.ts";
import Image from "next/image";

const AboutWrapper = styled("div", {
  position: "absolute",
  left: "16.24%",
  right: "40.06%",
  top: "60%",
  pointerEvents: "none",
});

const AboutTitleColor = styled("color", {
  color: "$orange",
});

const AboutBodyColor = styled("color", {
  color: "$white",
});

const About = () => {
  return (
    <AboutWrapper>
      <AboutTitleColor>
        <h1>About us</h1>
      </AboutTitleColor>
      <AboutBodyColor>
        <p>
          Canada's first student-run hackathon, UofTHacks is back for its 10th
          consecutive year on January 20-22, 2023!
        </p>
        <p>
          To celebrate this milestone, we will be even bigger and better than
          ever before! Over 600 innovators, developers, designers, and
          entrepreneurs will participate in a 36-hour competition entirely
          in-person, where they will build unique and impactful projects.
        </p>
        <p>
          We strive to provide a space where hackers can discover their
          passions, and we want your support in helping these hackers shape the
          future!
        </p>
      </AboutBodyColor>
    </AboutWrapper>
  );
};

export default About;
