import axios from "axios";

const movieBaseUrl="https://api.themoviedb.org/3"
const api_key='ef4f788781030cc0102cbf81f8759495'

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=ef4f788781030cc0102cbf81f8759495';

//https://api.themoviedb.org/3/trending/all/day?api_key=ef4f788781030cc0102cbf81f8759495
const getTrendingVideos=axios.get(movieBaseUrl+
    "/trending/all/day?api_key="+api_key);
    const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default{
    getTrendingVideos,
    getMovieByGenreId
}