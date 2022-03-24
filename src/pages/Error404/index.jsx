import { useLocation } from "wouter"
import Container from "../../components/Container"
import './Error404.css'

const Error404 = () => {
    const location = useLocation()
    return (
        <Container className="Error404">
            <h2>Error 404</h2>
            <p>{`Sorry the page ${location[0]} does not exist!`}</p>
        </Container>
    )
    
}

export default Error404