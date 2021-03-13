import React, {useRef, useContext} from 'react'
import {StyledSearchBox, StyledInput} from './SearchBox.style'
import {MovieContext} from '../../context/MovieContext'




const SearchBox = () => {
    const inputRef = useRef();
    const {setSearchKeyword} = useContext(MovieContext);
    return (
        <StyledSearchBox>
            <StyledInput ref={inputRef} isColored placeholder='  Search Movie...' onChange={()=> setSearchKeyword(inputRef?.current?.value)} />
            {/* <StyledSearchButton  onClick={()=> setSearchKeyword(inputRef?.current?.value)}> Search </StyledSearchButton> */}
        </StyledSearchBox>
    )
}

export default SearchBox
 