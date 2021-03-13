import React from 'react'
import {StyledText, StyledCardWrapper, StyledMovieIMage} from './Card.style'
import {useHistory} from 'react-router-dom'

const Card = ({title, imgSrc, id}) => {
    const history = useHistory();
    return (
        <StyledCardWrapper onClick={()=> history.push(`/detail/${id}`)} >
           
                <StyledMovieIMage src={imgSrc} alt={'Movie Poster'}/>

            
            <StyledText>  {title}</StyledText>
          
        </StyledCardWrapper>
    )
}

export default Card
