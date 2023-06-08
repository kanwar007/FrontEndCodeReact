import React from 'react';
import PageTitle from './components/PageTitle';
import AppHeader from './components/AppHeader';
import syles from './styles/modules/app.module.scss'


function App() {
  return (
    <div className="container">
      <PageTitle>Todo List Display</PageTitle>
      <div className={syles.app__wrapper}>
        <AppHeader></AppHeader>
      </div>
      
    </div>
  );
}

export default App;
