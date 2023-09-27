import { FiPlus, FiSearch } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { ButtonText } from "../../components/ButtonText"

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Rocket Notes</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="Todos" isActive={true} />
                </li>
                <li>
                    <ButtonText title="React" />
                </li>
                <li>
                    <ButtonText title="NodeJS" />
                </li>

            </Menu>

            <Search>
                <Input placeholder="Search for title" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="minhas notas">
                    <Note data={{
                        title: 'React',
                        tags: [
                            { id: '1', name: 'React' },
                            { id: '2', name: 'Rocketseat' }
                        ]
                    }}
                    />
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus />
                Create Note
            </NewNote>
        </Container>
    )

}