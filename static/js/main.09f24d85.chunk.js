(this["webpackJsonpcalvin-barrett-project-five"]=this["webpackJsonpcalvin-barrett-project-five"]||[]).push([[0],{23:function(e,t,c){},41:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(2),s=c.n(a),r=c(16),i=c.n(r),l=(c(23),c(3)),o=c(4),u=c(6),d=c(5),h=c.p+"static/media/chef-video.0df42e0c.mp4",j=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){return Object(l.a)(this,c),t.apply(this,arguments)}return Object(o.a)(c,[{key:"render",value:function(){var e=this.props,t=e.recipeName,c=e.calories,a=e.image,s=e.carbs,r=e.protein,i=e.fat,l=e.url,o=e.amount;return Object(n.jsxs)("li",{className:"recipe",children:[Object(n.jsx)("h2",{children:t}),Object(n.jsxs)("div",{className:"core-content",children:[Object(n.jsxs)("div",{className:"info",children:[Object(n.jsxs)("p",{children:["Calories: ",c.toFixed(0)]}),Object(n.jsxs)("p",{children:["Carbs: ",s.toFixed(0),"g"]}),Object(n.jsxs)("p",{children:["Protein: ",r.toFixed(0),"g"]}),Object(n.jsxs)("p",{children:["Fat: ",i.toFixed(0),"g"]}),Object(n.jsxs)("p",{children:["Serves: ",o," ",o>1?"people":"person"]})]}),Object(n.jsx)("img",{src:a,alt:t})]}),Object(n.jsx)("div",{className:"re-direct",children:Object(n.jsx)("a",{href:l,target:"_blank",children:"Instructions"})})]})}}]),c}(a.Component),p=c(17),b=c.n(p);var m=function(){var e=document.querySelector("h1"),t=e.textContent.split("");e.textContent="";for(var c=0;c<t.length;c++)e.innerHTML+="<span>"+t[c]+"</span>";var n=0,a=setInterval((function(){e.querySelectorAll("span")[n].classList.add("fade"),++n!==t.length||s()}),150),s=function(){clearInterval(a),a=null}},f=function(e){Object(u.a)(c,e);var t=Object(d.a)(c);function c(){var e;return Object(l.a)(this,c),(e=t.call(this)).handleInputChange=function(t){e.setState({userInput:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.showResults();b()({url:"https://api.edamam.com/search",method:"GET",responseType:"json",params:{q:"".concat(e.state.userInput),app_id:"".concat("f7c1ac0b"),app_key:"".concat("d9ba5cbc7d8628b0f4167221ac2027fa")}}).then((function(t){console.log(t.data),e.setState({recipes:t.data.hits}),e.smoothScroll(".results",1500)}))},e.showResults=function(){document.getElementById("results").classList.add("show"),document.querySelector("footer").classList.add("show")},e.smoothScroll=function(e,t){var c=document.querySelector(e).getBoundingClientRect().top,n=window.pageYOffset,a=c-n,s=null;requestAnimationFrame((function e(c){null===s&&(s=c);var r,i,l,o=c-s,u=(r=o,i=n,l=a,(r/=t/2)<1?l/2*r*r+i:(r--,-l/2*(r*(r-2)-1)+i));window.scrollTo(0,u),o<t&&requestAnimationFrame(e)}))},e.returnTop=function(){e.smoothScroll("#start",2e3)},e.state={recipes:[],userInput:""},e}return Object(o.a)(c,[{key:"componentDidMount",value:function(){m()}},{key:"render",value:function(){return Object(n.jsxs)(a.Fragment,{children:[Object(n.jsx)("header",{id:"start",children:Object(n.jsxs)("div",{className:"banner",children:[Object(n.jsx)("video",{src:h,autoPlay:"true",loop:"true"}),Object(n.jsxs)("div",{className:"search",children:[Object(n.jsx)("h1",{children:"Anyone Can Cook"}),Object(n.jsxs)("form",{action:"",className:"search-box",onSubmit:this.handleSubmit,children:[Object(n.jsx)("label",{htmlFor:"search",className:"sr-only",children:"Search Food"}),Object(n.jsx)("input",{id:"search",className:"search-text",type:"text",placeholder:"Search a recipe",onChange:this.handleInputChange,value:this.state.userInput}),Object(n.jsx)("button",{className:"search-button",value:"submit",children:Object(n.jsx)("i",{className:"fas fa-carrot"})})]})]}),Object(n.jsx)("div",{className:"overlay"})]})}),Object(n.jsx)("section",{className:"results",id:"results",children:Object(n.jsxs)("div",{className:"wrapper",children:[Object(n.jsx)("ul",{className:"recipe-list",children:this.state.recipes.map((function(e,t){return Object(n.jsx)(j,{recipeName:e.recipe.label,calories:e.recipe.calories,image:e.recipe.image,carbs:e.recipe.totalNutrients.CHOCDF.quantity,protein:e.recipe.totalNutrients.PROCNT.quantity,fat:e.recipe.totalNutrients.FAT.quantity,url:e.recipe.url,amount:e.recipe.yield},t)}))}),Object(n.jsx)("div",{className:"to-top",children:Object(n.jsx)("a",{href:"#start",className:"link-to-top",onClick:this.returnTop,children:"Another Recipe"})})]})}),Object(n.jsx)("footer",{children:Object(n.jsx)("div",{className:"background",children:Object(n.jsxs)("p",{children:["Deliciously Cooked by ",Object(n.jsx)("a",{href:"https://github.com/Callyhobbes",target:"_blank",children:"Cally"})," at ",Object(n.jsx)("a",{href:"https://junocollege.com/",target:"_blank",children:"Juno College"})," ",Object(n.jsx)("i",{className:"fab fa-canadian-maple-leaf"})]})})})]})}}]),c}(a.Component),O=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};i.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root")),O()}},[[41,1,2]]]);
//# sourceMappingURL=main.09f24d85.chunk.js.map