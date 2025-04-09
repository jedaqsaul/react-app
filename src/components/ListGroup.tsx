import { useState } from "react";

function ListGroup() {
  let items = ["Nairobi", "Kisumu", "Mombasa", "Eldoret", "Naivasha"];

  //Hook
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>List</h1>
      {items.length === 0 && <p>No items found</p>}
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            key={item}
            onClick={() => {
              setSelectedIndex(index);
            }}
          >
            {item}
          </li>
        ))}
        ;
      </ul>
    </>
  );
}
export default ListGroup;
