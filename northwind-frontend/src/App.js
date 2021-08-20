import "./App.css";
import Dashboard from "./Layouts/Dashboard";
import "semantic-ui-css/semantic.min.css";
import { Container } from 'semantic-ui-react';
import Navi from "./Layouts/Navi"

function App() {
  return (
    <div className="App">
      <Navi/>
      <Container className="main">
        <Dashboard />
      </Container>
    </div>
  );
}

export default App;
