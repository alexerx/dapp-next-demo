import type { NextPage } from 'next';
import { FeatureA } from '../modules/home/features/FeatureA';
import { FeatureB } from '../modules/home/features/FeatureB';
import { Intro } from '../modules/home/Intro';

const Home: NextPage = () => {
  return (
    <>
      <Intro />
      <FeatureB />
      <FeatureA />
    </>
  );
};

export default Home;
