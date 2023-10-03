import React, { useState } from 'react';
import axios from 'axios';
import setAuthToken from '../../services/token';

import {FiMail, FiLock } from 'react-icons/fi'

import { Link, useNavigate } from 'react-router-dom' 

import { Input } from '../../components/Input'
import { Button } from '../../components/Button'

import { Container, Form, Background } from './styles'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function SignIn() {
    const [email, setEmail] =  useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password,
        };

        try {
            const response = await axios.post('http://localhost:3000/login', formData);
            console.log('Usuário logado com sucesso!', response.data);
            
            // Armazene o token no localStorage
            localStorage.setItem('token', 'Bearer ' + response.data.token);
            
            // Configure o token nos cabeçalhos
            setAuthToken(response.data.token);
            
            toast.success('Bem-vindo!');

            setTimeout(() => {
                navigate('home');
            }, 2000);
        } catch (error) {
            toast.error('Erro ao logar.');
            console.error('Erro ao logar:', error);
        }
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