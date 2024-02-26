import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {
    LoginContainer,
    Sidebar,
    SidebarContainer,
    LogoContainer,
    Logo,
    LoginContent,
    LoginBox,
    LoginTitle,
    FormBox,
    FormItem,
    FormLabel,
    FormInput,
    FormButton,
} from './login.styles';

const Login = () => {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    const DoLogin = async () => {
    try {
        const response = await axios.get('http://localhost:3000/users');
        const users = response.data;
        const foundedUser = users.find(users => users.name === name && users.password === password);
        if (foundedUser) {
            toast.success('Login efetuado com sucesso!', {
                position: "top-right",
                autoClose: 3000,
            });
            setTimeout(() => {
                if (foundedUser.isAdmin) {
                    navigate('/admin');
                } else {
                    navigate('/');
                }
            }, 3000);

        } else {
            toast.error('Nome ou senha inválidos', {
                position: "top-right",
                autoClose: 5000,
            });
        }
    } catch (error) {
        console.error('Erro ao buscar eventos', error);
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
                            <FormButton onClick={DoLogin}>Entrar</FormButton>
                        </FormItem>
                        <ToastContainer />
                    </FormBox>
                </LoginBox>
            </LoginContent>
        </LoginContainer>
    );
};

export default Login;