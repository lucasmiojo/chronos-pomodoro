import "./styles/themes.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";
// import { Heading } from "./components/Heading";
// import { TimerIcon } from "lucide-react";

// <div>
//   <Heading>
//     <button>
//       <TimerIcon />
//     </button>
//   </Heading>
// </div>
function App() {
  return (
    <>
      <Container>
        <Heading>Logo</Heading>
      </Container>

      <Container>
        <Heading>Menu</Heading>
      </Container>
    </>
  );
}

export { App };
