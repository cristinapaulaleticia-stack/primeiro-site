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
   //FUNÇAO
   Function aumentarfonte({
    fonte++
    document.boby.style.fontSize = fonte + "pix";
   }
   }