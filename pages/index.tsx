import type { NextPage } from 'next';
import { Footer } from '../modules/footers/Footer';
import { HomeGuide } from '../modules/guides/HomeGuide';
import { FeatureA } from '../modules/home/features/FeatureA';
import { FeatureB } from '../modules/home/features/FeatureB';
import { HomePageNav } from '../modules/navs/HomePageNav';

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
