import React from 'react';

import Title from './components/title/title.component';
import Content from './components/content/content.component';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Title />
      <Content />
    </div>
  );
}

export default App;
