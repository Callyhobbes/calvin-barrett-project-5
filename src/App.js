import { Component, Fragment } from 'react';
import video from './assets/chef-video.mp4';
import Recipes from './Recipes.js';
import axios from 'axios';
import textTransform from './textTransform.js';



class App extends Component {

  // initialize state within our constructor lifecycle method to keep track of the data which is changing within our application AKA the recipe response waiting on from our edamame API call
  constructor() {
    super();
    this.state = {
      recipes: [],
      userInput: ''
    }
  }
  
  componentDidMount() {
    textTransform();
  }

  handleInputChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    // prevent browser refresh
    e.preventDefault();

    // add results section after the search query
    this.showResults();

    // create variables for the API ID and API Key
    const appID = "f7c1ac0b";
    const appApiKey = "d9ba5cbc7d8628b0f4167221ac2027fa";

    // use axios to make API call but after the userInput has been updated
    axios({
      url: 'https://api.edamam.com/search',
      method: 'GET',
      responseType: 'json',
      params: {
        q: `${this.state.userInput}`,
        app_id: `${appID}`,
        app_key: `${appApiKey}`
      }
    }).then((food) => {
      // set the this.state to the queried items
      console.log(food.data);
      
      this.setState({
        recipes: food.data.hits
      })
      // smooth scroll to the results section
      this.smoothScroll('.results', 1500);
    })

  }

  // function to get the results section to appear only after the query is submitted
  showResults = () => {
    document.getElementById("results").classList.add("show");
    document.querySelector("footer").classList.add("show");
  }

  // function to scroll with an ease-in-out to submissions and clicks
  smoothScroll = (target, duration) => {
    // arguements set to make the function reuseable
    let location = document.querySelector(target);
    let targetPosition = location.getBoundingClientRect().top;
    let startPosition = window.pageYOffset;
    let distance = targetPosition - startPosition;
    let startTime = null;

    // set timer for the scroll
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      let timeElapsed = currentTime - startTime;
      let run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // heavy math to get the quadrating ease (accelerate to 50%, then decelerate)
    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
    requestAnimationFrame(animation);
  }

  returnTop = () => {
    this.smoothScroll("#start", 2000);
  }


  render() {
    return (
      <Fragment>
        <header id="start">
          <div className="banner">
            <video src={video} autoPlay="true" loop="true"></video>
            <div className="search">
              <h1>Anyone Can Cook</h1>
              <form action="" className="search-box" onSubmit={this.handleSubmit}>
                <label htmlFor="search" className="sr-only">Search Food</label>
                <input id="search" className="search-text" type="text" placeholder="Search a recipe" onChange={this.handleInputChange} value={this.state.userInput}/>
                <button className="search-button" value="submit"><i className="fas fa-carrot"></i></button>
              </form>
            </div>
            <div className="overlay"></div>
          </div>
        </header>

        <section className="results" id="results">
          <div className="wrapper">
            <ul className="recipe-list">
            {
              this.state.recipes.map((meal, index) => {
                return(
                  <Recipes
                    key={index}
                    recipeName={meal.recipe.label}
                    calories={meal.recipe.calories}
                    image={meal.recipe.image}
                    carbs={meal.recipe.totalNutrients.CHOCDF.quantity}
                    protein={meal.recipe.totalNutrients.PROCNT.quantity}
                    fat={meal.recipe.totalNutrients.FAT.quantity}
                    url={meal.recipe.url}
                    amount={meal.recipe.yield}
                  />
                )
              })
            }
            </ul>
            <div className="to-top">
              <a href="#start" className="link-to-top" onClick={this.returnTop}>Another Recipe</a>
            </div>
          </div>
        </section>

        <footer>
          <div className="background">
            <p>Deliciously Cooked by <a href="https://github.com/Callyhobbes" target="_blank">Cally</a> at <a href="https://junocollege.com/" target="_blank">Juno College</a> <i className="fab fa-canadian-maple-leaf"></i></p>
          </div>
        </footer>
      </Fragment>

    )
  }
}

export default App;
