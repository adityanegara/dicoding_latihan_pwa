import API_ENDPOINT from '../globals/api-endpoint';

class TheMovieDbSource{
    static async nowPlayingMovies(){
        console.log(API_ENDPOINT.NOW_PLAYING);
        const response = await fetch(API_ENDPOINT.NOW_PLAYING);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async upcomingMovies(){
        console.log(API_ENDPOINT.UPCOMING);
        const response = await fetch(API_ENDPOINT.UPCOMING);
        const responseJson = await response.json();
        return responseJson.results;
    }

    static async detailMovie(id){
        console.log(API_ENDPOINT.DETAIL(id));
        const response = await fetch(API_ENDPOINT.DETAIL(id));
        return response.json();
    }
}

export default TheMovieDbSource;