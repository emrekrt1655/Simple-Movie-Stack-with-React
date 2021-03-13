import './App.css';
import React, {useEffect, useState} from 'react'
import CardList from './components/CardList/CardList'
import SearchBox from './components/SearchBox/SearchBox'
import axios from 'axios';
import {MovieContext} from './context/MovieContext'



const apiKey = 'f181e9665a1225fc3009fac03bb2c5af'
const baseUrl = 'https://api.themoviedb.org/3/search/movie';
const baseImageUrl = 'http://image.tmdb.org/t/p/w500'


function Movie() {
  const [movieData, setMovieData] = useState([])
  const [searchKeyword, setSearchKeyword] = useState('movie');
  const [page, setPage] = useState(1)


    const getPostList = () => {
      axios.get(baseUrl, {
        params: {
            api_key: apiKey,
            page:page,
            query: searchKeyword // TODO: from input
        }}).then((res)=> {setMovieData(res?.data?.results) })
        .catch((err)=> console.log(err))
    }
    
  
  
    useEffect(()=>{
          getPostList();
        },[searchKeyword, page]);   
        
    const handleLoadMore = () => {
      setPage(page+1);
    }


  return (
    <div className="App">
      <MovieContext.Provider value={{movieData, baseImageUrl, setSearchKeyword, handleLoadMore, page }} >
      <SearchBox />
      <CardList  />
      </MovieContext.Provider>
    </div>
  );
}

export default Movie;
