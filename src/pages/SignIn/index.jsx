import { useState } from 'react';
import axios from 'axios';
import setAuthToken from '../../services/token';

import {FiMail, FiLock } from 'react-icons/fi'

import { Link, Navigate } from 'react-router-dom' 

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignIn() {
    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3000/login', formData);
            console.log('Usuário logado com sucesso!', response.data);
        
            // Armazene o token no localStorage sem o prefixo "Bearer"
            localStorage.setItem('token', response.data.token); 
        
            // Configure o token nos cabeçalhos
            setAuthToken(response.data.token);
        
            toast.dark('Bem-vindo!');
        
            setTimeout(() => {
                setLoggedIn(true)
            }, 2000);
        } catch (error) {
            toast.error('Erro ao logar.');
            console.error('Erro ao logar:', error);
        }
    }

    if(loggedIn){
        return <Navigate to="home" />
    }

    return (
        <Container >
            <Form onSubmit={handleSubmit}>
                <h1>Supermarket</h1>
                <p>Application that simulates an online supermarket</p>

                <h2>Make your login</h2>

                <Input
                    placeholder="Email"
                    type="email"
                    icon={FiMail}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <Input
                    placeholder="Password"
                    type="password"
                    icon={FiLock}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />

                <Button title="Enter" type="submit" />

                <Link to="/register">
                    Create account
                </Link>
            </Form>
            <Background />
            <ToastContainer/>
        </Container>
    )
} 