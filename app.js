const url = "https://swapi.dev/api/";



window.addEventListener('DOMContentLoaded',(event)=>{
  console.log("dom loaded");
  const h2 = document.querySelector('#nav');
  console.log(h2);
  fetch(url).then((data)=>data.json()).then(res=>{
    console.log(res);
    // h2.innerHTML = '';
    for (let property in res) {
      console.log(property);
      const btn = document.createElement('button');
      btn.textContent = `${property}`;
      console.log(btn);

      console.log(btn);
      h2.append(btn);

    }
  });
});