import styled from "styled-components";
import ListGroup from "./ListGroup";

export const DeityPage = ({
  deityName,
  title,
  text,
  images,
  backgroundColor,
  paragraphStyle,
  spotifyTrackId,
  onItemSelect,
}) => {
  return (
    <DeityPageContainer $color={backgroundColor}>
      {/* Title Section */}
      <Section>
        <Title>{title}</Title>
      </Section>

      {/* Spotify Section */}
      {spotifyTrackId && (
        <Section>
          <SpotifyEmbedContainer>
            <SpotifyText>
              Here is a snippet of a song dedicated to the Orisha while you
              scroll:
            </SpotifyText>
            <iframe
              src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
              width="300"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          </SpotifyEmbedContainer>
        </Section>
      )}

      {/* Main Image Section */}
      {images && images.length > 0 && (
        <Section>
          <MainImage src={images[0]} alt={`${deityName} - Main`} />
        </Section>
      )}

      {/* Content Sections */}
      {text.map((paragraph, index) => (
        <Section key={index}>
          <ContentRow>
            {index === 0 && images && images.length > 1 && (
              <SideImage src={images[1]} alt={`${deityName} - 2`} />
            )}
            <TextContainer>
              <Paragraph $style={paragraphStyle}>{paragraph}</Paragraph>
            </TextContainer>
            {index === 0 && images && images.length > 2 && (
              <SideImage src={images[2]} alt={`${deityName} - 3`} />
            )}
          </ContentRow>
        </Section>
      ))}

      {/* ListGroup Section */}
      <Section $height="50vh">
        <ListGroup onItemSelect={onItemSelect} />
      </Section>
    </DeityPageContainer>
  );
};

const DeityPageContainer = styled.div`
  background: ${props =>
    // If color array is empty or undefined, default to black
    !props.$color || props.$color.length === 0
      ? 'radial-gradient(circle at center, #333333, black)'
      : `radial-gradient(circle at center, ${props.$color[0]},  ${props.$color[1]})`
  };
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
`;


const Section = styled.section`
  min-height: ${(props) => props.$height || "100vh"};
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0px;
  scroll-snap-align: start;
`;

// Update other styled components
const Title = styled.h1`
  color: white; // Changed to white for better visibility on dark background
  font-size: 72px; // Made larger for fullscreen section
  font-weight: 500;
  font-family: var(--bs-body-font-family);
  line-height: 1.2;
  text-align: center;
`;

const MainImage = styled.img`
  width: 30vw; // Made larger for fullscreen section
  height: auto;
  object-fit: contain;
`;

const ContentRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  gap: 20px;
  max-width: 1200px;
`;

const TextContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
  text-align: justify;
  font-family: ${(props) =>
    props.$style?.fontFamily || "var(--bs-body-font-family)"};
  font-size: ${(props) => props.$style?.fontSize || "1.2rem"}; // Made larger
  color: ${(props) => props.$style?.color || "white"}; // Changed to white
  background-color: ${(props) =>
    props.$style?.backgroundColor || "transparent"};
  padding: ${(props) => props.$style?.padding || "0"};
  border-radius: ${(props) => props.$style?.borderRadius || "0"};
  width: 100%;
  line-height: 1.6;
`;

const SideImage = styled.img`
  width: 15vw;
  height: auto;
  object-fit: contain;
`;

const SpotifyEmbedContainer = styled.div`
  display: flex;
  flex-direction: column;  // Add this to stack items vertically
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

// Add this new styled component
const SpotifyText = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: var(--bs-body-font-family);
`;
