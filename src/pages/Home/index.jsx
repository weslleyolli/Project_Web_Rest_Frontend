import { useState,  useEffect } from "react";
import { FiPlus, FiSearch } from "react-icons/fi"
import { useNavigate } from "react-router-dom";

import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Section } from "../../components/Section"
import { Product } from "../../components/Product"
import { ButtonText } from "../../components/ButtonText"
import { api } from "../../services/api";

import { Container, Brand, Menu, Search, Content, NewNote, ContainerProducts } from "./styles";

export function Home() {
    const [search, setSearch] = useState("")
    const [tags, setTags] = useState([])
    const [tagsSelected, setTagsSelected] = useState([])
    const [product, setProduct] = useState([])

    const navigate = useNavigate()

    function handleTagSelected(tagName) {
        if (tagName === "all") {
            return setTagsSelected([])
        }

        const alreadySelected = tagsSelected.includes(tagName)

        if (alreadySelected) {
            const filterTags = tagsSelected.filter(tag => tag !== tagName)
            setTagsSelected(filterTags)
        } else {
            setTagsSelected(prevState => [...prevState, tagName])
        }


    }

    function handleDetails(id) {
        navigate(`/details/${id}`)
    }

    useEffect(() => {
        async function fetchTags() {
            const response = await api.get("/type")
            setTags(response.data)
        }
        fetchTags()
    }, [])

    useEffect(() => {
        async function fetchNotes() {
            const response = await api.get(`/notes?title=${search}&type=${tagsSelected}`)
            setProduct(response.data)
        }

        fetchNotes()
    }, [tagsSelected, search])
    return (
        <Container>
            <Brand>
                <h1>Supermarket</h1>
            </Brand>

            <Header />

            <Menu>
                <li>
                    <ButtonText
                        title="All"
                        onClick={() => handleTagSelected("all")}
                        $isactive={tagsSelected.length === 0}
                    />
                </li>
                {
                    tags && tags.map(tag => (
                        <li key={String(tag.id)}>
                            <ButtonText
                                title={tag.name}
                                onClick={() => handleTagSelected(tag.name)}
                                $isactive={tagsSelected.includes(tag.name)}
                            />
                        </li>
                    ))

                }

            </Menu>

            <Search>
                <Input 
                    placeholder="Search for title"
                    icon={FiSearch} 
                    onChange={(e) => setSearch(e.target.value)}
                />
            </Search>

            <Content>
                <Section title="Products">
                    <ContainerProducts>
                        {
                            product.map(note => (
                                <Product
                                    key={String(note.id)}
                                    data={note}
                                    onClick={() => handleDetails(note.id)}
                                />
                            ))
                        }
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