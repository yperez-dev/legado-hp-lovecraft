const navbar = `
  <header>
    <a href="/index.html" class="image-container"> <img src="/assets/images/logo-pagina.svg" class="logo" alt="Logotipo de la pagina"> </a>
    
    <nav>
      <ul class="nav-links">
        <li> <a href="/pages/legacy.html">Legado</a></li>
        <li> <a href="/pages/works.html">Obras</a></li>
      </ul>
    </nav>

    <a href="/pages/about.html" class="contact-btn"> <img src="/assets/icons/usuario.png" alt="">Acerca de</a>
  </header>
`;

document.body.insertAdjacentHTML('afterbegin', navbar);