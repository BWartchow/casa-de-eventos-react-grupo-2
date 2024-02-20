import { useState, useEffect } from 'react'
import axios from 'axios'

import { Container, Title, Slogan, 
        Events, EventsList, EventsItem, EventTitle, EventImage, EventDateTime
     } from './homepage.styles'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'

function Homepage () {

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
            <Container>
                <Title>Bem vindo a Casa de eventos!</Title>
                <Slogan>Essa é a casa de festas que realiza sonhos.</Slogan>
                <Events>
                    <EventsList>
                        { events.map((event, index) => (
                        <EventsItem key={index}>
                            <EventTitle>{ event.title }</EventTitle>
                            <EventImage src={ event.image_url } alt={ event.title } />
                            <br />
                            <EventDateTime>Data e Hora: { event.date } - { event.time }</EventDateTime>
                        </EventsItem>
                        ))}
                    </EventsList>
                </Events>
            </Container>
            <Footer />
        </>  
    )
}

export default Homepage