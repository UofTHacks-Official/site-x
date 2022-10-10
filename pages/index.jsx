import React from 'react';

import { MainBackground,  MLHBanner} from '@components/atoms';
import { Layout } from '@components/molecules';
import { Hero, About, Sponsors } from '@components/sections';


export default function Home() {
  return (
    <>
      <MLHBanner />
      <MainBackground padded>
        <Layout>
            <Hero />
            <About />
            <Sponsors />
        </Layout>
      </MainBackground>
    </>
  );
}
