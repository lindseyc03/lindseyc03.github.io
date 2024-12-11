import styled from 'styled-components';

export const DeityPage = ({
    deityName,
    title,
    text,
    images,
    backgroundColor,
}) => {
    return (
        <DeityPageContainer backgroundColor={backgroundColor}>
            <Title>{title}</Title>
            {/* take what im doing below here with a grain of salt bc ai helped me :p */}
            {text.map((paragraph, index) => (
                <div 
                    key={index}
                    className={`zigzag-row ${index % 2 === 0 ? 'left' : 'right'}`}
                >
                <div className="content">
                    <p>{paragraph}</p>
                </div>
                {images?.[index] && (
                    <div className="image">
                        <img src={images[index]} alt={`${deityName} - ${index + 1}`} />
                    </div>
                )}
            </div>
            ))}
             {/* take what im doing above here with a grain of salt bc ai helped me :p */}
        </DeityPageContainer>
    )
}

const DeityPageContainer = styled.div`
    background-color: ${props => props.backgroundColor};
    margin: 0 auto;

    .zigzag-row {
        display: flex;
        align-items: center;
        gap: 2rem;
        margin: 2rem 0;
    }
`

const Title = styled.div`
    color: black;
    font-size: 56px;
    font-family: sans-serif;
`