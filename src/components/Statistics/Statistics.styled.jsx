import styled from "@emotion/styled";

export const Section = styled.section`
margin 20px`

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
`

export const StatItem = styled.li`
padding: 20px 10px;
background-color: {randomColor};
display: flex;
flex-direction: column;`



const randomColor = () => {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`
}
