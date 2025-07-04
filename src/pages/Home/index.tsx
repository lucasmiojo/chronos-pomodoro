import { Container } from "../../components/Container";
import { MainTemplate } from "../../templates/MainTemplate";
import { CountDown } from "../../components/CountDown";
import { MainForm } from "../../components/MainForm";

function Home() {
  return (
    <MainTemplate>
      <Container>
        <CountDown />
      </Container>

      <Container>
        <MainForm />
      </Container>
    </MainTemplate>
  );
}

export { Home };
