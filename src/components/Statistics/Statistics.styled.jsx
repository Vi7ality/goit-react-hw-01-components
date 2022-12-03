import styled from "@emotion/styled";

export const Section = styled.section`
margin: 20px;`

export const Title = styled.h2`
    font-size: 40px;
    padding-top: 20px;
    padding-bottom: 20px;
    text-align: center;
`;

export const StatList = styled.ul`
list-style: none;
display: flex;
border: solid 1px grey;
padding: 0;
`

export const StatItem = styled.li`
min-width: 120px;
padding: 20px 10px;
background-color: ${randomColor};
display: flex;
flex-direction: column;
align-items: center;`




function randomColor () {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
