import { FiFileText, FiLock, FiUser } from 'react-icons/fi'

import { Link } from 'react-router-dom'

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'

export function SignUp() {
    return (
        <Container >
            <Background />
            <Form>
                <h1>Supermarket</h1>
                <p>Application that simulates an online supermarket</p>

                <h2>Create your account</h2>

                <Input
                    placeholder="Name"
                    type="text"
                    icon={FiUser}
                />

                <Input
                    placeholder="Cpf"
                    type="text"
                    icon={FiFileText}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Register" />

                <Link to="/">
                    Return to login
                </Link>
            </Form>
        </Container>
    )
} 