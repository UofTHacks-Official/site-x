import React from "react";
import Card from "./cards/Card";
import {styled, css} from "~stitches";
import { Title } from "@components/atoms";

const Margin = styled('section', css({
  margin: "30rem 0 20rem 0",
  scrollMarginTop: "12vh",
}));

const Wrapper = styled('section', css({
  minHeight: "100vh",
  width: "100%",
}));

const FAQs = styled('section', css({
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100%",
    minWidth: "100%",
    padding: "5rem 0",
    margin: "0",
    borderRadius: "10px",
    // background:"linear-gradient(101.99deg, rgba(249, 249, 249, 0.5) 5.49%, rgba(249, 249, 249, 0.3) 100%)"
}));

// const FAQList = styled('div', css({
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     width: "100%",
//     margin: "auto"
// }));

// const Header = styled('div', css({
//     paddingTop: "60px",
//     fontFamily: "Filson Pro",
//     fontWeight: "normal",
//     color: "#FFA500",
//     textAlign: "center",
//     fontSize: "3rem",
//     marginTop: "0"
// }));


const FAQ = (props) => {
  const faqs = require("./faqs.json");

  const faqList = faqs.map((faq, i) => (
    <Card key={i} title={faq.question} paragraph={faq.answer} />
  ));

  // If you want to add a hyperlink, you need to manually add a card component below.
  const manualCards = (
    <>
    <Card 
        title="What are your COVID-19 regulations?"
        paragraph={
            <span>
                Our policy will reflect the&nbsp; 
                <a href="https://www.utoronto.ca/utogether/covid-19-planning-update">University of Toronto&#39;s</a> 
                &nbsp;COVID protocols. The focus will be to ensure the event is a safe environment for all participants. 
                We will have hand sanitizer stations, masks and disinfectant wipes throughout the venue.
            </span>
        }>
        
    </Card>
      <Card
        title="I still have a question..."
        paragraph={
          <span>
            We&#39;d be happy to help! You can send us a direct message on&nbsp; 
            <a href="https://www.instagram.com/uofthacks/?hl=en">Instagram</a>
            &nbsp;or <a href="https://twitter.com/uofthacks?lang=en">Twitter</a>&nbsp; - @uofthacks. 
            Alternatively, you can send the inquiry over to&nbsp;
            <a href="mailto:official@uofthacks.com">official@uofthacks.com</a>
            &nbsp;and we&#39;ll get back to you as soon as possible.
          </span>
        }
      />
    </>
  );

  return (
    <Margin id="FAQ">
      <Title align="center">FAQs</Title>
      <Wrapper>
        <div id="faq">
          <FAQs>
            {faqList}
            {manualCards}
          </FAQs>
        </div>
      </Wrapper>
    </Margin>
  );
};

export default FAQ;
