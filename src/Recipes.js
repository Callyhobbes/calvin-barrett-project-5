import { Component } from 'react';

class Recipe extends Component {

  render() { 

    const { recipeName, calories, image, carbs, protein, fat, url, amount } = this.props;
    return (
      <li className="recipe">
        <h2>{recipeName}</h2>
        <div className="core-content">
          <div className="info">
            <p>Calories: {calories.toFixed(0)}</p>
            <p>Carbs: {carbs.toFixed(0)}g</p>
            <p>Protein: {protein.toFixed(0)}g</p>
            <p>Fat: {fat.toFixed(0)}g</p>
            <p>Serves: {amount} {amount > 1 ? "people" : "person"}</p>
          </div>
          <img src={image} alt={recipeName} />
        </div>
        <div className="re-direct">
          <a href={url} target="_blank" rel="noreferrer">Instructions</a>
        </div>
      </li>
    )
  }
}
export default Recipe;