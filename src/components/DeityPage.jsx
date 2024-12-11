import styled from "styled-components";

export const DeityPage = ({
  deityName,
  title,
  text,
  images,
  backgroundColor,
}) => {
  console.log(images);
  return (
    <DeityPageContainer $backgroundColor={backgroundColor}>
      <Title>{title}</Title>
      {/* take what im doing below here with a grain of salt bc ai helped me :p */}
      {text.map((paragraph, index) => (
        <div
          key={index}
          className={`zigzag-row ${index % 2 === 0 ? "left" : "right"}`}
        >
          <div className="content">
            <p>{paragraph}</p>
          </div>
          {images?.[index] && (
            <div className="image-container">
              <img src={images[index]} className="image" alt={`${deityName} - ${index + 1}`} />
            </div>
          )}
        </div>
      ))}
      {/* take what im doing above here with a grain of salt bc ai helped me :p */}
    </DeityPageContainer>
  );
};

const DeityPageContainer = styled.div`
  background-color: ${(props) => props.$backgroundColor};
  width: 100vw;
  min-height: 100vh;
  margin: 0;
  padding: 0;

  .zigzag-row {
    display: flex;
    align-items: center;
    gap: 2rem;
    margin: 2rem 0;
  }
`;

const Title = styled.div`
  color: black;
  font-size: 56px;
  font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue",
    "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  font-weight: 500;
  line-height: 1.2;
`;
