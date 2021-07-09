import TheMovieDbSource from "../../data/themoviedb-source";

const NowPlaying = {
    async render() {
      return `
        <h2>NowPlaying Page</h2>
      `;
    },
   
    async afterRender() {
      const movies = await TheMovieDbSource.nowPlayingMovies();
      console.log(movies);
    },
  };
   
  export default NowPlaying;