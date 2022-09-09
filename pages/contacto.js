function postForm(){
    const formEl = document.querySelector(".form-contact");
    formEl.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = formEl.querySelector("#name").value;
      const email = document.querySelector("#email").value;
      const message = document.querySelector("#message").value;
      const data = {
        to: "srv013@hotmail.com",
        message: `Nombre: ${name}, Email: ${email}, Mensaje: ${message}.`,
      };
      fetch("https://apx-api.vercel.app/api/utils/dwf", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(data),
      }).then((data) => data.json());
      formEl.reset();
    });
  };
function fromComponet(eR){
    const formContact = document.createElement("form");
    formContact.classList.add("form-contact");
    formContact.innerHTML = `
        <div class="contenido contacto">
        <h1>Contactanos</h1>
              <label for="name">Nombre</label>
              <input type="text" id="name" name="name">
              <label for="email">Email</label>
              <input type="text" id="email" name="email">
              <label for="message">Mensaje</label>
              <textarea id="message" name="message"></textarea>
              <input type="submit" value="enviar"></button>
        </div>`;
        eR.appendChild(formContact);
        postForm();
    }
const fromContainer = document.getElementById("contact-container");
fromComponet(fromContainer);