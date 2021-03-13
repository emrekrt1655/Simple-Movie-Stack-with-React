import styled, {css} from 'styled-components';



export const StyledInput = styled.input`
    color: black;
    ${ p => p.isColored && css`
        color: red
    `}
    color: ${p=> p.color};
    border-radius: 0.5rem;
    margin-right: 0.5rem ;
    width: 18rem;
    height: 2rem; 
`

export const StyledSearchButton = styled.button`
    cursor:pointer;
    margin:0.2rem
`

export const StyledSearchBox = styled.div`
   margin:2rem;
//    ${StyledInput} {
//     color:gray
//     }
`;