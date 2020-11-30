import { Component } from 'react';

class Recipe extends Component {
  render() { 

    const { recipeName, calories, image } = this.props;
    return (
      <li className="recipe">
        <div className="info">
          <h2>{recipeName}</h2>
          <p>{calories.toFixed(0)}</p>
        </div>
        <img src={image} alt={recipeName} />
      </li>
    )
  }
}
export default Recipe;