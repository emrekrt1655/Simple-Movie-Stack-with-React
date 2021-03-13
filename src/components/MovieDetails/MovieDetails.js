import React, {useState, useEffect} from 'react'
import axios from 'axios'
import {useParams} from 'react-router-dom'
import {StyledMovieIMage} from '../Card/Card.style'
import {StyledDetailedMovieWrapper, StyledDiv} from './MovieDetail.style'









const MovieDetails = () => {
    const [movieDetails, setMovieDetails] = useState();
    const {id} = useParams();
    const movieDetailBaseUrl = 'https://api.themoviedb.org/3/movie/'
    const apiKey = 'f181e9665a1225fc3009fac03bb2c5af'
    const baseImageUrl = 'http://image.tmdb.org/t/p/w500'
    useEffect(()=>{
        axios.get(movieDetailBaseUrl+id, {
            params: {
                api_key: apiKey,
               
            }}).then(res=>(setMovieDetails(res?.data)))
            .catch((err)=> console.log(err))
        },[]);    
    console.log(movieDetails)
    return (
        <StyledDetailedMovieWrapper>
            <h1>{movieDetails?.original_title}</h1>
            <StyledMovieIMage src={movieDetails?.poster_path?(baseImageUrl+movieDetails?.poster_path) : ('https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png')} alt={'Movie Poster'}/>
            <StyledDiv>
            <p>{
                
                    movieDetails?.genres && movieDetails?.genres.map((g,i) => {
                        return <span key={i}>{'*' + g.name+ ' '}</span>
                    } )
                
            }
            </p>
            <p> {movieDetails?.runtime} min  </p>
            <p>{movieDetails?.release_date}</p>
            <p>Vote: {movieDetails?.vote_average}</p>
            </StyledDiv>
            <p>{movieDetails?.overview}</p>
            
            

        </StyledDetailedMovieWrapper>
    )
}

export default MovieDetails
