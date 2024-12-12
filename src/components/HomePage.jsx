import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import { NavMenu } from './NavigationMenu';


export const HomePage = ({ onNavigate }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const audioRef = useRef(null);

    const toggleAudio = () => {
      if (audioRef.current) {
        if (isPlaying) {
          audioRef.current.pause();
        } else {
          audioRef.current.play();
        }
        setIsPlaying(!isPlaying);
      }
    };
    return (
    <HomeContainer>
      <NavMenu onNavigate={onNavigate} />
      {/* Add the audio element */}
      <audio
        ref={audioRef}
        loop
        src="src/assets/La Vida Es Un Carnaval - Celia Cruz.mp3"
      />
       {/* Add the audio control button */}
       <AudioControl onClick={toggleAudio}>
        <AudioIcon>{isPlaying ? '🔊' : '🔈'}</AudioIcon>
        {isPlaying ? 'Pause Music' : 'Play Music'}
      </AudioControl>
      <Section>
        <FadeInElement>
          <MainTitle>
            <Accent>Salsa</Accent> • <Accent>Soca</Accent> • <Accent>Reggae</Accent>
          </MainTitle>
          <SubTitle>Final Project</SubTitle>
        </FadeInElement>
      </Section>

      <Section>
        <ContentWrapper>
          <FadeInElement>
            <ContentCard>
              <IntroText>
                For this project we will be exploring Santería, its history and the music associated with it. Although we cannot cover all of the history and music of this Afro-Cuban spiritual tradition, I hope to provide an insightful overview of it.
              </IntroText>
            </ContentCard>
          </FadeInElement>
        </ContentWrapper>
      </Section>

      <Section>
        <NavigationContainer>
          <FadeInElement>
            <NavCircle onClick={() => onNavigate('santeria')}>
              <CircleContent>
                <CircleIcon>🌟</CircleIcon>
                <CircleText>Explore Santería</CircleText>
              </CircleContent>
            </NavCircle>
          </FadeInElement>

          <FadeInElement>
            <NavCircle onClick={() => onNavigate('music')}>
              <CircleContent>
                <CircleIcon>🎵</CircleIcon>
                <CircleText>Explore Music</CircleText>
              </CircleContent>
            </NavCircle>
          </FadeInElement>
        </NavigationContainer>
      </Section>
    </HomeContainer>
  );
};

const HomeContainer = styled.div`
  background: linear-gradient(135deg, #1a1a1a, #2c3e50);
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
    background: radial-gradient(circle at center, transparent, rgba(0, 0, 0, 0.7));
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

const MainTitle = styled.h1`
  color: white;
  font-size: clamp(3rem, 8vw, 6rem);
  font-weight: 300;
  text-align: center;
  letter-spacing: 2px;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  color: rgba(255, 255, 255, 0.8);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 300;
  text-align: center;
  letter-spacing: 4px;
  text-transform: uppercase;
`;

const Accent = styled.span`
  background: linear-gradient(120deg, #ffd700, #ff8c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: 500;
`;

const ContentWrapper = styled.div`
  max-width: 800px;
  width: 90%;
  margin: 0 auto;
`;

const ContentCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  padding: 3rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
`;

const IntroText = styled.p`
  color: white;
  font-size: clamp(1.2rem, 2.5vw, 1.8rem);
  line-height: 1.6;
  text-align: center;
  font-weight: 300;
`;

const NavigationContainer = styled.div`
  display: flex;
  gap: 4rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding: 2rem;
`;

const NavCircle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  cursor: pointer;
  transition: all 0.5s ease;
  animation: float 3s ease-in-out infinite;

  &:hover {
    transform: scale(1.1);
    border-radius: 30%;
    border-color: rgba(255, 215, 0, 0.8);
    background: rgba(255, 215, 0, 0.2);
  }

  @keyframes float {
    0% {
      transform: translateY(0px);
    }
    50% {
      transform: translateY(-20px);
    }
    100% {
      transform: translateY(0px);
    }
  }
`;

const CircleContent = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

const CircleIcon = styled.span`
  font-size: 2.5rem;
`;

const CircleText = styled.span`
  color: white;
  font-size: 1.2rem;
  text-align: center;
  padding: 0 1rem;
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

// First, add these new styled components
const AudioControl = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
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
`;

const AudioIcon = styled.span`
  font-size: 1.2rem;
`;

export default HomePage;
