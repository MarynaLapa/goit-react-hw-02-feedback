import styled from 'styled-components'


const Container = styled.div`
        padding: 0 20px 0;
        position: relative; 
       
        h2 {
            text-align: center;
            color: tomato;
            font-size: 48px;
        }
`

const Section = ({title, children}) => {
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>   
    )
}


export default Section;