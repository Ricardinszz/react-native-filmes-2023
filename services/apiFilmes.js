const { default: axios } = require("axios");


const apiFilmes = axios.create({
    baseURL: 'https://api.themoviedb.org/3/',
    params: {
        language: 'pt-BR'
    },
    headers: {
        Authorization: "bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMDgwNzYxMjcxY2ExZTY3Yjc3YTNkNjMxZGVhZmEwMiIsInN1YiI6IjY0ZWZjNTkzZWJiOTlkMDBhZDhiNDQwOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7HU3pxHJCJeUaChpTGH-dmiofTrbUm9tb4KcE5BFtAM"
    }
})

export default apiFilmes 