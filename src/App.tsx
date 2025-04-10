import { useState } from "react";
import Alert from "./components/Alert";
import MyButton from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);
  return (
    <div>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>My Alert</Alert>
      )}
      <MyButton onClick={() => setAlertVisibility(true)}>
        This is my button
      </MyButton>
    </div>
  );
}

export default App;
