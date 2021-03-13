import styled from 'styled-components';

export const StyledCardList = styled.div `
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
    justify-content: center;
`;


export const StyledText  = styled.p `
text-align: center;
color: purple;
text-decoration-line: underline;
cursor: pointer;

&:hover {
    font-size: larger;
    color: blue;
    
}

`