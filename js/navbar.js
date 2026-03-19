const navbar = `
  <header>
    <a href="/index.html" class="image-container"> <img src="/assets/images/logo-pagina.svg" class="logo" alt="Logotipo de la pagina"> </a>
    
    <nav>
      <ul class="nav-links">
        <li> <a href="/pages/legacy.html">Legado</a></li>
        <li> <a href="#">Obras</a></li>
        <li> <a href="#">Mitos</a></li>
        <li> <a href="#">Galeria</a></li>
        <li> <a href="#">Glosario de terminos</a></li>
        <li> <a href="#">Biblioteca</a></li>
      </ul>
    </nav>

    <a href="#" class="contact-btn"> <img src="/assets/icons/usuario.png" alt="">Acerca de</a>
  </header>
`;

document.body.insertAdjacentHTML('afterbegin', navbar);