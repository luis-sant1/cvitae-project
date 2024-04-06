//Curiculum 
import { useNavigate, useParams } from "react-router-dom"
export default function CVitae(data) {
    const {name} = useParams();
    const navigate = useNavigate();
    return (
        <>
            <button type="button" onClick={() => {navigate('/')} }>Home</button>
            <h1>Aquí estará el cv de {name}</h1>
        </>
    )
}