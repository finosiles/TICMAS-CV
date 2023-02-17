


window.onscroll = function() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    document.getElementById("btn-goto-top").style.display = "block";
  } else {
    document.getElementById("btn-goto-top").style.display = "none";
  }
};

// Desplazar la página hacia arriba cuando se hace clic en el botón
document.getElementById("btn-goto-top").onclick = function() {
  document.body.scrollTop = 0; // Para Safari
  document.documentElement.scrollTop = 0; 
};


const form = document.getElementById("contact-form");
const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  if (name.value === "" || email.value === "" || message.value === "") {
    alert("Por favor complete todos los campos.");
  } else {
    // Aquí puedes agregar el código para enviar el formulario
    // o mostrar un mensaje de éxito al usuario.
  }
});