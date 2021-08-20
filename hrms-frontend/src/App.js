import "./App.css";
import "semantic-ui-css/semantic.min.css";
import { Container } from "semantic-ui-react";

import Navbar from "./layouts/Navbar";
import Footer from './layouts/Footer';
function App() {
  return (
    <div className="App">
      <Container className="main">
        <Navbar/>
       
        
      </Container>
      <Footer className="footer"> </Footer>
      
    </div>
  );
}

export default App;
