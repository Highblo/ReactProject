import styled from "styled-components";
import "./App.css";
import { ContactForm } from "./components/ContactForm";
import { ContactHeader } from "./components/ContactHeader";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <div>
      <Navigation />
      <SMain>
        <ContactHeader />
        <ContactForm />
      </SMain>
    </div>
  );
}

const SMain = styled.main`
  display: flex;
  flex-direction: column;
  height: calc(100vh - 72px);
`

export default App;
