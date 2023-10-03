import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import { api } from "../../services/api"

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'
import { TagItem } from '../../components/TagItem'

import { Section } from '../../components/Section'



import { Container, Form } from './styles'

export function New() {
    const [title, setTitle] = useState("")
    const [Expiration, setExpiration] = useState("")
    const [value, setValue] = useState("")

    const [tags, setTags] = useState([])
    const [newTag, setNewTag] = useState("")

    const navigate = useNavigate()

    function handleRemoveTags(deleted) {
        setTags(prevState => prevState.filter(tag => tag !== deleted))
    }

    function handleAddTags() {
        setTags(prevState => [...prevState, newTag])
        setNewTag("")
    }

    async function handleNewNote() {
        if (!title) {
            return alert("Enter a title of note")
        }
        if (newTag) {
            return alert("you left a tag in the field to add, but didn't add it")
        }

        await api.post('/notes', {
            title,
            Expiration,
            value,
            tags,
        })

        console.log(setTitle)

        alert("Note Created")
        navigate(-1)
    }

    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Product</h1>
                        <Link to="/">back</Link>
                    </header>

                    <Input
                        placeholder="Product name"
                        onChange={e => setTitle(e.target.value)}
                    />
                    <Textarea
                        placeholder="Expiration date"
                        onChange={e => setExpiration(e.target.value)}

                    />

                    <div >
                        <h2>Value and Image of product</h2>
                        <div></div>
                        <article>
                            <Input
                                placeholder="$"
                                onChange={e => setValue(e.target.value)}
                            />
                            <Input type="file" />
                        </article>
                    </div>

                    <Section title="Type of Product">
                        <div className='tags'>
                            {
                                tags.map((tag, index) => (
                                    <TagItem
                                        key={String(index)}
                                        value={tag}
                                        onClick={() => handleRemoveTags(tag)}
                                    />
                                ))
                            }
                            <TagItem
                                isNew
                                placeholder="New tag"
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTags}
                            />
                        </div>
                    </Section>

                    <Button title='Save' onClick={handleNewNote} />
                </Form>
            </main>
        </Container>
    )
}