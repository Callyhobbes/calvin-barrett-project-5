import { Component } from 'react'

class TextTransform extends Component {
  render() {
    // create a fade in effect for the title
    const text = document.querySelector("h1");
    const strText = text.textContent;
    const splitText = strText.split("");
    text.textContent = "";


    for (let i = 0; i < splitText.length; i++) {
      text.innerHTML += "<span>" + splitText[i] + "</span>";
    }

    let char = 0;
    let timer = setInterval(onTick, 100);

    const onTick = () => {
      const span = text.querySelectorAll("span")[char];
      span.classList.add("fade");
      char++
      if (char === splitText.length) {
        complete();
        return;
      }
    }

    const complete = () => {
      clearInterval(timer)
      timer = null;
    }

    return (
      <div>
        
      </div>
    )
  }
}
export default TextTransform;


