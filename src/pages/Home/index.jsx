import { FiPlus, FiSearch } from "react-icons/fi"

import { Container, Brand, Menu, Search, Content, NewNote, ContainerProducts } from "./styles";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Note } from "../../components/Note"
import { ButtonText } from "../../components/ButtonText"

export function Home() {
    return (
        <Container>
            <Brand>
                <h1>Supermarket</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText title="All Itens" isActive={true} />
                </li>
                <li>
                    <ButtonText title="Promotions" />
                </li>
                <li>
                    <ButtonText title="Butchers" />
                </li>
                <li>
                    <ButtonText title="Fruits" />
                </li>
                <li>
                    <ButtonText title="Drinks" />
                </li>

            </Menu>

            <Search>
                <Input className="p-10" placeholder="Search for title" icon={FiSearch} />
            </Search>

            <Content>
                <Section title="Products">
                    <ContainerProducts>
                        <Note data={{
                            title: 'Coffee',
                            description: 'Expiration date: 25/11/2023',
                            price: "$ 4",
                        }}
                        />
                        <Note data={{
                            title: 'Coffee',
                            description: 'Expiration date: 25/11/2023',
                            price: "$ 4",
                        }}
                        />
                        <Note data={{
                            title: 'Coffee',
                            description: 'Expiration date: 25/11/2023',
                            price: "$ 4",
                        }}
                        />
                        <Note data={{
                            title: 'Coffee',
                            description: 'Expiration date: 25/11/2023',
                            price: "$ 4",
                        }}
                        />
                        <Note data={{
                            title: 'Coffee',
                            description: 'Expiration date: 25/11/2023',
                            price: "$ 4",
                        }}
                        />
                        <Note data={{
                            title: 'Coffee',
                            description: 'Expiration date: 25/11/2023',
                            price: "$ 4",
                        }}
                        />
                        <Note data={{
                            title: 'Coffee',
                            description: 'Expiration date: 25/11/2023',
                            price: "$ 4",
                        }}
                        />
                    </ContainerProducts>
                </Section>
            </Content>

            <NewNote to='/new'>
                <FiPlus />
                Create products
            </NewNote>
        </Container>
    )

}