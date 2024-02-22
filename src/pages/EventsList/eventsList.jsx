import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

function EventsList() {

    const [events, setEvents] = useState([]);

    useEffect(() => {
        const listEvents = async () => {
            try {
                const response = await axios.get('http://localhost:3000/events');
                setEvents(response.data);
            } catch (error) {
                console.error('Erro ao buscar eventos', error);
            }
        }
        listEvents();
    })
    return (
        <>
            <Header />
            <h1>Área administrativa</h1>
            <h2>Lista de Eventos</h2>
            { events.map((event, index) => (
            <div key={index}>
                <h3>{ event.title }</h3>
                <img src={ event.image_url } alt={ event.title } />
                <br />
                <p>Data e Hora: { event.date } - { event.time }</p>
            </div>
            ))}
            <Footer />
        </>
    )
}
export default EventsList