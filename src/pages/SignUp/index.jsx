import React, { useState } from 'react';
import axios from 'axios';

import { FiFileText, FiLock, FiUser, FiMail, FiCalendar } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { Input } from '../../components/Input';
import { Button } from '../../components/Button';
import { Container, Form, Background } from './styles';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


export function SignUp() {
  // Declarando as variáveis
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [cpfOrMatricula, setCpfOrMatricula] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Definindo a função de envio dos dados para o backend
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Verificando o número de dígitos no input de CPF/Matricula
    const isCpf = cpfOrMatricula.length === 11;
    const isMatricula = cpfOrMatricula.length === 14;

    // Se não tiver 11 nem 14 dígitos
    if (!isCpf && !isMatricula) {
      toast.error('CPF/Matrícula deve ter 11 ou 14 dígitos.');
      return;
    }

    const formData = {
      name,
      email,
      age,
      password,
    };

    if (isCpf) {
      // Se for CPF, adicionando ao formData como 'cpf'
      formData.cpf = cpfOrMatricula;
    } else {
      // Se for matrícula, adicionando ao formData como 'matricula'
      formData.matricula = cpfOrMatricula;
    }

    // Criando o usuário
    try {
      const response = await axios.post('http://localhost:3000/create', formData);
      console.log('Usuário criado com sucesso:', response.data);
      toast.success('Usuário criado com sucesso!');

      // Definindo um tempo de 2s antes de enviar para a páigna de login
      setTimeout(() => {
        navigate('/');
      }, 2000);

    } catch (error) {
      toast.error('Erro ao criar o usuário')
      console.error('Erro ao criar usuário:', error);
    }
  };

  return (
    <Container>
      <Background />
      <Form onSubmit={handleSubmit}>
        <h1>Supermarket</h1>
        <p>Application that simulates an online supermarket</p>

        <h2>Create your account</h2>

        <Input
          placeholder="Name"
          type="text"
          icon={FiUser}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          placeholder="Email"
          type="email"
          icon={FiMail}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          placeholder="Age"
          type="text"
          icon={FiCalendar}
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <Input
          placeholder="CPF/Matrícula"
          type="text"
          icon={FiFileText}
          value={cpfOrMatricula}
          onChange={(e) => setCpfOrMatricula(e.target.value)}
        />
        <Input
          placeholder="Password"
          type="password"
          icon={FiLock}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button title="Register" type="submit" />

        <Link to="/">Return to login</Link>
      </Form>
      <ToastContainer/>
    </Container>
  );
}
