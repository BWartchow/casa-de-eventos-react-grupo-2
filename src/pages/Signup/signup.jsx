import { useState } from "react"
import axios from "axios"

import {
	LoginContainer,
	LoginContent,
	LoginBox,
	LoginTitle,
	FormBox,
	FormItem,
	FormLabel,
	FormInput,
	FormInputCheckbox,
	FormButton,
	Sidebar,
	SidebarContainer,
	LogoContainer,
	Logo,
	ErrorMessage,
} from "../Login/login.styles"

function Signup() {
	const [name, setName] = useState("")
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [isAdmin, setIsAdmin] = useState(false)
	const [error, setError] = useState("")

	const RegisterUser = async () => {
		try {
			const newUser = {
				name: name,
				email: email,
				password: password,
				isAdmin: isAdmin,
			}

			const responseUsers = await axios.get("http://localhost:3000/users")
			const users = responseUsers.data
			const emailRegistered = users.find((user) => user.email == newUser.email)
			console.log(responseUsers.data)

			if (emailRegistered) {
				setError("Email já registrado")
			} else {
				const response = await axios.post("http://localhost:3000/users", newUser)
				console.log(response.data)
				alert("Usuário adicionado com sucesso!")
			}
		} catch (error) {
			console.error("Erro ao cadastrar usuario", error)
		}
	}

	return (
		<LoginContainer>
			<Sidebar>
				<SidebarContainer>
					<LogoContainer>
						<Logo
							src="../images/logo.svg"
							alt="Logomarca da casa de eventos"
						/>
					</LogoContainer>
				</SidebarContainer>
			</Sidebar>
			<LoginContent>
				<LoginBox>
					<LoginTitle>Cadastrar Usuário</LoginTitle>
					<FormBox>
						<FormItem>
							<FormLabel>Nome:</FormLabel>
							<FormInput
								type="text"
								placeholder="Nome"
								value={name}
								onChange={(e) => setName(e.target.value)}
							/>
						</FormItem>
						<FormItem>
							<FormLabel>Email:</FormLabel>
							<FormInput
								type="text"
								placeholder="Email"
								value={email}
								onChange={(e) => setEmail(e.target.value)}
							/>
						</FormItem>
						<FormItem>
							<FormLabel>Senha:</FormLabel>
							<FormInput
								type="password"
								placeholder=""
								value={password}
								onChange={(e) => setPassword(e.target.value)}
							/>
						</FormItem>
						<FormItem>
							<FormLabel>É Admin?</FormLabel>
							<FormInputCheckbox
								type="checkbox"
								value={isAdmin}
								onChange={() => setIsAdmin(!isAdmin)}
							/>
						</FormItem>
						<FormItem>
							<FormButton onClick={RegisterUser}>Registrar</FormButton>
						</FormItem>
						{error && <ErrorMessage>{error}</ErrorMessage>}
					</FormBox>
				</LoginBox>
			</LoginContent>
		</LoginContainer>
	)
}

export default Signup
