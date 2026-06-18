 const botao = document.querySelector("button")
   botao.addEventListener('click', curtir)

   function curtir(){
    let curdidas = document.querySelector("span")
    curdidas.textContent++;
   }

   //BOTAO DO TAMANHO
   const tamanho = document.getElementById("tamanho")
   tamanho.addEventListener("click", aumentarfonte)
let fonte = 16;

   //FUNÇAO TAMANHO
function aumentarfonte(){
    fonte++
    document.body.style.fontSize = fonte + "px";
}
   //BOTAO DO CONTRASTE
const contraste = document.getElementById("contraste")
contraste.addEventListener("click", mudarContraste)

    //FUNCAO DO CONTRASTE
function mudarContraste(){
  document.body.style.color = "yellow"
}