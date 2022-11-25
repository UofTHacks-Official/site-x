import React from 'react';

import { MainBackground,  MLHBanner} from '@components/atoms';
import { Layout } from '@components/molecules';
import { Hero, About, Sponsors } from '@components/sections';
import FAQ from '@components/sections/FAQ/FAQ';


export default function Home() {
  return (
    <>
    <title>UofTHacks X</title>
    <meta charSet="UTF-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <title>UofTHacks X</title>
          <meta name="title" content="UofTHacks X" />
          <meta
            name="description"
            content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.uofthacks.com/" />
          <meta property="og:title" content="UofTHacks X Application" />
          <meta
            property="og:description"
            content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
          />
          <meta
            property="og:image"
            content="https://i.ibb.co/HNkxDpW/SEO-Photo.png"
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://www.uofthacks.com/" />
          <meta property="twitter:title" content="UofTHacks X" />
          <meta
            property="twitter:description"
            content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/HNkxDpW/SEO-Photo.png"
          />
      <MLHBanner />
      <MainBackground padded>
        <Layout>
            <Hero />
            <About />
            <Sponsors />
            <FAQ/>
        </Layout>
      </MainBackground>
    </>
  );
}
