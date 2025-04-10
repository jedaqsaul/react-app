import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Nairobi", "Kisumu", "Mombasa", "Eldoret", "Naivasha"];
  return (
    <div>
      <ListGroup items={items} heading="Cities" />
    </div>
  );
}

export default App;
