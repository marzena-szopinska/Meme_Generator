import React from 'react';
import Header from './components/Header';
import Meme_Generator from './components/Meme_Generator';

class App extends React.Component {
  render() {
    return (
      <div className='container'>
        <Header />
        <Meme_Generator />
      </div>
    );
  }
}

export default App;
