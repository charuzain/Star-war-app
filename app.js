const url = "https://swapi.dev/api/";



window.addEventListener('DOMContentLoaded',(event)=>{
  console.log("Dom Loaded");
  const nav = document.querySelector('#btn-container');
  console.log(nav);
  fetch(url).then((data)=>data.json()).then(res=>{
    console.log(res);
    // nav.innerHTML = '';
    for (let property in res) {
      console.log(property);
      const btn = document.createElement('button');
      btn.textContent = `${property}`;
      console.log(btn);
      btn.classList.add("nav-btn");

      nav.append(btn);

    }
  });
});