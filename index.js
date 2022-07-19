// api key  from TMDB 
const api = "api_key=dd270488124aa326f6ecc6ab0f0d1471";
// base url of the site 
const base_url = "https://api.themoviedb.org/3";
// url
const final_url = base_url + "/discover/movie?sort_by=popularity.desc&" + api;
// img url 
const img_url = "https://image.tmdb.org/t/p/original";

// requests for movies data 
const requests = {
  fetchPopular: `${base_url}/discover/movie?certification_country=US&certification.lte=A&sort_by=popularity.desc&${api}`,
  fetchInTheaters: `${base_url}/discover/movie?primary_release_date.gte=2022-07-01&primary_release_date.lte=2022-07-18&sort_by=popularity.desc&${api}`,
  fetchTrending: `${base_url}/trending/all/week?${api}&language=en-US`,
  fetchDisneyPlusOriginals: `${base_url}/discover/tv?${api}&with_networks=2739`,
  fetchNetflixOrignals: `${base_url}/discover/tv?${api}&with_networks=213`,
  fetchActionMovies: `${base_url}/discover/movie?${api}&with_genres=28`,
  fetchComedyMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchHorrorMovies: `${base_url}/discover/movie?${api}&with_genres=27`,
  fetchRomanceMovies: `${base_url}/discover/movie?${api}&with_genres=35`,
  fetchDocumentaries: `${base_url}/discover/movie?${api}&with_genres=27`,
};
// used to truncate the string 
function truncate(str, n) {
  return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}
// banner
fetch(requests. fetchPopular)
.then((res) => res.json())
.then((data) => {
  console.log(data.results);
  // every refresh the movie will be change
  const setMovie = data.results[Math.floor(Math.random() * data.results.length - 1)];
  console.log(setMovie);
  var banner = document.getElementById("banner");
  var banner_title = document.getElementById("banner__title");
  var banner__desc = document.getElementById("banner__description");
  var rating = document.getElementById("four");
  banner.style.backgroundImage = "url(" + img_url + setMovie.backdrop_path + ")";
  banner__desc.innerText = truncate(setMovie.overview, 150);
  banner_title.innerText = setMovie.title;
  rating.innerText = "Rating: " + setMovie.vote_average;
});



//Featured today 
fetch(requests.fetchPopular)
.then((res) => res.json())
.then((data) => {
  const shuffled = data.results.sort(() => 0.5 - Math.random());
  let movie = shuffled.slice(0, 7);
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  row.classList.add("popularrow");
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Featured Today";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  movie.forEach(movie => {
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    poster.title = movie.original_title;
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});

// top rated 
fetch(requests.fetchTrending)
.then((res) => res.json())
.then((data) => {
  const shuffled = data.results.sort(() => 0.5 - Math.random());
  let movie = shuffled.slice(0, 7);
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "Top Rated";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  movie.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    poster.title = movie.original_title;
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);
  });
});


// top rated 
fetch(requests.fetchInTheaters)
.then((res) => res.json())
.then((data) => {
  const shuffled = data.results.sort(() => 0.5 - Math.random());
  let movie = shuffled.slice(0, 7);
  const headrow = document.getElementById("headrow");
  const row = document.createElement("div");
  row.className = "row";
  headrow.appendChild(row);
  const title = document.createElement("h2");
  title.className = "row__title";
  title.innerText = "In Theaters";
  row.appendChild(title);
  const row_posters = document.createElement("div");
  row_posters.className = "row__posters";
  row.appendChild(row_posters);
  movie.forEach(movie => {
    console.log(movie);
    const poster = document.createElement("img");
    poster.className = "row__posterLarge";
    poster.title = movie.original_title;
    var s2 = movie.id;
    poster.id = s2;
    poster.src = img_url + movie.poster_path;
    row_posters.appendChild(poster);

  });
});

