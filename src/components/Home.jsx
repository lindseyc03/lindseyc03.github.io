import styled from 'styled-components';

export const Home = () => {
    return (
        <HomeContainer>
            <h1>Home Page</h1>
            <p>description for home page</p>
        </HomeContainer>
    )
}

const HomeContainer = styled.div`
    background-color: pink;
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`