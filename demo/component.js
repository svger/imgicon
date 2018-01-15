import React from 'react';
import ImgIcon from '../src';

const IMG_BUY = require('./img/white/buy.png');
const IMG_SELL = require('./img/white/sell.png');

class App extends React.Component {

  render() {
    return (
      <div>
        <h1>ImgIcon</h1>
        <div>
          <ImgIcon img={IMG_BUY} />
          <ImgIcon img={IMG_SELL} />
        </div>
      </div>
    );
  }
}

export default App;
