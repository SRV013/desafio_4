function footerComponent(el) {
    const footer = document.createElement("footer");
    footer.classList.add("footer-component");
    footer.innerHTML = `
    <div class="footer">
    <img class="logo" src="./imagen/logo.svg" alt="" />
        <div class="redes">  
            <a href="https://www.instagram.com/yamipccomputacion/" target="_blank"><img src="./imagen/instagram.png" alt="" /><p>Instagram</p></a>
            <a href="https://www.facebook.com/yamipconline/" target="_blank"><img src="./imagen/facebook.png" alt="" /><p>Facebook</p></a>
            <a href="https://github.com/SRV013/desafiotres" target="_blank"><img src="./imagen/github.png" alt="" /><p>Github</p></a>
        </div>
    </div>`;
    el.appendChild(footer);
  };
 const footerContainer = document.getElementById("footer-container");
 footerComponent(footerContainer);