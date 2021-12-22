import API from "./axiosInterceptor"

export const fetchMovieList = () => API.get('/list_movies.json')
