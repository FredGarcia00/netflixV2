const key = "1622c40ec666fe6ccbe9fc69173b9b84";

const requests = {
  Trending: `/discover/tv?api_key=${key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${key}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${key}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${key}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${key}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${key}&with_genres=99`,
};

export default requests;
