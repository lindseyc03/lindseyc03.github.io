import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import ListGroup from "./ListGroup";
import { NavMenu } from "./NavigationMenu";
export const DeityPage = ({
  deityName,
  title,
  text,
  images,
  backgroundColor,
  paragraphStyle,
  spotifyTrackId,
  onItemSelect,
  onNavigate,
}) => {
  // Function to scroll to top smoothly
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Scroll to top when deity changes
  useEffect(() => {
    scrollToTop();
  }, [deityName]);

  return (
    <DeityPageContainer $color={backgroundColor}>
      <NavMenu onNavigate={onNavigate} />
      {/* Back Button */}
      <BackButton
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
          onItemSelect(null);
        }}
      >
        <BackArrow>←</BackArrow>
        Return to Overview
      </BackButton>

      {/* Title Section */}
      <Section>
        <FadeInElement>
          <Title>{title}</Title>
        </FadeInElement>
      </Section>

      {/* Spotify Section */}
      {spotifyTrackId && (
        <Section>
          <FadeInElement>
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
          </FadeInElement>
        </Section>
      )}

      {/* Main Image Section */}
      {images && images.length > 0 && (
        <Section>
          <FadeInElement>
            <MainImage src={images[0]} alt={`${deityName} - Main`} />
          </FadeInElement>
        </Section>
      )}

      {/* Content Sections */}
      {text.map((paragraph, index) => (
        <Section key={index}>
          <ContentRow>
            {index === 0 && images && images.length > 1 && (
              <FadeInElement>
                <SideImage src={images[1]} alt={`${deityName} - 2`} />
              </FadeInElement>
            )}
            <TextContainer>
              <FadeInElement>
                <Paragraph $style={paragraphStyle}>{paragraph}</Paragraph>
              </FadeInElement>
            </TextContainer>
            {index === 0 && images && images.length > 2 && (
              <FadeInElement>
                <SideImage src={images[2]} alt={`${deityName} - 3`} />
              </FadeInElement>
            )}
          </ContentRow>
        </Section>
      ))}

      {/* ListGroup Section */}
      <Section $height="50vh">
        <FadeInElement>
          <ListGroup onItemSelect={onItemSelect} />
        </FadeInElement>
      </Section>
    </DeityPageContainer>
  );
};

const DeityPageContainer = styled.div`
  background: ${(props) =>
    !props.$color || props.$color.length === 0
      ? "radial-gradient(circle at center, #333333, black)"
      : `radial-gradient(circle at center, ${props.$color[0]},  ${props.$color[1]})`};
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
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

const Title = styled.h1`
  color: white;
  font-size: 72px;
  font-weight: 500;
  font-family: var(--bs-body-font-family);
  line-height: 1.2;
  text-align: center;
`;

const MainImage = styled.img`
  width: 30vw;
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
  font-size: ${(props) => props.$style?.fontSize || "1.2rem"};
  color: ${(props) => props.$style?.color || "white"};
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 20px;
`;

const SpotifyText = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 20px;
  font-family: var(--bs-body-font-family);
`;

// New FadeInElement component with Intersection Observer
const FadeInElement = ({ children }) => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <FadeWrapper ref={ref} $inView={inView}>
      {children}
    </FadeWrapper>
  );
};

const FadeWrapper = styled.div`
  opacity: ${(props) => (props.$inView ? 1 : 0)};
  transform: translateY(${(props) => (props.$inView ? "0" : "20px")});
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
  will-change: opacity, transform;

  @media (prefers-reduced-motion: reduce) {
    transition: none;
    transform: none;
  }
`;

const BackButton = styled.button`
  position: fixed;
  top: 20px;
  left: 20px;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 25px;
  padding: 10px 20px;
  cursor: pointer;
  z-index: 1000;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--bs-body-font-family);
  font-size: 1rem;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.5);
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 0.9rem;
  }
`;

const BackArrow = styled.span`
  font-size: 1.2rem;
  line-height: 1;
`;

export default DeityPage;
