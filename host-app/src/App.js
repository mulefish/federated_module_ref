import React, { Suspense, lazy } from 'react';

const Dinosaur = lazy(() => import('dinosaur/HelloWorld'));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<div>Loading...</div>}>
          <Dinosaur />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
