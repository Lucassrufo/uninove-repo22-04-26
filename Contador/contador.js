// Passo 3
let contador = 0;

const numero = document.getElementById("numero");

const incrementar = document.getElementById("incrementar");
const decrementar = document.getElementById("decrementar");
const zerar = document.getElementById("zerar");

function atualizarContador(){

// Passo 5
numero.textContent = contador;

// Passo 6 bônus
if(contador > 0){
numero.style.color = "green";
}

else if(contador < 0){
numero.style.color = "red";
}

else{
numero.style.color = "black";
}

}


// Passo 4
incrementar.addEventListener("click", function(){
contador++;
atualizarContador();
});


decrementar.addEventListener("click", function(){
contador--;
atualizarContador();
});


zerar.addEventListener("click", function(){
contador = 0;
atualizarContador();
});