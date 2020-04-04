import React from 'react';
import './scss/main.scss'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <Footer />
      <div className="container" style={{ marginTop: '80px' }}>
        <div className="card">
          <figure className="card__img">
            <img src="" alt="logo" />
          </figure>
          <h3 className="headline headline--lg card__header">Brand Recognition</h3>
          <p className="card__body">Boost your brand recognition with each click. Generic links don’t mean a thing.Branded links help instil confidence in your content.</p>
        </div>
      </div>
    </div>
  );
}

export default App;
