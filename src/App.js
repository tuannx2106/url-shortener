import React from 'react';
import './scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import AdvancedStatisticsSection from './components/AdvancedStatisticsSection'
import MainVisualSection from './components/MainVisualSection.js'

function App() {
  return (
    <div className="App">
      <Header />
      <MainVisualSection />
      <AdvancedStatisticsSection />
      <Footer />
    </div>
  );
}

export default App;
