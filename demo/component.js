import React from 'react';
import ImgIcon from '../src';

import IMG_BUY from './img/white/buy.png';
import IMG_SELL from './img/white/sell.png';

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
