import React from 'react';
import MainContent from './components/MainContent';

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <MainContent />
    </div>
  );
};

export default App;