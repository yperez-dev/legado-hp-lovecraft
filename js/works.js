const grid = document.getElementById('obras-grid');

async function cargarObras() {
  const respuesta = await fetch('https://openlibrary.org/search.json?author=lovecraft&limit=50');
  const datos = await respuesta.json();

    datos.docs
    .filter(libro => {
      const autor = libro.author_name ? libro.author_name[0].toLowerCase() : '';
      return autor.includes('lovecraft');
    })
    
    .forEach((libro) => {
      const tarjeta = document.createElement('div');
      tarjeta.classList.add('card');

      const titulo    = libro.title ?? 'Título desconocido';
      const autor     = libro.author_name ? libro.author_name[0] : 'Autor desconocido';
      const anio      = libro.first_publish_year ?? 'Año desconocido';
      const ediciones = libro.edition_count ?? 'No disponible';
      const lenguaje  = libro.language ? libro.language.join(', ') : 'lenguaje desconocido';

      tarjeta.innerHTML = `
        <div class="card-lomo"></div>
        <div class="card-body">
          <h3 class="card-title">${titulo}</h3>
          <p class="card-autor">${autor}</p>
          <div class="card-datos">
            <p class="card-dato"><span>Publicado</span>: ${anio}</p>
            <p class="card-dato"><span>Ediciones</span>: ${ediciones}</p>

            <p class="card-dato"><span>Idiomas</span>: ${lenguaje}</p>
          </div>
        </div>
      `;

      grid.appendChild(tarjeta);
    });
}

cargarObras();