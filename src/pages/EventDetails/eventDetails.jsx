import { useParams } from 'react-router-dom'

import Header from '../../components/Header/header'
import Footer from '../../components/Footer/footer'
import { Container } from './eventsDetails.styles';

function EventDetails () {

    const { id } = useParams();

    return (
        <>
            <Header />
            <Container>
                <h1>Detalhes do evento { id }</h1>
            </Container>
            <Footer />
        </>
    )

} 

export default EventDetails;