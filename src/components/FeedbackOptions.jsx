import styled from "styled-components";

const List = styled.ul`
        list-style: none;
        display: inline-flex;
        gap: 12px;
        padding: 0px;
        margin: 0px;

        button {
            width: 160px;
            background-color: rgb(255, 251, 0);
            border: none;
            padding: 10px;
            border-radius: 8px;
            text-transform: capitalize;
            font-size: 24px;
            color: #4f4fc2;
            box-shadow: 0 15px 15px rgba(124, 97, 245, 0.3); 
            letter-spacing: 1px;
            transition: all 500;
            &:hover {
                letter-spacing: 3px;
	            background: #7b7bf1;
	            box-shadow: 0 0 5px #4f4fc2, 0 0 15px #4f4fc2, 0 0 30px #4f4fc2, 0 0 60px #4f4fc2;
                color: white;
            }
        }
        
`

const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <List>
            {options.map((option, index) => (
                    <li key={ index } >
                    <button
                        type="button"
                        onClick={onLeaveFeedback}
                        name={option}
                    >
                        {option}
                    </button>
                </li>
            ))}
        </List>
    )   
}

export default FeedbackOptions;
