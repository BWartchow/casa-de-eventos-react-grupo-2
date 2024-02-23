import { useState } from "react"
import axios from "axios"

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
			<h1>Adicionar evento</h1>
			<form onSubmit={handleSubmit}>
				<label>
					Titulo:
					<input
						type="text"
						name="title"
						value={event.title}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Data:
					<input
						type="text"
						name="date"
						value={event.date}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Horário:
					<input
						type="time"
						name="time"
						value={event.time}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Preço:
					<input
						type="number"
						name="price"
						value={event.price}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					URL da imagem:
					<input
						type="text"
						name="image_url"
						value={event.image_url}
						onChange={handleChange}
					/>
				</label>
				<br />
				<label>
					Evento privado:
					<input
						type="checkbox"
						name="private_event"
						checked={event.private_event}
						onChange={handleChange}
					/>
				</label>
				<br />
				<button type="submit">Adicionar evento</button>
			</form>
		</>
	)
}

export default AddEvent
