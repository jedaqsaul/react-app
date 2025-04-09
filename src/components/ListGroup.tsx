import { MouseEvent } from "react";

function ListGroup() {
  let items = ["Nairobi", "Kisumu", "Mombasa", "Eldoret", "Naivasha"];

  let selectedIndex = 0;
  // This function is called an event handler
  const handleClick = (event: MouseEvent) => console.log(event);
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
            onClick={handleClick}
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
