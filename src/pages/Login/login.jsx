import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

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
            if (userFound) {
                navigate('/admin');
            } else {
                setError('Nome ou senha inválido');
            }
        } catch (error) {
            console.error('Erro ao buscar eventos', error);
        }
    };
    return (
        <div>
            <h1>Login</h1>
            <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} />
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} />
            <button onClick={DoTheLogin}>Entrar</button>
            {error && <p>{error}</p>}
        </div>
    )
}

export default Login