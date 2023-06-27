const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMTFhY2Y1ZjU4OTg0MWE5ZTA5NWQ5NjJiZWQ0M2I2MCIsInN1YiI6IjY0NjcyNWU4ZDE4NTcyMDBlNWEzNGZkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.P7VnYPBWXiL2bzpkeZOnFZSh1qQn0kK1ifnhSQfvLzM',
  },
};
//fetch some lists
export const popularFetch = function (page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/movie/popular?language=uk-UA&page=${page}`,
    options
  )
    .then(response => response.json())

    .catch(err => console.error(err));
};
export const fectTrandMovie = function (termin = 'day') {
  return fetch(
    `https://api.themoviedb.org/3/trending/movie/${termin}?language=uk-UA`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};
export const fetchUpcommingMovie = function (page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/movie/upcoming?language=uk-UA&page=1`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};
//

//fetch by
export const fetchById = function (movieId) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${movieId}?language=uk-UA`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};
export const fetchMovieByQuery = function (query, page = 1) {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=uk-UA&page=${page}`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};
//

// fetch other information

export const fecthCredits = function (id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/credits?language=uk-UA`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

export const fetchReview = function (id) {
  return fetch(
    `https://api.themoviedb.org/3/movie/${id}/reviews?language=en-US&page=1`,
    options
  )
    .then(response => response.json())
    .catch(err => console.error(err));
};

// export const fetchRecomendationForMovie = function (id, page = 1) {
//   return fetch(
//     `https://api.themoviedb.org/3/movie/${id}/recommendations?language=uk-UA&page=${page}`,
//     options
//   )
//     .then(response => response.json())
//     .catch(err => console.error(err));
// };
