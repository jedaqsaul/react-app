import Alert from "./components/Alert";
import MyButton from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  return (
    <div>
      <MyButton onClick={() => console.log("Clicked")}>
        This is my button
      </MyButton>
    </div>
  );
}

export default App;
