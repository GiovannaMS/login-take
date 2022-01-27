function showPass() {
    var x = document.getElementById("password");
    var y = document.getElementById("eye");
    if (x.type === "text") {
      x.type = "password";
      y.style.fill="rgb(133, 131, 131)";
    } else {
      x.type = "text";
      y.style.fill="#ffb200";
    }
  } 