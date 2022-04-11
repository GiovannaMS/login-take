//botão de mostrar a senha
function showPass() {
    var x = document.getElementById("password");
    var y = document.getElementById("eye");
    if (x.type === "text") {
      x.type = "password"; //senha escondida
      y.style.fill="rgb(133, 131, 131)"; //botão fica cinza
    } else {
      x.type = "text"; //senha a mostra
      y.style.fill="#0474e4"; //botão fica amarelo
    }
  } 