import React from "react";
import styled from "styled-components";
import ListGroup from "./ListGroup";
import deityData from '../data/deityData';

export const Home = ({ onItemSelect }) => {
  return (
    <HomeContainer>
      <Section>
        <FadeInElement>
          <Title>The Orishas of Santería</Title>
        </FadeInElement>
      </Section>

      {/* Spotify Section */}
      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>Listen Closely</SectionTitle>
              <SpotifyContainer>
                <iframe
                  src="https://open.spotify.com/embed/track/3bLTJlhvcWnoOSspLqvN96?utm_source=generator&theme=0"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowFullScreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{ borderRadius: "12px" }}
                />
              </SpotifyContainer>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>Origins & Heritage</SectionTitle>
              <ContentText>
                Santería, also known as Regla de Ocha or the Lucumí religion,
                originated from the Yoruba people of West Africa. Through the
                resilience of the Lucumí people during colonial times, these
                sacred traditions were preserved and adapted, creating a rich
                spiritual legacy that continues to thrive today. The religion
                survived through the formation of religious communities,
                lineages, and house-temples (ilés), where traditional practices
                were maintained and passed down through generations.
              </ContentText>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>The Divine Forces</SectionTitle>
              <ContentText>
                The Orishas are powerful intermediaries between Olodumare (God)
                and humanity. They are semi-divine beings associated with forces
                of nature, human aspects, and life experiences. Each Orisha
                possesses unique characteristics, powers, and domains of
                influence. They guide, protect, and help shape the destiny of
                their followers while maintaining balance in the natural world.
              </ContentText>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>Living Tradition</SectionTitle>
              <ContentText>
                Today, the Orishas continue to be honored through sacred
                ceremonies, offerings, and divination practices. Each initiate
                is crowned with their tutelary Orisha, becoming a living
                representative of that divine energy. This tradition adapts
                while maintaining its core principles, allowing practitioners to
                connect with these ancient forces in contemporary times.
              </ContentText>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>

      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>Explore the Orishas</SectionTitle>
              <ContentText className="text-center">
                Select an Orisha below to learn more about their attributes,
                stories, and significance:
              </ContentText>
              <ListGroup onItemSelect={onItemSelect} />
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>
    </HomeContainer>
  );
};

// Replace the existing HomeContainer styled component with this version:
const HomeContainer = styled.div`
  background: linear-gradient(
    135deg,
    ${() => deityData.Elegua.color[0]} 0%,
    ${() => deityData.Ogun.color[0]} 20%,
    ${() => deityData.Ochosi.color[0]} 40%,
    ${() => deityData.Oshun.color[0]} 60%,
    ${() => deityData.Yemayá.color[0]} 80%,
    ${() => deityData.Chango.color[0]} 100%
  );
  min-height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
  position: relative;

  &::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0, 0, 0, 0.25);
    pointer-events: none;
  }
`;

const Section = styled.section`
  min-height: 100vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  scroll-snap-align: start;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 100%;
`;

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 2rem;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const ContentCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  margin-bottom: 2rem;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
`;

const SectionTitle = styled.h2`
  color: white;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 1rem;
`;

const ContentText = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.125rem;
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const FadeInElement = styled.div`
  opacity: 0;
  transform: translateY(20px);
  animation: fadeIn 0.6s ease-out forwards;

  @keyframes fadeIn {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    animation: none;
    opacity: 1;
    transform: none;
  }
`;
const SpotifyContainer = styled.div`
  width: 100%;
  max-width: 700px;
  margin: 0 auto;
  padding: 1rem 0;
`;
export default Home;
