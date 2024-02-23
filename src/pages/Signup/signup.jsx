import { useState } from "react"
import axios from "axios"

import {
	SignupContainer,
	SignupContent,
	SignupBox,
	SignupTitle,
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
	CheckboxContainer,
} from "./signup.styles"

function Signup() {
	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
	})
	const [isAdmin, setIsAdmin] = useState(false)
	const [error, setError] = useState("")

	const handleChange = (e) => {
		const { name, value } = e.target
		setUser((prevUser) => ({
			...prevUser,
			[name]: value,
		}))
	}

	const RegisterUser = async () => {
		try {
			const newUser = {
				...user,
				isAdmin: isAdmin,
			}
			console.log(newUser)

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
		<SignupContainer>
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
			<SignupContent>
				<SignupBox>
					<SignupTitle>Cadastrar Usuário</SignupTitle>
					<FormBox>
						<FormItem>
							<FormLabel>Nome:</FormLabel>
							<FormInput
								type="text"
								placeholder="Nome"
								name="name"
								value={user.name}
								onChange={handleChange}
							/>
						</FormItem>
						<FormItem>
							<FormLabel>Email:</FormLabel>
							<FormInput
								type="text"
								placeholder="Email"
								name="email"
								value={user.email}
								onChange={handleChange}
							/>
						</FormItem>
						<FormItem>
							<FormLabel>Senha:</FormLabel>
							<FormInput
								type="password"
								name="password"
								value={user.password}
								onChange={handleChange}
							/>
						</FormItem>
						<FormItem>
							<CheckboxContainer>
								<FormLabel>É Admin?</FormLabel>
								<FormInputCheckbox
									type="checkbox"
									value={user.isAdmin}
									onChange={() => {
										setIsAdmin(!isAdmin)
									}}
								/>
							</CheckboxContainer>
						</FormItem>
						<FormItem>
							<FormButton onClick={RegisterUser}>Registrar</FormButton>
						</FormItem>
						{error && <ErrorMessage>{error}</ErrorMessage>}
					</FormBox>
				</SignupBox>
			</SignupContent>
		</SignupContainer>
	)
}

export default Signup
