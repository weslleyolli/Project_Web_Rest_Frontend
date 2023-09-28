import { Link } from "react-router-dom"

import { Button } from '../../components/Button'
import { Header } from '../../components/Header'
import { Input } from '../../components/Input'
import { Textarea } from '../../components/Textarea'

import { Section } from '../../components/Section'



import { Container, Form } from './styles'

export function New() {
    return (
        <Container>
            <Header />

            <main>
                <Form>
                    <header>
                        <h1>Create Product</h1>
                        <Link to="/">back</Link>
                    </header>

                    <Input placeholder="Product name" />
                    <Textarea placeholder="Expiration date" />

                    <div >
                        <h2>Value</h2>
                        <div></div>
                        <Input placeholder="$" />
                    </div>

                    <Section title="Type of Product">
                        <div>
                            <article className='tags'>
                                <label htmlFor="drink">Drink</label>
                                <input type="checkbox" name="drink" />
                            </article>
                            <article className='tags'>
                                <label htmlFor="drink">Butchers</label>
                                <input type="checkbox" name="drink" />
                            </article>
                            <article className='tags'>
                                <label htmlFor="drink">Fruits</label>
                                <input type="checkbox" name="drink" />
                            </article>
                        </div>
                    </Section>

                    <Button title='Save' />
                </Form>
            </main>
        </Container>
    )
}