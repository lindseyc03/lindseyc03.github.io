import { useState } from "react";

function ListGroup({ onItemSelect }) {
  let items = [
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
    <ul className="horizontal-list">
      {items.map((item, index) => (
        <li
          className={
            index === selectedIdx
              ? "list-group-item active"
              : "list-group-item"
          }
          key={item}
          onClick={() => {
            setSelectedIdx(index);
            onItemSelect(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default ListGroup;
