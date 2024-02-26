import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

import {
    LoginContainer,
    LoginContent,
    LoginBox,
    LoginTitle,
    FormBox,
    FormItem,
    FormLabel,
    FormInput,
    FormButton,
    Sidebar,
    SidebarContainer,
    LogoContainer,
    Logo,
    ErrorMessage,
    AddButton
   } from './login.styles'

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const DoTheLogin = async () => {
        try {
            const response = await axios.get('http://localhost:3000/users');
            const users = response.data;
            const userFound = users.find(user => user.name === name && user.password === password);
            // TO-DO Fazer lógica de navegar pra homepage ou pra admin conforme categoria usuário
            if (userFound) {
                navigate('/admin');
            } else {
                setError('Nome ou senha inválido');
            }
        } catch (error) {
            console.error('Erro ao buscar usuário', error);
        }
    };
    return (
        <LoginContainer>
        <Sidebar>
            <SidebarContainer>
                <LogoContainer>
                    <Logo src="../images/logo.svg" alt="Logomarca da casa de eventos" />
                </LogoContainer>
            </SidebarContainer>
        </Sidebar>
        <LoginContent>
            <LoginBox>
                <LoginTitle>Área de login</LoginTitle>
                <FormBox>
                    <FormItem>
                        <FormLabel>Nome:</FormLabel>
                        <FormInput type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
                    </FormItem>
                    <FormItem>
                        <FormLabel>Senha:</FormLabel>
                        <FormInput type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
                    </FormItem>
                    <FormItem>
                        <FormButton onClick={DoTheLogin}>Entrar</FormButton>
                        <AddButton to="/signup">Cadastre-se</AddButton>
                    </FormItem>
                    {error && <ErrorMessage>{error}</ErrorMessage>}
                </FormBox>
            </LoginBox>
        </LoginContent>          
        </LoginContainer>
    )
}

export default Login