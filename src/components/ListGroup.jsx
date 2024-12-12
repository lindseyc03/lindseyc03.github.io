import { useState } from "react";
import styled from "styled-components";

function ListGroup({ onItemSelect }) {
  const items = [
    "Elegua",
    "Ogun",
    "Ochosi",
    "Obatala",
    "Oya",
    "Oshun",
    "Yemayá",
    "Chango",
  ];
  const [selectedIdx, setSelectedIdx] = useState(-1);

  return (
    <HorizontalList>
      {items.map((item, index) => (
        <ListItem
          key={item}
          $isActive={index === selectedIdx}
          onClick={() => {
            setSelectedIdx(index);
            onItemSelect(item);
          }}
        >
          {item}
        </ListItem>
      ))}
    </HorizontalList>
  );
}

const HorizontalList = styled.ul`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0;
  list-style-type: none;
  margin: 0;
  padding-bottom: 20px;
  gap: 10px;
`;

const ListItem = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  border: 1px solid ${props => props.$isActive ? 'rgba(255, 215, 0, 0.8)' : 'rgba(255, 255, 255, 0.3)'};
  border-radius: 5px;
  background-color: ${props => props.$isActive ? 'rgba(255, 215, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  color: white;
  font-size: 16px;
  font-weight: bold;
  font-family: var(--bs-body-font-family);
  transition: all 0.3s ease;

  &:hover {
    background-color: ${props => props.$isActive ? '#007bff' : 'rgba(255, 255, 255, 0.2)'};
    border-color: ${props => props.$isActive ? '#007bff' : 'rgba(255, 255, 255, 0.5)'};
  }
`;

export default ListGroup;
