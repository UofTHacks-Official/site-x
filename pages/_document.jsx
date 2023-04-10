import NextDocument, { Html, Head, Main, NextScript } from 'next/document';
import FilsonProMediumOtf from "public/fonts/FilsonProMedium.otf";
import FilsonProMediumWoff from "public/fonts/FilsonProMedium.woff";
import FilsonProMediumWoff2 from "public/fonts/FilsonProMedium.woff2";
import PoppinsMedium from "public/fonts/Poppins-Medium.ttf";
import PoppinsRegular from "public/fonts/Poppins-Regular.ttf";

import { getCssText } from '~stitches';

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang={'en'}>
        <Head>
          <meta charSet="UTF-8" />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="title" content="UofTHacks 11" />
          <meta
            name="description"
            content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
          />
          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://www.uofthacks.com/" />
          <meta property="og:title" content="UofTHacks 11" />
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
          <meta property="twitter:title" content="UofTHacks 11" />
          <meta
            property="twitter:description"
            content="Join 500+ hackers for a great weekend of learning, building, and networking at University of Toronto's largest annual hackathon 💻"
          />
          <meta
            property="twitter:image"
            content="https://i.ibb.co/HNkxDpW/SEO-Photo.png"
          />

          {/* Preload fonts here */}
          <link
            rel="preload"
            href={FilsonProMediumOtf}
            as="font"
            type="font/otf"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href={FilsonProMediumWoff}
            as="font"
            type="font/woff"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={FilsonProMediumWoff2}
            as="font"
            type="font/woff2"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={PoppinsMedium}
            as="font"
            type="font/ttf"
            crossOrigin=""
          />
          <link
            rel="preload"
            href={PoppinsRegular}
            as="font"
            type="font/ttf"
            crossOrigin=""
          />

          <style
            id={'stitches'}
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}