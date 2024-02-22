import { EventsItem, EventTitle, EventImage, EventDateTime, EventLink } from './card.styles'

function Card({ title, imageUrl, date, time, id}) {
    return (
        <EventsItem>
            <EventTitle>{ title }</EventTitle>
            <EventImage src={ imageUrl } alt={ title } />
            <br />
            <EventDateTime>Data e Hora: { date } - { time }</EventDateTime>
            <EventLink to={`/event/${id}`}>Mais informações</EventLink>
        </EventsItem>
    )
}

export default Card