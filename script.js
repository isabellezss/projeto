// document.getElementById("cadastro").addEventListener("submit", function(event) {
//   // Evitar o comportamento padrão do formulário de recarregar a página
//   event.preventDefault();

//   // Exibir a mensagem de "Cadastro concluído"
//   document.getElementById("mensagem-concluido").style.display = "block";
// });


//  let enviar = document.getElementById ("bnt-enviar")
// enviar.addEventListener("click", () => {
//   alert ("enviando com sucesso")
// })
//  enviar = alert ("enviando com sucesso")
// const form=document.getElementById("cadastro")
// form.addEventListener ("submit", (event)=>{
//   event.preventDefault();

//   alert ("enviando com sucesso")
// })
// const form = document.getElementById("cadastro");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   alert("enviando com sucesso");
// });

const mensagem= document.getElementById("mensagem")
 const buttonCadastrar = document.getElementById("bnt-enviar");
buttonCadastrar.addEventListener("click", (event) => {
  event.preventDefault();
  mensagem.innerHTML="Cadastrando com sucesso!";
});




