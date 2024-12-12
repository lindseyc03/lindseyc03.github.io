import styled from 'styled-components';
import ListGroup from './ListGroup'; // Import ListGroup

export const Home = ({ onItemSelect }) => {
    return (
        <HomeContainer>
            <h1>Home Page</h1>
            <p>description for home page</p>
            <ListGroup onItemSelect={onItemSelect} /> {/* Pass the onItemSelect function */}
        </HomeContainer>
    );
};


const HomeContainer = styled.div`
    background-color: pink;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`
