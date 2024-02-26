import { Container, Title, FormInput, SendBtn } from './contact.styles'
import { useState } from "react"
import axios from "axios"
import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

function Contact () {
    
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
            if(contact.email.includes("@") && !(contact.name==null) && (contact.message.length>0)) {
              const response = await axios.post("http://localhost:3000/contacts", contact) 
              alert("Mensagem enviada com sucesso!")
            } else{
                setError("O email deve ser valido e os campos mensagem e nome não podem estar vazios");
                alert("O email deve ser valido e os campos mensagem e nome não podem estar vazios")
            }
        } catch (error){
            console.log(error)

        }
    }

    

    return (
        
        <>
            <Header />
            <Container>
                <Title>Página de Contato</Title>
                <FormInput
				type="text"
                name = 'name'
				placeholder="Nome"
                required:true
				value={contact.name}
				onChange={handleChange}
			/>
            <FormInput
				type="email"
				placeholder="Email"
                name = 'email'
                required:true
				value={contact.email}
				onChange={handleChange}
			/>    
            <FormInput
				type="text"
				placeholder="Mensagem"
                name = 'message'
                required:true
				value={contact.message}
				onChange={handleChange}
			/>
            <SendBtn onClick = {contactSender}>enviar</SendBtn>
            </Container>
            <Footer />
        </>  
    )
}

export default Contact