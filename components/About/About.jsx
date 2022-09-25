import { styled } from "../../stitches.config.ts";
import Image from "next/image";
import AboutUsImage from '../../assets/About_Us.png';

const AboutWrapper = styled("div", {
  display: "flex",
  marginLeft: '5vw',
  gap: '5vw',
  '@media screen and (max-width: 1000px)': {
    flexDirection: 'column',
  },
});

const AboutDescription = styled("div", {
  display: "flex",
  flexDirection: "column",
  width: '40vw',
  '@media screen and (max-width: 1000px)': {
    width: '70vw'
  },
});

const AboutTitleColor = styled("color", {
  color: "#EB9C5C",
});

const AboutBodyColor = styled("color", {
  color: "#fff",
});

const AboutUsImageWrapper = styled("div", {
  width: "30vw",
  pointerEvents: 'none',
  '@media screen and (max-width: 1000px)': {
    width: '70vw',
  },
});

const About = () => {
  return (
    <AboutWrapper>
      <AboutDescription>
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
      </AboutDescription>

      <AboutUsImageWrapper>
        <Image src={AboutUsImage} layout='responsive'/>
      </AboutUsImageWrapper>
    </AboutWrapper>
  );
};

export default About;
