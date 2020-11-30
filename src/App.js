import { Component, Fragment } from 'react';
import video from './assets/chef-video.mp4';
import Recipes from './Recipes.js';
import axios from 'axios';
// import TextTransform from './TextTransform.js';

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
    // create a fade in effect for the title
    // const text = document.querySelector("h1");
    // const strText = text.textContent;
    // const splitText = strText.split("");
    // text.textContent = "";

    // for (let i = 0; i < splitText.length; i++) {
    //   text.innerHTML += "<span>" + splitText[i] + "</span>";
    // }

    // onTick = () => {
    //   const span = text.querySelectorAll("span")[char];
    //   span.classList.add("fade");
    //   char++
    //   if (char === splitText.length) {
    //     complete();
    //     return;
    //   }
    // }

    // complete = () => {
    //   clearInterval(timer)
    //   timer = null;
    // }
    // <TextTransform />
  }

  handleInputChange = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  handleSubmit = (e) => {
    // prevent browser refresh
    e.preventDefault();

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
      this.setState({
        recipes: food.data.hits
      })
    })
  }


  render() {
    return (
      <Fragment>
        <header>
          <div className="banner">
            <video src={video} autoPlay="true" loop="true"></video>
            <div className="search">
              <h1>Anyone Can Cook</h1>
              <form action="" className="search-box" onSubmit={this.handleSubmit}>
                <label htmlFor="search" className="sr-only">Search Food</label>
                <input id="search" className="search-text" type="text" placeholder="Search food" onChange={this.handleInputChange} value={this.state.userInput}/>
                <button className="search-button" value="submit"><i className="fas fa-carrot"></i></button>
              </form>
            </div>
            <div className="overlay"></div>
          </div>
        </header>

        <section>
          <ul className="recipe-list">
          {
            this.state.recipes.map((meal, index) => {
              return(
                <Recipes
                  key={index}
                  recipeName={meal.recipe.label}
                  calories={meal.recipe.calories}
                  image={meal.recipe.image}
                />
              )
            })
          }
          </ul>
        </section>
      </Fragment>

    )
  }
}

export default App;
