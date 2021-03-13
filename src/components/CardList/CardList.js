import {useContext} from 'react';
import { MovieContext } from '../../context/MovieContext';
import Card from '../Card/Card';
import {StyledCardList, StyledText} from './CardList.style'




const CardList = ()=> {
    
    const {baseImageUrl, movieData,  handleLoadMore} = useContext(MovieContext)

    return (
        <>
        <StyledCardList>
        {
            movieData && movieData.map((movie, index) => {
                return <Card key={index}
                title={movie.title}
                id = {movie.id}
                imgSrc ={movie.poster_path?( baseImageUrl + movie.poster_path): 'https://www.allianceplast.com/wp-content/uploads/2017/11/no-image.png'}/>
            })
        }
        
        </StyledCardList>
        <StyledText  onClick={()=> handleLoadMore()}>View More</StyledText>
        </>
    )
}

export default CardList

