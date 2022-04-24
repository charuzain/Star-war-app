const url = "https://swapi.dev/api/";

window.addEventListener('DOMContentLoaded',(event)=>{
  console.log("dom loaded");
  fetch(url).then((data)=>data.json()).then(res=>{
    console.log(res);
    for (let property in res) {
      console.log(property);
    }
  });
});