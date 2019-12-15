import React from 'react';
import {lang_gemoProds} from '../data/lang';

import '../styles/css/gemoProds.css';

class GemoProds extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currPlate: 5,
    }
  }

  setPlateStyle = (plateIndex, length) => {
    let plateStyle = {};

    if (plateIndex + 1 < this.state.currPlate) {
      plateStyle.left = `${plateIndex * 40 - 40}px`;
      plateStyle.transform = `rotateY(60deg)`;
      plateStyle.zIndex = `${plateIndex + 1}`;
    }

    if (plateIndex + 1 === this.state.currPlate) {
      plateStyle.left = `${plateIndex * 40 + 85}px`;
      plateStyle.zIndex = `${length}`;
    }

    if (plateIndex + 1 > this.state.currPlate) {
      plateStyle.left = `${plateIndex * 40 + 210}px`;
      plateStyle.transform = `rotateY(-60deg)`;
      plateStyle.zIndex = `${length - plateIndex}`;
      plateStyle.textAlign = `right`;
    }

    return plateStyle;
  }

  render() {
    const prods = lang_gemoProds.en;
    return (
      <div 
        className="platesWrap"
        style={{width: `${(prods.length - 3) * 40 + 240 + 210}px`, height: "300px"}}
      > 
        {prods.map((product, index) => (
          <div 
            key={product.title}
            onMouseOver={() => this.setState({ currPlate: index+1 })}
            className={`plate`}
            style={this.setPlateStyle(index, prods.length)}
          >
            {product.title}
          </div>
        ))}
      </div>
    );
  }
}

export default GemoProds;

