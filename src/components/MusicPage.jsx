import React from "react";
import styled from "styled-components";
import { NavMenu } from "./NavigationMenu";

export const MusicPage = ({ onNavigate }) => {
  return (
    <MusicPageContainer>
      <NavMenu onNavigate={onNavigate} />

      <Section>
        <FadeInElement>
          <Title>Songs of Veneration</Title>
          <SubTitle>Discovering the Songs of Orishas in Popular Music</SubTitle>
        </FadeInElement>
      </Section>

      {/* First Video Section */}
      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>Aguanile</SectionTitle>
              <VideoContainer>
                <iframe
                  width="100%"
                  height="500"
                  src="https://www.youtube.com/embed/5BPYFIWNehg"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </VideoContainer>
              <NotesContainer>
                <NotesTitle>What to Listen For:</NotesTitle>
                <NotesList>
                  <NoteItem>
                    Sounds of the jungle, possibly alluding to the African
                    origins of Salsa
                  </NoteItem>
                  <NoteItem>The chanting in the beginning "Yemaya</NoteItem>
                  <NoteItem>
                    Observe how the rhythms change to match different Orishas
                  </NoteItem>
                </NotesList>
              </NotesContainer>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>

      {/* Second Video Section */}
      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>Aguanile Part 2</SectionTitle>
              <VideoContainer>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/oaWKWaPJb8E?si=DtrvpGGW0hdzlkX4"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                />
              </VideoContainer>
              <NotesContainer>
                <NotesTitle>Key Elements:</NotesTitle>
                <NotesList>
                  <NoteItem>
                    1:30 he states "Yo soy hijo de Chango y tu hija de Yemayá"
                    (I am the son of Chango and you are the daughter of Yemayá)
                  </NoteItem>
                  <NoteItem>
                    Red and white album cover with flames matches the themes of
                    Chango
                  </NoteItem>
                  <NoteItem>
                    Pay attention to the Lucumí lyrics and their meanings
                  </NoteItem>
                </NotesList>
              </NotesContainer>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>

      {/* Third Video Section */}
      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>La Negra Tiene Tumbao</SectionTitle>
              <VideoContainer>
                <iframe
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/imeXSRNRMeg?si=Bo59G5Aq7ZrQIQ4s"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerpolicy="strict-origin-when-cross-origin"
                  allowfullscreen
                ></iframe>
              </VideoContainer>
              <NotesContainer>
                <NotesTitle>Key Elements:</NotesTitle>
                <NotesList>
                  <NoteItem>
                    There are no explicit mentions of Orishas in the lyrics but there are several visual references
                  </NoteItem>
                  <NoteItem>
                    2:10 Red and Black colors are used to reference Elegua as a reoccuring character
                  </NoteItem>
                  <NoteItem> Celia is constantly changing her outfit colors to match the colors of the Orishas (orange/gold, white, blue)</NoteItem>
                  <NoteItem>
                    At the end the main model is nude and fully gold while being
                    followed by admirers - referencing the colors of Oshun and
                    her position as the goddess of love and female sensuality
                  </NoteItem>
                </NotesList>
              </NotesContainer>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>
      {/* Spotify Playlist Section */}
      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <SectionTitle>Playlist of salsas, boogaloos, mambos and more that reference the Orishas</SectionTitle>
              <SpotifyContainer>
              <iframe
                src="https://open.spotify.com/embed/playlist/5tBaAh8pUGYYSjt7hKWdiF?utm_source=generator"
                  width="100%"
                  height="352"
                  frameBorder="0"
                  allowfullscreen=""
                  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                  loading="lazy"
                  style={{borderRadius: "12px"}}
                ></iframe>
              </SpotifyContainer>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>
    </MusicPageContainer>
  );
};

const MusicPageContainer = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #2c3e50);
  min-height: 100vh;
  overflow-y: auto;
  scroll-snap-type: y mandatory;
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
  max-width: 1200px;
  width: 90%;
`;

const Title = styled.h1`
  color: white;
  font-size: 4rem;
  font-weight: 500;
  text-align: center;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
`;

const SubTitle = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.8rem;
  text-align: center;
  margin-top: 1rem;
`;

const ContentCard = styled.div`
  background: rgba(0, 0, 0, 0.7);
  padding: 2rem;
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(8px);
`;

const SectionTitle = styled.h3`
  color: white;
  font-size: 2rem;
  margin-bottom: 1.5rem;
`;

const VideoContainer = styled.div`
  width: 100%;
  margin-bottom: 2rem;
  border-radius: 10px;
  overflow: hidden;
  aspect-ratio: 16 / 9;

  iframe {
    width: 100%;
    height: 100%;
  }
`;

const NotesContainer = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 1.5rem;
  border-radius: 8px;
`;

const NotesTitle = styled.h4`
  color: white;
  font-size: 1.3rem;
  margin-bottom: 1rem;
`;

const NotesList = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const NoteItem = styled.li`
  color: rgba(255, 255, 255, 0.9);
  font-size: 1.1rem;
  margin-bottom: 0.8rem;
  padding-left: 1.5rem;
  position: relative;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    color: rgba(255, 215, 0, 0.8);
  }
`;

const SpotifyContainer = styled.div`
  width: 100%;
  margin: 0 auto;
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

export default MusicPage;
