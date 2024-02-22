import { useState, useEffect } from 'react'
import axios from 'axios'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { 
        ListContainer,
        ListTitle,
        Table,
        TableHeader,
        HeaderRow,
        HeaderItem,
        Event,
        EventItem,
        RemoveButton,
        TableBody
     } from './eventsList.styles'

function EventsList() {

    const [events, setEvents] = useState([]);

    const deleteEvent = async (id) => {
        console.log(id)
    }

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
            <ListContainer>
                <ListTitle>Lista de Eventos cadastrados</ListTitle>
                <Table>
                    <TableHeader>
                        <HeaderRow>
                            <HeaderItem>Título</HeaderItem>
                            <HeaderItem>Data e Hora</HeaderItem>
                            <HeaderItem>Preço</HeaderItem>
                            <HeaderItem>URL da Imagem</HeaderItem>
                            <HeaderItem width="100px">É privado?</HeaderItem>
                            <HeaderItem>Ações</HeaderItem>
                        </HeaderRow>
                    </TableHeader>
                    <TableBody>
                        { events.map((event, index) => (
                        <Event key={index}>
                            <EventItem>{ event.title }</EventItem>
                            <EventItem>{ event.date } - { event.time }</EventItem>
                            <EventItem>{ event.price }</EventItem>
                            <EventItem>{ event.image_url }</EventItem>
                            <EventItem>{ event.private }</EventItem>
                            <EventItem>
                                <RemoveButton onClick={() => {deleteEvent(event.id)}}>Excluir</RemoveButton>
                            </EventItem>                           
                        </Event>
                        ))}
                    </TableBody>
                </Table>
            </ListContainer>
            <Footer />
        </>
    )
}
export default EventsList