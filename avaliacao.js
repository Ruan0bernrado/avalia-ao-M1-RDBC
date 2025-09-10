const catalogo = [
  { id: 1, titulo: "Matrix", ano: 1999, nota: 8.7, genero: "Ficção Científica" },
  { id: 2, titulo: "O Poderoso Chefão", ano: 1972, nota: 9.2, genero: "Drama" },
  { id: 3, titulo: "A Origem", ano: 2010, nota: 8.8, genero: "Ficção Científica" },
  { id: 4, titulo: "Interestelar", ano: 2014, nota: 8.6, genero: "Ficção Científica" },
  { id: 5, titulo: "Pulp Fiction", ano: 1994, nota: 8.9, genero: "Crime" },
];

//função 1

function listarFilmesDeGenero(genero){
  const FilmesDeGenero = catalogo.filter((catalogo) => catalogo.genero === "Ficção Científica")
  return FilmesDeGenero
};

console.log(listarFilmesDeGenero("Ficção Científica"))


//funçao 2

function listarNomesFilmes(titulo){
  const titulosFilmes = catalogo.map((catalogo) => catalogo.titulo)

  return titulosFilmes
};

console.log(listarNomesFilmes())

//funcão3

function filmesPorAno(ano){
  const filmesRecentes = catalogo
  .filter((catalogo)=> catalogo.ano >= 2000)
  .map(catalogo => catalogo.titulo)

  return filmesRecentes
}



console.log(filmesPorAno())