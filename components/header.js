function headerComponent(elform){
  const header = document.createElement("header");
  header.classList.add("header-component");
  header.innerHTML = `
    <div class="header-component__container">
      <a href="./index.html" class="header-component__logo"><img src="./imagen/logo.svg" ></a>
      <nav class="header-component-nav">
        <ul>
          <li><a href="./tiendas.html">Tiendas</a></li>
          <li><a href="./servicios.html">Servicios</a></li>
          <li><a href="./contacto.html">Contacto</a></li>
        </ul>
      </nav>
      <div class="menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
    `;
    elform.appendChild(header);
  const menu = document.querySelector(".menu");
  menu.addEventListener("click", () => {
    document.querySelector(".header-component-nav").classList.toggle("active");
    menu.classList.toggle("active");
  });
};

const headerContainer = document.getElementById("header-container");
headerComponent(headerContainer);
