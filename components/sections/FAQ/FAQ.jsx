import React from "react";
import Card from "./cards/Card";
import {styled, css} from "~stitches";


const Wrapper = styled('section', css({
    display: "fle",
    minHeight: "100%",
    minWidth: "100%",
    padding: "0",
    paddingTop: "2rem",
    margin: "0",
    background:"linear-gradient(101.99deg, rgba(249, 249, 249, 0.5) 5.49%, rgba(249, 249, 249, 0.3) 100%)"
}));

const FAQList = styled('div', css({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    width: "100%",
    margin: "auto"
}));

const Header = styled('div', css({
    paddingTop: "60px",
    fontFamily: "Filson Pro",
    fontWeight: "normal",
    color: "#FFA500",
    textAlign: "center",
    fontSize: "3rem",
    marginTop: "0"
}));


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
                Our policy will reflect the <a href="https://www.utoronto.ca/utogether/covid-19-planning-update">University of Toronto’s</a> COVID protocols. The focus will be to ensure the event is a safe environment for all participants. We will have hand sanitizer stations, masks and disinfectant wipes throughout the venue.
            </span>
        }>
        
    </Card>
      <Card
        title="I still have a question..."
        paragraph={
          <span>
            We’d be happy to help! You can send us a direct message on Instagram or Twitter - @uofthacks. Alternatively, you can send the inquiry over to official@uofthacks.ca and we’ll get back to you as soon as possible.
          </span>
        }
      />
    </>
  );

  return (
    <Wrapper>
      <div id="faq">
        <Header>Frequently Asked Questions</Header>
        <FAQList>
          {faqList}
          {manualCards}
        </FAQList>
      </div>
    </Wrapper>
  );
};

export default FAQ;
