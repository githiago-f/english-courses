import React from 'react';
import ReactDOM from 'react-dom';
import { ModuleCard } from './components/module-card';
import { Header } from './components/header';

import './index.scss';

const App = () => (
  <>
    <Header title="Módulos do curso"/>
    <div className="mx-auto container grid gap-1 auto-grid">
      <ModuleCard/>
      <ModuleCard/>
      <ModuleCard/>
      <ModuleCard/>
      <ModuleCard/>
      <ModuleCard/>
    </div>
  </>
);


ReactDOM.render(<App />, document.getElementById('app'));
