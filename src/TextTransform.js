import React from 'react';

function TextTransform() {
  
  const text = document.querySelector("h1");
  const strText = text.textContent;
  const splitText = strText.split("");
  text.textContent = "";

  for (let i = 0; i < splitText.length; i++) {
    text.innerHTML += "<span>" + splitText[i] + "</span>";
  }

  let char = 0;

  let timer = setInterval(function () {
    const span = text.querySelectorAll("span")[char];
    span.classList.add("fade");
    char++;
    // this.setState({
    //   char: char + 1
    // })
    console.log('test');
    if (char === splitText.length) {
      complete();
      return;
    }
  }, 200);

  const complete = () => {
    clearInterval(timer);
    timer = null;
  }

  return (
    TextTransform
  )
}

export default TextTransform;


