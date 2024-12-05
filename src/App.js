import MainSection from './components/MainSection/MainSection';
import Menu from './components/Menu/Menu';
import React from 'react';
import WorkList from './components/Works/WorkList';
import Biography from './components/Biography/Biography';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <React.Fragment>
      <Menu />
      <MainSection />
      <WorkList />
      <Biography />
      <Footer />
    </React.Fragment>
  );
}

export default App;
