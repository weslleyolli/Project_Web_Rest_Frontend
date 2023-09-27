import { Container, Links, Content } from "./styles.js";

import { Button } from "../../components/Button";
import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details() {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <ButtonText title="Delete notes" />
          
          <h1>
            Introduction to react
          </h1>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Incidunt ab corporis qui maxime fuga unde minima dolorem vero
            laborum. Eligendi fugiat excepturi placeat, ad quaerat unde 
            mollitia dolorem ab suscipit?
          </p>
          <Section title="Utils links">
            <Links >
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
              <li>
                <a href="#">https://www.rocketseat.com.br/</a>
              </li>
            </Links>
          </Section>

          <Section title="Markers">
            <Tag title="express" />
            <Tag title="notejs" />
          </Section>

          <Button title="voltar" />
        </Content>
      </main>

    </Container>

  )
}
