const url = "https://swapi.dev/api/";

// const getData = (link)=>{
//   fetch(link)
//     .then(data=>data.json())
//     .then(res=>console.log(res));
// };


// const fetchData = (e)=>{
//   // console.log(e.target);
//   const btnClicked = e.target;
//   // console.log(btnClicked);
//   // console.log(btnClicked.link);
//   getData(btnClicked.link);
// };



window.addEventListener('DOMContentLoaded',(event)=>{
  // console.log("Dom Loaded");
  const nav = document.querySelector('#btn-container');
  const h2 = document.querySelector('#hide');
  // console.log(nav);
  fetch(url).then((data)=>data.json()).then(res=>{
    console.log(res);
    for (let property in res) {
      const btn = document.createElement('button');
      btn.textContent = property;

      btn.classList.add("nav-btn");
      btn.link = res[property];
      nav.append(btn);


      /* Event listener to button */
      btn.addEventListener('click', (e)=>{
        const main = document.querySelector('main');
        main.innerHTML = " ";
        h2.innerHTML = " ";
        console.log(main);
        const btnClicked = e.target;
        fetch(btnClicked.link)
          .then(data=>data.json())
          .then(res=>{
            console.log(res.results);
            res.results.forEach(element => {
              // console.log(element.name)
              const div = document.createElement('div');
              div.textContent = element.name || element.title;
              div.link = element.url;
              console.log(div.link);

              div.addEventListener('click',(e)=>{
                main.innerHTML = " ";

                const el = e.target;
                console.log(el.link);
                
                //  load the detail of item clicked , make fetch request to load element on page

                fetch(el.link)
                  .then(data=>data.json())
                  .then(res=>{
                    console.log(res);
                    for (let property in res) {
                      console.log(property);

                      console.log(typeof(res[property]));
                      const dataType = typeof(res[property]);
                      let output = (dataType === 'string') ? res[property] : JSON.stringify(res[property]);
                      main.classList.add("item-detail");

                      main.innerHTML += `<div>${property} : ${output}</div>`;

                      // console.log(res[property]);
                    }
                  })
                  .catch(err=>console.log(err));
                
              });
              // console.log(div);
              main.classList.remove("item-detail");
              div.classList.add("main-items");
              main.append(div);
              console.log(main);
              // console.log(div)

            });

          });

      });


    }
  });
});