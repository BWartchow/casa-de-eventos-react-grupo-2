import { Container, Title, FormInput, SendBtn } from './contact.styles'
import { useState } from "react"
import axios from "axios"
import Cabecalho from '../../components/Header/header'
import Rodape from '../../components/Footer/footer'
function Contato () {
    // AQUI ENTRARIAM AS FUNÇÕES JAVASCRIPT, HOOKS, ETC...
    const [contact, setContact]= useState({
        name: "",
        email:"",
        message:"",
    })
    const [error, setError] = useState("")

    const handleChange = (e) => {
		const { name, value } = e.target;
		setContact((prevContact) => ({
			...prevContact,
			[name]: value,
		}));
	}
    const contactSender = async () => {
        try{
            if(contact.email.includes("@") && !(contact.name==null)){
              const response = await axios.post("http://localhost:3000/contacts", contact) 
            } else{
                setError("O email deve ser valido e o nome nao pode estar vazio");
            }
        } catch (error){
            alert(error)

        }
    }

    

    return (
        // AQUI EU COLOCO TUDO QUE EU QUER EXIBIR NA TELA
        <>
            <Cabecalho />
            <Container>
                <Title>Página de Contato</Title>
                <FormInput
				type="text"
                name = 'name'
				placeholder="Nome"
				value={contact.name}
				onChange={handleChange}
			/>
            <FormInput
				type="text"
				placeholder="Email"
                name = 'email'
				value={contact.email}
				onChange={handleChange}
			/>    
            <FormInput
				type="text"
				placeholder="Mensagem"
                name = 'message'
				value={contact.message}
				onChange={handleChange}
			/>
            <SendBtn onClick = {contactSender}>enviar</SendBtn>
            </Container>
            <Rodape />
        </>  
    )
}

export default Contato