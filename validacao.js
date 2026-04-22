const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

let nome = document.getElementById("nome").value;
let email = document.getElementById("email").value;
let idade = document.getElementById("idade").value;

let erro = document.getElementById("erro");

let mensagemErro = "";

if(nome === ""){
mensagemErro += "O nome não pode estar vazio.\n";
}

if(!email.includes("@")){
mensagemErro += "Email inválido.\n";
}

if(idade <= 0 || idade === ""){
mensagemErro += "Idade deve ser maior que 0.";
}

if(mensagemErro !== ""){
event.preventDefault();
erro.textContent = mensagemErro;
}
else{
erro.textContent = "";
alert("Formulário enviado com sucesso!");
}

});