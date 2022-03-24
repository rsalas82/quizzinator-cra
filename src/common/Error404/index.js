import {styledComponents as styled} from "styled-components"
import { useLocation } from "wouter"
import './Error404.css'

const Error404 = styled.div`
    background-color: var(--theme-color_1);
    padding: 2rem;
    border-radius: 5px;
`


() => {
    const location = useLocation()
    return (
        <div>
            <h2>Error 404</h2>
            <p>{`Sorry the page ${location[0]} does not exist!`}</p>
        </div>
    )
    
}

export default Error404