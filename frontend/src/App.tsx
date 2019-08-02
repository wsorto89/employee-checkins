import React, { lazy, Suspense } from 'react';

import './App.css';

const Title = lazy(() => import('./components/title/title.component'));
const Content = lazy(() => import('./components/content/content.component'));

const App: React.FC = () => {
  return (
    <div className="App">
      <Suspense fallback={<div>Loading...</div>}>
        <Title />
        <Content />
      </Suspense>
    </div>
  );
}

export default App;
