import React, { Suspense } from 'react';
import Title from '../components/Title';
const GameBack = React.lazy(() => import('../components/GameBack'));
const WorkHome = React.lazy(() => import('../components/WorkComponents'));
const AboutHome = React.lazy(() => import('../components/AboutComponents'));
import ContactHome from '../components/ContactComponents';

export default function HomePage() {
  return (
    <div id="main" role="main">
      <div id="game-back-container" className="game-back-container">
        <Title
          aria-label="CREATE, INNOVATE, STAND OUT"
          className="title-game"
          id="title-game"
          show={true}
          delay={0}>
          CREATE, INNOVATE, STAND OUT
        </Title>
        <Suspense fallback={null}>
          <GameBack />
        </Suspense>
      </div>
      <Suspense fallback={null}>
        <AboutHome />
      </Suspense>
      <Suspense fallback={null}>
        <WorkHome />
      </Suspense>
      <ContactHome />
    </div>
  );
}
