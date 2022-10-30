"use strict";


const $ = function (selector) {
  return document.querySelector(selector);
};

const $$ = function (selector) {
  return document.querySelector(selector);
};

for (let i = 0; i < pokemons.length; i++) {
  const div = document.createElement("div");
  div.classList.add("cardd");
  div.innerHTML = `<p>${pokemons[i].id}</p> <img src='${pokemons[i].img}' width="150"  alt="imgas"> <hr heght="10">  <h4>${pokemons[i].name}</h4>   <p>${pokemons[i].candy}</p>  <p>  <strong>${pokemons[i].height}</strong> </p><strong>${pokemons[i].weight}</strong> `;
  $(".qwerty").appendChild(div);
}

for (let i = 0; i < 52; i++) {
  const div = document.createElement("div");
  div.classList.add("cardd");
  div.innerHTML = `<p>${pokemons[i].id}</p> <img src='${pokemons[i].img}' width="150"  alt="imgas"> <hr heght="10">  <h4>${pokemons[i].name}</h4>   <p>${pokemons[i].candy}</p>  <p>  <strong>${pokemons[i].height}</strong> </p><strong>${pokemons[i].weight}</strong> `;
  $(".div_title").appendChild(div);
}




$(".ikonka").addEventListener("click", () => {
  $(".div").setAttribute("class", "div_wrap");
});



$(".spann").addEventListener("click", () => {
  $(".div_wrap").setAttribute("class" , "div");
});



// ${''}.addEventListener('click' , ()=>{

//     if(${'body'}.getAttribute('class')==="menu")
//     {
//       ${'.div'}.setAttribute('class','div_wrap')
//     }
//     })
// else{
//   passWord.setAttribute('type','password');
//   koz.innerHTML=`<i class="bi bi-eye"></i>`
// }
