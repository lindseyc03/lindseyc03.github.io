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
    <DeityPageContainer $backgroundColor={backgroundColor}>
      <ContentContainer>
      <Title>{title}</Title>
      {/* Main Image and Spotify Embed Row */}
      <ImageAndSpotifyContainer>
        {images && images.length > 0 && (
          <MainImage src={images[0]} alt={`${deityName} - Main`} />
        )}
        {/* Spotify Embed */}
        {spotifyTrackId && (
          <SpotifyEmbedContainer>
            <iframe
              src={`https://open.spotify.com/embed/track/${spotifyTrackId}?utm_source=generator&theme=0`}
              width="300"
              height="80"
              frameBorder="0"
              allow="encrypted-media"
            ></iframe>
          </SpotifyEmbedContainer>
        )}
      </ImageAndSpotifyContainer>

      {text.map((paragraph, index) => (
        <Paragraph key={index} $style={paragraphStyle}>
          {paragraph}
        </Paragraph>
      ))}
      {images && images.length > 1 && (
        <ImageGallery>
          {images.slice(1).map((image, index) => (
            <GalleryImage
              key={index}
              src={image}
              alt={`${deityName} - ${index + 2}`}
            />
          ))}
        </ImageGallery>
      )}
      </ContentContainer>
    {/* Add ListGroup at the bottom of DeityPage */}
    <ListGroup onItemSelect={onItemSelect} />
    </DeityPageContainer>
  );
};
const DeityPageContainer = styled.div`
  background-color: ${(props) => props.$backgroundColor};
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1; /* Ensures this takes up available space */
  align-items: center;
  justify-content: flex-start;
  padding: 20px;
  overflow: auto; /* Prevents overflow issues */
`;

const Title = styled.h1`
  color: black;
  font-size: 56px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 500;
  line-height: 1.2;
  margin-bottom: 10px;
  align-items: center;
`;

const MainImage = styled.img`
  width: 10vw;
  height: 10vw;
  object-fit: contain;
  margin-bottom: 10px;
`;
const ImageAndSpotifyContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px; /* Space between the row and the rest of the content */
`;
const Paragraph = styled.p`
  margin-bottom: 15px;
  text-align: justify;
  font-family: ${(props) => props.$style?.fontFamily || "inherit"};
  font-size: ${(props) => props.$style?.fontSize || "1rem"};
  color: ${(props) => props.$style?.color || "inherit"};
  background-color: ${(props) =>
    props.$style?.backgroundColor || "transparent"};
  padding: ${(props) => props.$style?.padding || "0"};
  border-radius: ${(props) => props.$style?.borderRadius || "0"};
  width: 70%;
`;

const ImageGallery = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 50px;
  margin-top: 20px;
`;

const GalleryImage = styled.img`
  width: 10vw;
  height: auto;
`;

const SpotifyEmbedContainer = styled.div`
  margin-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
