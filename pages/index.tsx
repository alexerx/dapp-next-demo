import type { NextPage } from 'next';
import { HomePageNav } from '../modules/navs/HomePageNav';
import { Footer } from '../modules/footers/Footer';
import { FeatureA } from '../modules/features/FeatureA';
import { HomeGuide } from '../modules/guides/HomeGuide';
import { FeatureB } from '../modules/features/FeatureB';

const Home: NextPage = () => {
  return (
    <>
      <HomePageNav />

      <HomeGuide />

      <FeatureB />
      <FeatureA />

      <Footer />
    </>
  );
};

export default Home;
