const end_point = 'https://api.themoviedb.org/3'
const API_KEY = 'ad7f8d90a26f20b25a62ea33def996790'
const IMG_PREFIX = 'https://image.tmdb.org/t/p/w500';
let xhr;

function carregaFilmes () {
    xhr = new XMLHttpRequest ();

    xhr.open ('GET', end_point + '/movie/popular' + '?api_key=' + API_KEY, true);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function pesquisaFilmes () {
    xhr = new XMLHttpRequest ();

    query = document.getElementById('pesquisa').value;

    xhr.open ('GET', end_point + '/search/movie' + '?api_key=' + API_KEY + '&query=' + query, true);
    xhr.onload = exibeFilmes;
    xhr.send();
}

function exibeFilmes () {
    
    let data = JSON.parse (xhr.responseText);
    let textoHTML = '';

    for (let i = 0; i < data.results.length; i++) {
        let nomeFilme = data.results[i].title;
        let sinopse = data.results[i].overview;
        let imagem = IMG_PREFIX + data.results[i].poster_path;

        textoHTML += `<div class="col-lg-3 col-md-6 mb-4">
        <div class="card h-100 bg-secondary">
          <img class="card-img-top" src="${imagem}" style="max-height:470px;">
          <div class="card-body">
            <p class="card-title"><b>${nomeFilme}</b></p>
            <p class="card-text">${sinopse}</p>
          </div>
          <div class="card-footer">
            <a href="#" class="btn btn-dark">Saiba mais!</a>
          </div>
        </div>
        </div>`
    }

    document.getElementById('tela').innerHTML = textoHTML;
}
