import React, { Component } from 'react';
import './App.scss';
import TutorialHeader from './components/TutorialHeader';
import { Route, Routes } from 'react-router-dom';
import LandingPage from './content/LandingPage';
import RepoPage from './content/RepoPage';
import { Content, Theme } from '@carbon/react';

class App extends Component {
  render() {
    return (
      <>
       <Theme theme="g100">
        <TutorialHeader />
       </Theme>
        <Content>
        <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route path="/repos" element={<RepoPage/>} />
        </Routes>
        </Content>
      </>
    );
  }
}
export default App;

