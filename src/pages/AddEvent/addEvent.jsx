import { useState } from "react"
import axios from "axios"

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { Container, Title, FormContent, FormLabel, FormInput, SendBtn } from './addEvent.styles'

const AddEvent = () => {
	const [event, setEvent] = useState({
		title: "",
		date: "",
		time: "",
		price: 0,
		image_url: "",
		private_event: false,
	})

	const handleChange = (event) => {
		const { name, value } = event.target
		setEvent((prevEvent) => ({
			...prevEvent,
			[name]: value,
		}))
	}

	const handleSubmit = async (evento) => {
		evento.preventDefault()
		try {
			const response = await axios.post("http://localhost:3000/events", event)
			console.log(response.data)
			alert("Evento adicionado com sucesso!")
		} catch (error) {
			console.error(error)
		}
	}

	return (
		<>
			<Header />
			<Container>
				<Title>Adicionar evento</Title>
				<FormContent onSubmit={handleSubmit}>
					<FormLabel>
						Titulo:
						<FormInput
							type="text"
							name="title"
							value={event.title}
							onChange={handleChange}
						/>
					</FormLabel>
					<FormLabel>
						Data:
						<FormInput
							type="text"
							name="date"
							value={event.date}
							onChange={handleChange}
						/>
					</FormLabel>
					<FormLabel>
						Horário:
						<FormInput
							type="time"
							name="time"
							value={event.time}
							onChange={handleChange}
						/>
					</FormLabel>
					<FormLabel>
						Preço:
						<FormInput
							type="number"
							name="price"
							value={event.price}
							onChange={handleChange}
						/>
					</FormLabel>
					<FormLabel>
						URL da imagem:
						<FormInput
							type="text"
							name="image_url"
							value={event.image_url}
							onChange={handleChange}
						/>
					</FormLabel>
					<FormLabel>
						Evento privado:
						<FormInput
							type="checkbox"
							name="private_event"
							checked={event.private_event}
							onChange={handleChange}
						/>
					</FormLabel>
					<SendBtn type="submit">Adicionar evento</SendBtn>
				</FormContent>
			</Container>
			<Footer />
		</>
	)
}

export default AddEvent
