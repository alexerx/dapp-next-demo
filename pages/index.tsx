import type { NextPage } from 'next';
import { Footer } from '../modules/common/footers/Footer';
import { FeatureA } from '../modules/home/features/FeatureA';
import { FeatureB } from '../modules/home/features/FeatureB';
import { Intro } from '../modules/home/Intro';
import { Nav } from '../modules/home/Nav';

const Home: NextPage = () => {
  return (
    <>
      <Nav />

      <Intro />

      <FeatureB />
      <FeatureA />

      <Footer />
    </>
  );
};

export default Home;
