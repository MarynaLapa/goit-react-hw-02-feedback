import styled from "styled-components";

const List = styled.ul`
    font-size: 24px;
    color: wheat;
    text-align: left;
    margin: auto;
    width: 260px;
`

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <List>
            <li>
                <p>Good: {good}</p>
            </li>
            <li>
                <p>Neutral: {neutral}</p>
            </li>
            <li>
                 <p>Bad: {bad}</p>
            </li>
            <li>
                <p>Total: {total}</p>
            </li>
            <li>
                <p>Positive feedback: {positivePercentage}%</p>
            </li>
        </List>    
    )
}

export default Statistics;
