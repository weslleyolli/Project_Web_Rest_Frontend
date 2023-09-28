import { Container, Content } from "./styles.js";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <ButtonText title="Delete Product" />
            <ButtonText title="Create promotion" />
          </div>

          <Section title="Product">
            <p>Coffe</p>
          </Section>

          <Section title="Expiration date">
            <p>25/11/2023</p>
          </Section>

          <Section title="Value">
            <p>$4</p>
          </Section>

          <Button title="Back" />
        </Content>
      </main>

    </Container>

  )
}
